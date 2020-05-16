import React, { Component } from 'react';
import {    
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
  MDBTabContent,
  MDBTabPane
} from "mdbreact";
import LeftSide from './SalonPageComponent/LeftSide'
import SalonAbout from './SalonPageComponent/SalonAbout'
import SalonGallery from './SalonPageComponent/SalonGallery'
import SalonCalendar from './SalonPageComponent/SalonCalendar'
import { connect } from 'react-redux'
import isEmpty from 'lodash.isempty';
import { getthisSalon } from '../store/actions/SalonActions'

class SalonPage extends Component {
    state = {
        activeItemPills: '1',
        CurrentSalon:[],
        isLaoding:true
      };
      togglePills = tab => () => {
        const { activePills } = this.state;
        if (activePills !== tab) {
          this.setState({
            activeItemPills: tab
          });
        }
      };
    componentDidMount = ()=> { 
      const { id } = this.props.match.params;
        this.props.dispatch(getthisSalon(id))
        this.setState({
          CurrentSalon:this.props.CurrentSalon,
          isLoading: isEmpty(this.props.CurrentSalon)?true:false
       })
           
    }
    render() {
      const { id } = this.props.match.params;
      const { authError, token,Error} = this.props;
      const { CurrentSalon,isLoading} = this.state
      if(isLoading === true){
        if(!isEmpty(this.props.CurrentSalon)){
        this.setState({
          CurrentSalon:this.props.CurrentSalon,
          isLoading: isEmpty(this.props.CurrentSalon)?true:false
       })
      }
      }
      
        return (
            <div id="classicformpage">
        
            <MDBView>
              <div className="huerotate" style={{ backgroundImage: `url(${require("../assets/images/Img2.jpg")})` }}
    ></div>
              <MDBMask overlay="black-strong"  
               className="d-flex justify-content-center align-items-center gradient">
                <MDBContainer className="HJ-85">
                  <MDBRow className="h-100">
                  <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left d-none d-md-block col-md-4 mt-xl-4 mb-4"
                >
                  <LeftSide activeItemPills={this.state.activeItemPills} togglePills={this.togglePills} />
                   </MDBAnimation>
                   <MDBCol md="8" xl="8" className="mb-4 ">
                   <MDBAnimation type="fadeInRight" className="h-100" delay=".3s">
                   <MDBCard id="classic-card" className="h-100">
                   <MDBCardBody  className="h-100">
                   {
                    isLoading===true?
                    <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span> </div>
                    :
                  (
                   <MDBTabContent activeItem={this.state.activeItemPills}>
                  <MDBTabPane tabId='1'>
                      <SalonAbout currentSalon={CurrentSalon} isLoading={isLoading}/>
                  </MDBTabPane>
                  <MDBTabPane tabId='2'>
                      <SalonGallery currentSalonGallery={CurrentSalon.images}  isLoading={isLoading}/>
                  </MDBTabPane>
                  <MDBTabPane tabId='3'>
                      <SalonCalendar/>
                  </MDBTabPane>
                </MDBTabContent>
                )
                }

                     </MDBCardBody>
                     </MDBCard>
                  </MDBAnimation>
                  </MDBCol>


    
                    
                    </MDBRow>
                    </MDBContainer>
                    </MDBMask>
                    </MDBView>
                    </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
      authError: state.profile.authError,
      token: state.profile.token,
      CurrentSalon: state.salon.currentSalon,
      Error: state.salon.Error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getthisSalon: (id) => dispatch(getthisSalon(id)),
    dispatch
  }
}
export default connect(mapStateToProps)(SalonPage);