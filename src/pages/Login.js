import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'
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
    MDBAlert 
  } from 'mdbreact';
  
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
       return (
        <>
        <MDBEdgeHeader color=' darken-3' className='sectionPage' />
        <MDBAnimation type='zoomIn' duration='500ms'>
          <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mt-3 mx-auto'>
              <MDBJumbotron>
                <form>
                  <p className='h5 text-center mb-4'>Sign in</p>
                  <div className='grey-text'>
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
                       value={this.state.cred.email}
                    />
                    <MDBInput label='Type your password' icon='lock' group type='password' id="password" validate 
                       onChange={this.onChange} value={this.state.cred.password} />
                  </div>
                  <div className='text-center'>
                  <MDBAlert color="danger" className={authErrorClass}>
                  { authError}
                 </MDBAlert>
                    <MDBBtn disabled={!this.validateForm()} onClick={this.onSubmit} onChange={this.onChange}>Login</MDBBtn>
                    <Link to="/Register" className="btn btn-link">Register</Link>
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)