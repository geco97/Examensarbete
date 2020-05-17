import React, { Component } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBView, MDBMask, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } 
from "mdbreact";

class VideoCard extends Component {
    OnClickedVedio=(VideoURl,VideoTitle)=>{
        this.props.onChooseVideo(VideoURl,VideoTitle)
    }
    render() {
        
        return (
            <div>
                 <h3 className="display-3 font-weight-bold mb-0 pt-md-5">Section3{" "}
               </h3>
               <hr className="my-4 w-75" />
                <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="NormalH1 z-depth-1-half">
          <MDBView className="NormalH">
          <img
                src={require("../../../../assets/images/images/fottVard/Logo.jpg")}
                width="100%"
                className="img-fluid  img-thumbnail"
                alt=""
              />
            <MDBMask className="flex-center" overlay="orange-slight" style={{ overflow:"hidden"}} >
            <MDBBtn color="unique" className="rounded-circle z-depth-1-half" 
            onClick={(e)=>this.OnClickedVedio('Videos1','Klippstugan')}
              style={{padding:"14px 16px "}}>
              <MDBIcon icon="play" size="md"/> 
              </MDBBtn>
        </MDBMask>
      </MDBView>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="NormalH1 z-depth-1-half">
          <MDBView className="NormalH">
          <img
                src={require("../../../../assets/images/images/harmoniq/Logo.png")}
                width="100%"
                className="img-fluid  img-thumbnail"
                alt=""
              />
            <MDBMask className="flex-center" overlay="orange-slight" style={{ overflow:"hidden"}} >
            <MDBBtn color="unique" className="rounded-circle z-depth-1-half" 
              onClick={(e)=>this.OnClickedVedio('Videos2','Harmoniq')}
              style={{padding:"14px 16px "}}>
              <MDBIcon icon="play" size="md"/> 
              </MDBBtn>
        </MDBMask>
      </MDBView>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="NormalH1 z-depth-1-half">
          <MDBView className="NormalH">
          <img
                src={require("../../../../assets/images/images/klipstugan/Logo.jpg")}
                width="100%"
                className="img-fluid  img-thumbnail"
                alt=""
              />
            <MDBMask className="flex-center" overlay="orange-slight" style={{ overflow:"hidden"}} >
            <MDBBtn color="unique" className="rounded-circle z-depth-1-half" 
            onClick={(e)=>this.OnClickedVedio('Videos4','Relax Lounge')}
              style={{padding:"14px 16px "}}>
              <MDBIcon icon="play" size="md"/> 
              </MDBBtn>
        </MDBMask>
      </MDBView>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard collection className="NormalH1 z-depth-1-half">
          <MDBView className="NormalH">
          <img
                src={require("../../../../assets/images/images/relaxlounge/Logo.jpg")}
                width="100%"
                className="img-fluid  img-thumbnail"
                alt=""
              />
            <MDBMask className="flex-center" overlay="orange-slight" style={{ overflow:"hidden"}} >
            <MDBBtn color="unique" className="rounded-circle z-depth-1-half" 
            onClick={(e)=>this.OnClickedVedio('Videos5','Aktiv Fötter')}
              style={{padding:"14px 16px "}}>
              <MDBIcon icon="play" size="md"/> 
              </MDBBtn>
        </MDBMask>
      </MDBView>
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
            </div>
        );
    }
}

export default VideoCard;