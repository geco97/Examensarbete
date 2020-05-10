import React, { Component } from 'react';
import {
    MDBNav,
  MDBAlert,
  MDBLink,
  MDBNavItem,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBTabContent,
  MDBTabPane,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBAnimation
} from "mdbreact";
import { connect } from 'react-redux'
import MapChart from './SalonListComponents/MapChart'
import SalonleftSide from './SalonListComponents/SalonleftSida'
import { getAllSalons } from '../store/actions/SalonActions'
import isEmpty from 'lodash/isEmpty';
import Reserve from './Modal/Reserve';

const mapStateToProps = (state) => {
  return {
      authError: state.profile.authError,
      token: state.profile.token,
      salonList: state.salon.salonList,
      Error: state.salon.Error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllSalons: () => dispatch(getAllSalons()),
    dispatch
  }
}

class Salon extends Component { 
    state={
      isLoading: true,
      salonList:"",
      selectedSalon:"",
      showPopUp:false,
      ChoosenSalon:""
    }
    showinMap = (salon) =>{
      this.setState({
        selectedSalon:salon
      })
    }
    ShowPopup = (salon) =>{
      this.setState({
        showPopUp:true,
        ChoosenSalon:salon
      })
    }
    closePopup = () =>{
      this.setState({
        showPopUp:false,
        ChoosenSalon:""
      })
    }
    componentDidMount = ()=> { 
      if(this.state.isLoading === true){
        this.props.dispatch(getAllSalons());
        this.setState({
          salonList:this.props.salonList,
          isLoading: isEmpty(this.props.salonList)?true:false
       })
      }
    }
    render() {
      const { authError, token,Error} = this.props;
      const { salonList,isLoading,selectedSalon,showPopUp,ChoosenSalon} = this.state
       if(isLoading === true){
        this.props.dispatch(getAllSalons());
       if(!isEmpty(this.props.salonList)){
          this.setState({
            isLoading: isEmpty(this.props.salonList)?true:false,
            salonList:this.props.salonList
        })
      }
      }
        return (
            <div id="classicformpage">
        
            <MDBView>
              <div className="huerotate" style={{ backgroundImage: `url(${require("../assets/images/Img2.jpg")})` }}
    ></div>
              <MDBMask overlay="black-strong"   className="d-flex justify-content-center align-items-center gradient">
                <MDBContainer className="HJ-85">
                  <MDBRow className="h-100">
                  <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left d-none d-md-block col-md-4 mt-xl-4 mb-4"
                >
                  {
                    isLoading===true?
                    <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span> </div>
                    :
                    <SalonleftSide salonArray={salonList} showinMap={this.showinMap}
                    ShowPopup={this.ShowPopup}
                    />
                  }
                  
                   </MDBAnimation>
                   <MDBCol md="8" xl="8" className="mb-4 ">
                   <MDBAnimation type="fadeInRight" className="h-100" delay=".3s">
                   <MDBCard id="classic-card" className="h-100">
                   <MDBCardBody  className="h-100">
                   <MDBMask className="p-4" style={{ overflow:"hidden"}}>
                   <MapChart salonArray={salonList} selectedSalon={selectedSalon}/>
                   </MDBMask>
                     </MDBCardBody>
                     </MDBCard>
                  </MDBAnimation>
                  </MDBCol>


                   
    
                    
                    </MDBRow>
                    </MDBContainer>
                    </MDBMask>
                    </MDBView>
                    <Reserve showmodal={showPopUp} closePopup={this.closePopup}/>
                    </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Salon);