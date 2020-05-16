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
        videoUrl:""
    }
    onChooseVideo=(videoUrl)=>{
        if(videoUrl !== ""){
            this.setState({
                isOpen: true,
                videoUrl:videoUrl
            })
        }else{
            this.setState({
                isOpen: false,
                videoUrl:""
            })
        }
    }

    render() {
        const {isOpen,videoUrl} = this.state;
        return (
            <div>
              
                {
                   isOpen===true?
                    <VideoPlay videoUrl={videoUrl}/>
                   : 
                   <VideoCard onChooseVideo={this.onChooseVideo}/>
                }
            </div>
        );
    }
}

export default Section3Body;