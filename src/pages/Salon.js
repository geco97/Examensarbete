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
import MapChart from './SalonListComponents/MapChart'
import SalonleftSide from './SalonListComponents/SalonleftSida'

class Salon extends Component { 
    render() {
        return (
            <div id="classicformpage">
        
            <MDBView>
              <div className="huerotate" style={{ backgroundImage: `url(${require("../assets/images/Img2.jpg")})` }}
    ></div>
              <MDBMask overlay="black-strong"   className="d-flex justify-content-center align-items-center gradient">
                <MDBContainer fluid className="HJ-85">
                  <MDBRow className="h-100">
                    <MDBAnimation
                      type="fadeInUp"
                      delay=".3s"
                      className="white-text text-center text-md-left  col-md-12 mt-xl-12 mb-5"
                    >
                     <MDBCard id="classic-card "  className="h-100"> 
                        <MDBCardBody >
                        <MDBRow className="h-100">
                        <MDBCol md="4" xl="4" className="border-right">
                          <SalonleftSide/>
                        </MDBCol>
                        <MDBCol md="8" xl="8" className="border-left d-none d-md-block">
                            <MapChart/>
                        </MDBCol>
                        </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    
                    </MDBAnimation>
    
                    
                    </MDBRow>
                    </MDBContainer>
                    </MDBMask>
                    </MDBView>
                    </div>
        );
    }
}

export default Salon;