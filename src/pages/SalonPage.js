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
import { getthisSalon, getThisSalonTicket } from '../store/actions/SalonActions'

class SalonPage extends Component {
    state = {
        activeItemPills: '1',
        CurrentSalon:[],
        isLaoding:true,
        TicketList:[]
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
      console.log(id)
        this.props.dispatch(getthisSalon(id))
        this.props.dispatch(getThisSalonTicket(id))
        this.setState({
          CurrentSalon:this.props.CurrentSalon,
          TicketList:this.props.TicketList,
          isLoading: isEmpty(this.props.CurrentSalon)?true:false
       })
           
    }
    render() {
      const { id } = this.props.match.params;
      const { authError, token,Error,TicketList} = this.props;
      const { CurrentSalon,isLoading} = this.state
      if(isLoading === true){
        if(!isEmpty(this.props.CurrentSalon)){
        this.setState({
          CurrentSalon:this.props.CurrentSalon,
          isLoading: isEmpty(this.props.CurrentSalon)?true:false
       })
      }
      }
      const eventA =[];
      if(this.props.TicketList.length >=1){
      this.props.TicketList.map((Card)=>{
        eventA.push(
          {
            "title":"Reservation",
            "start":`${Card.Date}T${Card.Time}:00`
          })
      })}
      console.log(CurrentSalon)
        return (
            <div id="classicformpage">
        
            <MDBView>
            <video className="video-intro " playsInline={true}  autoPlay={true} muted={true} loop={true} >
      <source src={require("../assets/Videos/animation.mp4")} type="video/mp4" />
    </video>
          {/*    <div className="huerotate" style={{ backgroundImage: `url(${require("../assets/images/Img2.jpg")})` }}
    ></div> gradient*/}
              <MDBMask overlay="black-strong"  
               className="d-flex justify-content-center align-items-center gradient2 ">
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
                      <SalonGallery currentSalonGallery={CurrentSalon.images} currentSalon={CurrentSalon}  isLoading={isLoading}/>
                  </MDBTabPane>
                  <MDBTabPane tabId='3'>
                      <SalonCalendar TicketList={eventA} currentSalon={CurrentSalon} user={this.props.user}/>
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
  console.log("asd",state)
  return {
      authError: state.profile.authError,
      token: state.profile.token,
      user:state.profile.user,
      CurrentSalon: state.salon.currentSalon,
      Error: state.salon.Error,
      TicketList: state.ticket.TicketList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getthisSalon: (id) => dispatch(getthisSalon(id)),
    getThisSalonTicket: (id) => dispatch(getThisSalonTicket(id)),
    dispatch
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SalonPage);