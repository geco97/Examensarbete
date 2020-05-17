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
import isEmpty from 'lodash.isempty';

class Myprofile extends Component {
  state={
    user:this.props.user,
    password:"********"
  }
  onChange=(e)=>{
   let field = e.target.id;
    this.setState({
     user:{...this.state.user,[field]:e.target.value}
    })
  }
  onChangePassword=(e)=>{
    if(!isEmpty(e.target.value) && e.target.value.length >=8 && e.target.value !=="********"){
      this.setState({
        user:{...this.state.user,password:e.target.value},
        password:e.target.value
       })
    }
  }
  OnSaveThisUser=()=>{
   // console.log(this.state.user)
   this.props.onUpdateUser(this.state.user)

  }
    render() {
        const {firstname, lastname, email,  addressline, zipcode, city, country, termsaccept} = this.state.user
        var massage ;
        let password = this.state.password;
        var authErrorShow = "d-none";
        const {authError,authErrorClass} = this.props;
        return (
            <div>
                <h3 className="text-center">
                          <MDBIcon icon="user" />  My Profile
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
                          id="firstname"
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
                          id="lastname"
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
                           onChange={this.onChangePassword}
                           value={password}
                        />
                            </MDBCol>
                           

                        </MDBRow>
                        <hr className="hr-light" />
                        <div className="text-center mt-4 ">
                        <MDBAlert color={authErrorClass} className={authErrorShow}>
                      { massage}
                     </MDBAlert>
                    <MDBBtn  color="indigo" onClick={this.OnSaveThisUser}>Save</MDBBtn>
                    {/*disabled={!this.validateForm()} onClick={this.onSubmit} onChange={this.onChange}*/}
                    </div>
            </div>
        );
    }
}

export default Myprofile;