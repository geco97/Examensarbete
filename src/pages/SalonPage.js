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
import LeftSide from './SalonPageComponent/leftSide'
import SalonAbout from './SalonPageComponent/SalonAbout'
import SalonGallery from './SalonPageComponent/SalonGallery'
import SalonCalendar from './SalonPageComponent/SalonCalendar'
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
                <MDBContainer className="HJ-85">
                  <MDBRow className="h-100">
                  <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left d-none d-md-block col-md-4 mt-xl-4 mb-4"
                >
                  <LeftSide activeItemPills={this.state.activeItemPills} togglePills={this.togglePills} />
                   </MDBAnimation>
                   <MDBCol md="8" xl="8" className="mb-4 ">
                   <MDBAnimation type="fadeInRight" className="h-100" delay=".3s">
                   <MDBCard id="classic-card" className="h-100">
                   <MDBCardBody  className="h-100">
                   <MDBTabContent activeItem={this.state.activeItemPills}>
                  <MDBTabPane tabId='1'>
                      <SalonAbout/>
                  </MDBTabPane>
                  <MDBTabPane tabId='2'>
                      <SalonGallery/>
                  </MDBTabPane>
                  <MDBTabPane tabId='3'>
                      <SalonCalendar/>
                  </MDBTabPane>
                </MDBTabContent>
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

export default SalonPage;