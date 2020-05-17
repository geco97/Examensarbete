import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBDropdownItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBIcon,
  MDBDropdownMenu,
  MDBBtn
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { connect } from 'react-redux'
import { logout } from './store/actions/authActions'
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
      user: state.profile.user,
      token: state.profile.token
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      logout: () => dispatch(logout()),
      dispatch
  }
}

class App extends Component {
  state = {
    collapseID: '',
    isLoged:(!isEmpty(this.props.token) || !isEmpty(sessionStorage.getItem('jwt'))),
    user:""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collID => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: '' });
  };
  logout = (e) => {
    this.props.logout()
    this.setState({
      isLoged:false,
      user:""
    })
  }
  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );

    let { collapseID,isLoged,user } = this.state;
    const { token } = this.props;
    isLoged=(!isEmpty(token) || !isEmpty(sessionStorage.getItem('jwt')))
    

    if(isLoged === true){
      user=(!isEmpty(sessionStorage.getItem('jwt')))?JSON.parse(localStorage.getItem("User")):"";
    }  
    console.log(isLoged)
    let NavColor=(collapseID==="mainNavbarCollapse")?"rgb(45,37,64)":"transparent";
    return (
      <Router>
        <div className='flyout'>
          <MDBNavbar dark expand='md' fixed='top' scrolling style={{backgroundColor:NavColor}}>
            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>

            <img  className=" size-10 text-white" width="125px" src={require("./assets/Logo.PNG")} />

            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID}  navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                  <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/Section1'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                  <strong>Section1</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/Section2'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                  <strong>Section2</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/Section3'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                  <strong>Section3</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/Salons'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                  <strong>Salon</strong>
                  </MDBNavLink>
                </MDBNavItem>
                {
                (isLoged)?
                <MDBNavItem style={{border: "1px solid #fff"}} className="px-2 mx-2">
                <MDBDropdown >
                  <MDBDropdownToggle nav caret>
                  <strong> {user.firstname} {user.lastname} </strong> <MDBIcon icon="user" />
                                     
                    
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem className="mx-1 px-1"><Link to={"/profile/"+user._id}>My Profile</Link></MDBDropdownItem>
                    <MDBDropdownItem href="#!" className="mx-1 px-1"><Link to="/profile">My appointment</Link></MDBDropdownItem>
                    <MDBDropdownItem onClick={this.logout} className="mx-1 px-1"><span style={{paddingLeft:"10px"}}>Log out</span></MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
                :
                <>
                <MDBNavItem >
                  <MDBNavLink
                    exact
                    to='/Login'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Log in</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/Register'
                    onClick={this.closeCollapse('mainNavbarCollapse')}
                  >
                    <strong>Register</strong>
                  </MDBNavLink>
                </MDBNavItem>
                </>
                }
       
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          {collapseID && overlay}
          <main >
            <Routes />
          </main>
          <MDBFooter >
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright: Benan & Jack</p>
          </MDBFooter>
        </div>
      </Router>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)