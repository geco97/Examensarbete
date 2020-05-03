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
import { update } from '../store/actions/authActions'
import isEmpty from 'lodash/isEmpty';
import Myprofile from './profileComponents/Myprofile'
import TablePage from './profileComponents/profileApointment'
import TableFAVPage from './profileComponents/profileFivorite'

const mapStateToProps = (state) => {
  return {
      authError: state.profile.authError,
      token: state.profile.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (credentials) => dispatch(update(credentials))
  }
}

class profile extends Component {
    state = {
        activeItemPills: '1'
      };
      togglePills = tab => () => {
        const { activePills } = this.state;
        if (activePills !== tab) {
          this.setState({
            activeItemPills: tab
          });
        }
      };
    render() {
       
        const { activeItemPills } = this.state;
        const { authError, token } = this.props;
        console.log(sessionStorage.getItem('jwt'))
        if(isEmpty(token) && isEmpty(sessionStorage.getItem('jwt'))){return <Redirect to='/' />}
        var authErrorClass;
        
        if (!authError ) {
            authErrorClass= "d-none";
        }
        return (
                <div id="classicformpage">
        
        <MDBView>
          <div className="huerotate" style={{ backgroundImage: `url(${require("../assets/images/Img2.jpg")})` }}
></div>
          <MDBMask overlay="black-strong"   className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left d-none d-md-block col-md-3 mt-xl-3 mb-5"
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

                <MDBCol md="9" xl="9" className="mb-4" >
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card" style={{height:"500px"}}> 
                      <MDBCardBody >
                      <MDBTabContent activeItem={activeItemPills}>
                  <MDBTabPane tabId='1'>
                  <Myprofile authError={authError}/>
                  </MDBTabPane>
                  <MDBTabPane tabId='2'>
                   <TablePage/>
                  </MDBTabPane>
                  <MDBTabPane tabId='3'>
                  <TableFAVPage/>
                  </MDBTabPane>
                </MDBTabContent>


{/*
                        
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Sign in:
                        </h3>
                        <hr className="hr-light" />
                       
                        <MDBInput label='Type your email'
                      icon='envelope'
                      group
                      type='email'
                      validate
                      error='wrong'
                      id="email"
                      success='right'
                       onChange={this.onChange}
                       value=""
                        />
                        <MDBInput
                         label='Type your password' icon='lock' group type='password' id="password" validate 
                         onChange={this.onChange} value=""
                        />
                        <div className="text-center mt-4 ">
                  <MDBAlert color="danger" className={authErrorClass}>
                  { authError}
                 </MDBAlert>
                    <MDBBtn color="indigo">Spara</MDBBtn>*/}
                   {/*
                   disabled={!this.validateForm()} onClick={this.onSubmit} onChange={this.onChange} 
                   
                        </div>*/}
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
export default connect(mapStateToProps, mapDispatchToProps)(profile)