import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBEdgeHeader,
    MDBAnimation,
    MDBAlert ,
    MDBInputGroup,
    MDBJumbotron,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,   
    MDBIcon,
    MDBView,
    MDBCard,
    MDBCardBody,
    MDBFormInline
  } from 'mdbreact';
import { register } from '../store/actions/authActions'
const mapStateToProps = (state) => {
  console.log(state)
  return {
      authError: state.profile.authError,
      token: state.profile.token,
     regsuccess: state.profile.regsuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      register: (credentials) => dispatch(register(credentials))
  }
}
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '', 
            lastname: '', 
            email: '', 
            password: '', 
            addressline: '', 
            zipcode: '', 
            city: '', 
            country: 'Sweden', 
            termsaccept: false
        }
    }
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 &&
         this.state.firstname.length > 0 &&
         this.state.termsaccept === true;
    }
    handleChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }
    handleChangeckB = e =>{
        console.log(e.target.checked)
        this.setState({[e.target.id]: !e.target.checked})
        console.log(this.state.termsaccept)
    }
    render() {
        const {firstname, lastname, email, password, addressline, zipcode, city, country, termsaccept} = []
        const { authError,regsuccess } = this.props
        var authErrorClass;
        var massage ;
        var authErrorShow = "d-none";
        if(regsuccess){
            authErrorClass= "primary";
            massage = "register success";
            authErrorShow = "";
        }
        else{
            if (authError) {
                authErrorClass= "danger";
                massage = authError;
                authErrorShow = "";
            } else{
                authErrorShow = "d-none"; 
            }
        }

        return (
          <div id="classicformpage">
            <MDBView>
          <div className="huerotate" style={{ backgroundImage: `url(${require("../assets/images/Img1.jpg")})` }}
></div>
          <MDBMask overlay="black-strong"   className="d-flex justify-content-center align-items-center gradient">
          

            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left d-none d-md-block col-md-4 mt-xl-4 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    Sign up right now!
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla.
                  </h6>
                
                </MDBAnimation>

                <MDBCol md="8" xl="8" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody >
                        <h3 className="text-center">
                          <MDBIcon icon="user" /> Sign up:
                        </h3>
                        <hr className="hr-light" />
                        <MDBRow>
                        <MDBCol md='6'>
                       <MDBInput
                          label='Type your Firstname'
                          icon='user'
                          group
                          size="sm"
                          type='Text'
                          validate
                          error='wrong'
                          className="my-1"
                          containerClass="m-0"
                          id="Firstname"
                          success='right'
                           onChange={this.onChange}
                           value={firstname}
                        />
                            </MDBCol>
                            <MDBCol md='6'>
                            <MDBInput
                          label='Type your Lastname'
                          group
                          type='Text'
                          validate
                          size="sm"
                          error='wrong'
                          className="my-1"
                          containerClass="m-0"
                          id="Lastname"
                          success='right'
                           onChange={this.onChange}
                           value={lastname}
                        />
                        </MDBCol>
                        <MDBCol md='12'>
                            <MDBInput
                          label='Type your address'
                          group
                          icon='map-marker-alt'
                          type='text'
                          validate
                          size="sm"
                          error='wrong'
                          className="my-1"
                          containerClass="m-0"
                          id="addressline"
                          success='right'
                           onChange={this.onChange}
                           value={addressline}
                        />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput
                          label='Type your zipcode'
                          group
                          type='text'
                          validate
                          error='wrong'
                          id="zipcode"
                          className="my-1"
                          containerClass="m-0"
                          success='right'
                           onChange={this.onChange}
                           value={zipcode}
                        />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput
                          label='Type your city'
                          group
                          type='text'
                          validate
                          error='wrong'
                          id="city"
                          className="my-1"
                          containerClass="m-0"
                          success='right'
                           onChange={this.onChange}
                           value={city}
                        />
                            </MDBCol>
                            <MDBCol md='4'>
                            <MDBInput
                          label='Type your country'
                          group
                          type='text'
                          validate
                          error='wrong'
                          className="my-1"
                          containerClass="m-0"
                          id="country"
                          success='right'
                           onChange={this.onChange}
                           value={country}
                        />
                            </MDBCol>
                            <MDBCol md='6'>
                            <MDBInput
                          label='Type your email'
                          icon='envelope'
                          group
                          type='email'
                          validate
                          className="my-1"
                          containerClass="m-0"
                          error='wrong'
                          id="email"
                          success='right'
                           onChange={this.onChange}
                           value={email}
                        />
                            </MDBCol>
                            <MDBCol md='6' >
                            <MDBInput
                          label='Comfirm your email'
                          icon='envelope'
                          group
                          type='email'
                          className="my-1"
                          containerClass="m-0"
                          validate
                          error='wrong'
                          id="Confirmemail"
                          success='right'
                           onChange={this.onChange}
                           value={email}
                        />
                            </MDBCol>
                            <MDBCol md='6'>
                            <MDBInput
                          label='Type your password'
                          icon='lock'
                          className="my-1"
                          containerClass="m-0"
                          group
                          type='password'
                          validate
                          error='wrong'
                          id="password"
                          success='right'
                           onChange={this.onChange}
                           value={password}
                        />
                            </MDBCol>
                            <MDBCol md='6'>
                            <MDBInput
                          label='Comfirm your password'
                          icon='lock'
                          className="my-1"
                          containerClass="m-0"
                          group
                          type='password'
                          validate
                          error='wrong'
                          id="Confirmpassword"
                          success='right'
                           onChange={this.onChange}
                           value={password}
                        />
                            </MDBCol>

                        </MDBRow>
                        <MDBCol md='12' className='mt-3 mx-auto'>
                        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUncheckedDisabled2" validate value={termsaccept}/>
        <label class="custom-control-label" for="defaultUncheckedDisabled2">Filled-in unchecked</label>
      </div>
                        </MDBCol>
                        <div className="text-center mt-4 ">
                        <MDBAlert color={authErrorClass} className={authErrorShow}>
                      { massage}
                     </MDBAlert>
                    <MDBBtn disabled={!this.validateForm()} nClick={this.onSubmit} onChange={this.onChange} color="deep-purple">Register</MDBBtn>
                    <Link to="/Login" className="btn btn-dark" >Login</Link>
              
                        
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




//export default (RegistrationForm)

 export default connect(mapStateToProps,mapDispatchToProps)(Register)