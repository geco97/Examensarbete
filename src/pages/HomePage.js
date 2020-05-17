import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBAnimation,
  MDBNavLink,
  MDBMask,
  MDBView,
  MDBBtn
} from 'mdbreact';
import './HomePage.css';
import { Route, Switch } from 'react-router-dom';

import Section1 from './HomePageRoute/Section1';
import Section2 from './HomePageRoute/Section2';
import Section3 from './HomePageRoute/Section3';
import MainPage from './HomePageRoute/MainPage';

class HomePage extends React.Component {
  //scrollToTop = () => window.scrollTo(0, 0);

  render() {
   
    return (
      <>
    <MDBView>
    <video className="video-intro " playsInline={true}  autoPlay={true} muted={true} loop={true} >
      <source src={require("../assets/Videos/animation.mp4")} type="video/mp4" />
    </video>
    <MDBMask  className="d-flex justify-content-center align-items-center gradient2">
      <MDBContainer className="p-md-3 px-sm-0">
        {/*  <MDBRow>
          <MDBCol md="12">
            <MainPage/>
          </MDBCol>
          <MDBCol md="12">
            <Section1/>
          </MDBCol>
          <MDBCol md="12">
            <Section2/>
          </MDBCol>
          <MDBCol md="12">
            <Section3/>
          </MDBCol>
        </MDBRow>
       
        <Section1/>
        <Section2/>
        <Section3/>*/}
     <Switch>
        <Route exact path='/' component={MainPage} /> 
        <Route exact path='/Section1' component={Section1} /> 
        <Route exact path='/Section2' component={Section2} /> 
        <Route exact path='/Section3' component={Section3} />   
      </Switch>
      
      </MDBContainer>
    </MDBMask>
  </MDBView>

  
      </>
    );
  }
}

export default HomePage;
