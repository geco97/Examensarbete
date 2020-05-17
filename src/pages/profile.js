import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
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
import { update,get } from '../store/actions/authActions'
import isEmpty from 'lodash/isEmpty';
import Myprofile from './profileComponents/Myprofile'
import TablePage from './profileComponents/profileApointment'
import TableFAVPage from './profileComponents/profileFivorite'

const mapStateToProps = (state) => {
  console.log(state)
  return {
      authError: state.profile.authError,
      token: state.profile.token,
      user: state.profile.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get:(id)=>dispatch(get(id)),
    update: (credentials) => dispatch(update(credentials)),
    dispatch
  }
}

class profile extends Component {
    state = {
        activeItemPills: '1',
        user:{},
        isLoading:true

      };
      togglePills = tab => () => {
        const { activePills } = this.state;
        if (activePills !== tab) {
          this.setState({
            activeItemPills: tab
          });
        }
      };
componentDidUpdate(prevProps) {
  if (this.props.user !== prevProps.user) {
      this.setState({
        user:this.props.user,
        isLoading:false
      })
        }
      }
componentDidMount = ()=> { 
  const { id } = this.props.match.params;
        if(this.state.isLoading === true){
          this.props.dispatch(get(id))
          this.setState({
            user:this.props.user,
            isLoading:(isEmpty(this.props.user))?true:false
          })
        }
}
onUpdateUser=(user)=>{
  //console.log(user)
  this.props.dispatch(update(user))
}
    render() {
       console.log("asd",this.props)
        const { activeItemPills,isLoading,user } = this.state;
        const { authError, token} = this.props;
        console.log(sessionStorage.getItem('jwt'))
        if(isEmpty(token) && isEmpty(sessionStorage.getItem('jwt'))){
          return <Redirect to='/' />
        }
        var authErrorClass;
        
        if (!authError ) {
            authErrorClass= "d-none";
        }
        return (
                <div id="classicformpage">
        
        <MDBView>
         {/* <div className="huerotate" style={{ backgroundImage: `url(${require("../assets/images/Img2.jpg")})` }}
></div>*/}
<video className="video-intro " playsInline={true}  autoPlay={true} muted={true} loop={true} >
      <source src={require("../assets/Videos/animation.mp4")} type="video/mp4" />
    </video>
          <MDBMask overlay="black-strong"   className="d-flex justify-content-center align-items-center gradient2">
            <MDBContainer  className="HJ-85">
              {
isLoading===true?
<MDBRow>
<MDBCol md="12" xl="12" className="my-4" >
<div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </MDBCol>
      </MDBRow>
:
        (
<MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left d-none d-md-block col-md-3 mt-xl-3 my-5"
                >
                  <MDBNav className='nav-pills d-block'>
                  <MDBNavItem>
                    <MDBLink active={activeItemPills === '1'} onClick={this.togglePills('1')} link>
                      My Profile
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink  active={activeItemPills === '2'} onClick={this.togglePills('2')} link>
                      My appointments
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink  active={activeItemPills === '3'} onClick={this.togglePills('3')} link>
                      My favorite
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
                
                </MDBAnimation>

                <MDBCol md="9" xl="9" className="my-4" >
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card" style={{height:"500px"}}> 
                      <MDBCardBody >
                      <MDBTabContent activeItem={activeItemPills}>
                  <MDBTabPane tabId='1'>
                  <Myprofile authError={authError} user={user} onUpdateUser={this.onUpdateUser}/>
                  </MDBTabPane>
                  <MDBTabPane tabId='2'>
                   <TablePage/>
                  </MDBTabPane>
                  <MDBTabPane tabId='3'>
                  <TableFAVPage/>
                  </MDBTabPane>
                </MDBTabContent>

                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
          
              </MDBRow>
        )
              }
              
            </MDBContainer>
          </MDBMask>
        </MDBView>

            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(profile)