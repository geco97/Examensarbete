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
    MDBJumbotron,
    MDBAlert ,
    MDBInputGroup
  } from 'mdbreact';
  
import { register } from '../store/actions/authActions'

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
            <>
            <MDBEdgeHeader color=' darken-3' className='sectionPage' />
            <MDBAnimation type='zoomIn' duration='500ms'>
              <MDBContainer>
              <MDBRow>
                <MDBCol md='12' className='mt-3 mx-auto'>
                  <MDBJumbotron>
                    <form>
                      <p className='h5 text-center mb-4'>Register</p>
                      <div className='grey-text'>
                      <MDBRow>
                            <MDBCol size="12" md='6' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Type your Firstname'
                          icon='user'
                          group
                          type='Text'
                          validate
                          error='wrong'
                          id="Firstname"
                          success='right'
                           onChange={this.onChange}
                           value={firstname}
                        />
                            </MDBCol>
                            <MDBCol md='6' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Type your Lastname'
                          group
                          type='Text'
                          validate
                          error='wrong'
                          id="Lastname"
                          success='right'
                           onChange={this.onChange}
                           value={lastname}
                        />
                            </MDBCol>
                            <MDBCol md='12' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Type your address'
                          group
                          icon='map-marker-alt'
                          type='text'
                          validate
                          error='wrong'
                          id="addressline"
                          success='right'
                           onChange={this.onChange}
                           value={addressline}
                        />
                            </MDBCol>
                            <MDBCol md='4' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Type your zipcode'
                          group
                          type='text'
                          validate
                          error='wrong'
                          id="zipcode"
                          success='right'
                           onChange={this.onChange}
                           value={zipcode}
                        />
                            </MDBCol>
                            <MDBCol md='4' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Type your city'
                          group
                          type='text'
                          validate
                          error='wrong'
                          id="city"
                          success='right'
                           onChange={this.onChange}
                           value={city}
                        />
                            </MDBCol>
                            <MDBCol md='4' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Type your country'
                          group
                          type='text'
                          validate
                          error='wrong'
                          id="country"
                          success='right'
                           onChange={this.onChange}
                           value={country}
                        />
                            </MDBCol>
                            <MDBCol md='6' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Type your email'
                          icon='envelope'
                          group
                          type='email'
                          validate
                          error='wrong'
                          id="email"
                          success='right'
                           onChange={this.onChange}
                           value={email}
                        />
                            </MDBCol>
                            <MDBCol md='6' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Comfirm your email'
                          icon='envelope'
                          group
                          type='email'
                          validate
                          error='wrong'
                          id="Confirmemail"
                          success='right'
                           onChange={this.onChange}
                           value={email}
                        />
                            </MDBCol>
                            <MDBCol md='6' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Type your password'
                          icon='lock'
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
                            <MDBCol md='6' className='mt-3 mx-auto'>
                            <MDBInput
                          label='Comfirm your password'
                          icon='lock'
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
                            <MDBCol md='12' className='mt-3 mx-auto'>
                            <MDBInputGroup
          containerClassName="mb-3"
          prepend={
            <div className="input-group-text">
              <MDBInput type="checkbox" id="termsaccept" validate value={termsaccept}/>
              <label>Filled-in unchecked</label>
            </div>
           
          }
             />
                           
                            </MDBCol>
                           
                      </MDBRow>
                       
                      </div>
                      <div className='text-center'>
                      <MDBAlert color={authErrorClass} className={authErrorShow}>
                      { massage}
                     </MDBAlert>
                        <MDBBtn  onClick={this.onSubmit} onChange={this.onChange}>Register</MDBBtn>
                        <Link to="/Login" className="btn btn-link">Login</Link>
                      </div>
                    </form>
                  </MDBJumbotron>
                </MDBCol>
                        </MDBRow>
              </MDBContainer>
            </MDBAnimation>
          </>
        );
    }
}

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


//export default (RegistrationForm)

 export default connect(mapStateToProps,mapDispatchToProps)(Register)