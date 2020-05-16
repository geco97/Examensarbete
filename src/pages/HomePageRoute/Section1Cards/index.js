import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } 
from "mdbreact";

const Section1Cards = () => {
  return (
    <section className="text-center my-5">
    
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="NormalH z-depth-1-half">
            <div className="NormalH view zoom NormalH" >
              <img
                src={require("../../../assets/images/sec1/ImgF3.png")}
                className="img-fluid  img-thumbnail"
                width="100%"
                alt=""
              />
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="NormalH z-depth-1-half">
            <div className="NormalH view zoom">
              <img
               src={require("../../../assets/images/sec1/imgH3.png")}
                className="img-fluid img-thumbnail"
                width="100%"
                alt=""
              />
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="NormalH z-depth-1-half">
            <div className="NormalH view zoom">
              <img
                src={require("../../../assets/images/sec1/imgK3.png")}
                className="img-fluid  img-thumbnail"
                width="100%"
                alt=""
              />
            </div>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="NormalH z-depth-1-half">
            <div className="NormalH view zoom">
              <img
                src={require("../../../assets/images/sec1/imgR4.png")}
                width="100%"
                className="img-fluid  img-thumbnail"
                alt=""
              />
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Section1Cards;