import React, { Component } from 'react';
import {    
  MDBMask,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
  MDBTabContent,
  MDBTabPane
} from "mdbreact";
import LeftSide from './SalonPageComponent/LeftSide'
import SalonAbout from './SalonPageComponent/SalonAbout'
import SalonGallery from './SalonPageComponent/SalonGallery'
class SalonPage extends Component {
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
                        <MDBCol md="2" xl="2" className="border-right">
<LeftSide activeItemPills={this.state.activeItemPills} togglePills={this.togglePills} />

                       
                        </MDBCol>
                        <MDBCol md="10" xl="10" className="border-left d-none d-md-block">
                        <MDBTabContent activeItem={this.state.activeItemPills}>
                  <MDBTabPane tabId='1'>
                      <SalonAbout/>
                  </MDBTabPane>
                  <MDBTabPane tabId='2'>
                      <SalonGallery/>
                  </MDBTabPane>
                  <MDBTabPane tabId='3'>
                      dads
                  </MDBTabPane>
                </MDBTabContent>
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

export default SalonPage;