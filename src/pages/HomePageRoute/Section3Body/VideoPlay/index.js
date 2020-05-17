import React, { Component } from 'react';
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
    MDBCard,
    MDBBtn
  } from 'mdbreact';import ReactPlayer from 'react-player'
import myVideo1 from '../../../../assets/Videos/Videos/Videos1.mp4'
import myVideo2 from '../../../../assets/Videos/Videos/Videos2.mp4'
import myVideo4 from '../../../../assets/Videos/Videos/Videos4.mp4'
import myVideo5 from '../../../../assets/Videos/Videos/Videos5.mp4'
class VideoPlay extends Component {
    handleClose=()=>{
        this.props.onChooseVideo("","");
    }
    OnClickedVedio=(VideoURl,VideoTitle)=>{
        this.props.onChooseVideo(VideoURl,VideoTitle)
    }
    render() {
        const Videot = () => {
            switch(this.props.videoUrl) {
      
                case "Videos1":
                    return <ReactPlayer 
                    url={myVideo1}
                     playing 
                     controls
                     width
                     playIcon
                     onEnded={this.handleClose}
                     />
                case "Videos2":
                    return <ReactPlayer 
                    url={myVideo2}
                     playing 
                     controls
                     width
                     playIcon
                     onEnded={this.handleClose}
                     />
                case "Videos4":
                    return <ReactPlayer 
                    url={myVideo4}
                     playing 
                     controls
                     width
                     playIcon
                     onEnded={this.handleClose}
                     />
                case "Videos5":
                    return <ReactPlayer 
                    url={myVideo5}
                     playing 
                     controls
                     width
                     playIcon
                     onEnded={this.handleClose}
                     />
      
              default:      return <h1>No Video match</h1>
            }
          }
      
        const myVideo=this.ChoosenVideo;
        return (
            <div>
                 <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                     {this.props.VideoTitle}
               </h3>
               <hr className="my-4 w-75" />
               {Videot()}
               <hr className="my-4 w-75" />
               <MDBRow>
                   <MDBCol xs="3" md="3"><MDBBtn color={this.props.VideoTitle==="Klippstugan"?"unique":"indigo"}  onClick={(e)=>this.OnClickedVedio('Videos1','Klippstugan')}>Klippstugan </MDBBtn></MDBCol>
                   <MDBCol xs="3" md="3"><MDBBtn color={this.props.VideoTitle==="Harmoniq"?"unique":"indigo"}  onClick={(e)=>this.OnClickedVedio('Videos2','Harmoniq')}>Harmoniq </MDBBtn></MDBCol>
                   <MDBCol xs="3" md="3"><MDBBtn color={this.props.VideoTitle==="Relax Lounge"?"unique":"indigo"}  onClick={(e)=>this.OnClickedVedio('Videos4','Relax Lounge')}>Relax Lounge </MDBBtn></MDBCol>
                   <MDBCol xs="3" md="3"><MDBBtn color={this.props.VideoTitle==="Aktiv Fötter"?"unique":"indigo"}  onClick={(e)=>this.OnClickedVedio('Videos5','Aktiv Fötter')}>Aktiv Fötter </MDBBtn></MDBCol>
               </MDBRow>
            </div>
        );
    }
}

export default VideoPlay;