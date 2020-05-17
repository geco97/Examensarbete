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
  } from 'mdbreact';
  import VideoCard from './VideoCard';
  import VideoPlay from './VideoPlay';


class Section3Body extends Component {
    state={
        isOpen: false,
        videoUrl:"",
        VideoTitle:""
    }
    onChooseVideo=(videoUrl,VideoTitle)=>{
        if(videoUrl !== ""){
            this.setState({
                isOpen: true,
                videoUrl:videoUrl,
                VideoTitle:VideoTitle
            })
        }else{
            this.setState({
                isOpen: false,
                videoUrl:"",
                VideoTitle:""
            })
        }
    }

    render() {
        const {isOpen,videoUrl,VideoTitle} = this.state;
        return (
            <div>
              
                {
                   isOpen===true?
                    <VideoPlay videoUrl={videoUrl} VideoTitle={VideoTitle} onChooseVideo={this.onChooseVideo}/>
                   : 
                   <VideoCard onChooseVideo={this.onChooseVideo}/>
                }
            </div>
        );
    }
}

export default Section3Body;