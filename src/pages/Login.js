import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import {
  MDBJumbotron,
  MDBAlert,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation
} from "mdbreact";
import { login } from '../store/actions/authActions'
const mapStateToProps = (state) => {
  return {
      authError: state.profile.authError,
      token: state.profile.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: (credentials) => dispatch(login(credentials))
  }
}

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
        user: {},
        cred: {
            email: '',
            password: ''
        }
    }
}
validateForm() {
     return this.state.cred.email.length > 0;
    }
 onChange = (e) => {
   const credentials = this.state.cred
   credentials[e.target.id] = e.target.value
   return this.setState({ cred: credentials })
}
onSubmit = (e) => {
    e.preventDefault()
    this.props.login(this.state.cred)
}
  render() {
   const { authError, token } = this.props;
        if(token || sessionStorage.getItem('jwt')){return <Redirect to='/' />}
        var authErrorClass;
        if (!authError ) {
            authErrorClass= "d-none";
        }
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
      />
    );
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
                  className="white-text text-center text-md-left d-none d-md-block col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign in right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                
                </MDBAnimation>

                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody >
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
                       value={this.state.cred.email}
                        />
                        <MDBInput
                         label='Type your password' icon='lock' group type='password' id="password" validate 
                         onChange={this.onChange} value={this.state.cred.password}
                        />
                        <div className="text-center mt-4 ">
                  <MDBAlert color="danger" className={authErrorClass}>
                  { authError}
                 </MDBAlert>
                    <MDBBtn disabled={!this.validateForm()} onClick={this.onSubmit} onChange={this.onChange} color="indigo">Login</MDBBtn>
                    <Link to="/Register" className="btn btn-dark" >Register</Link>
              
                          <hr className="hr-light" />
                          <div className="text-center d-flex justify-content-center white-label">
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="twitter"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="linkedin"
                              />
                            </a>
                            <a href="#!" className="p-2 m-2">
                              <MDBIcon
                                fab
                                icon="instagram"
                              />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
            <MDBCol md="12" className="text-center d-none d-md-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

      
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)