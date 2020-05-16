import React, { Component } from 'react';
import {MDBIframe} from 'mdbreact'
import ReactPlayer from 'react-player'
import myVideo from '../../../../assets/Videos/Videos/Videos5.mp4'


class VideoPlay extends Component {

    render() {
        console.log(this.props)
        let VideoU ="../../../../assets/Videos/Videos/Videos5.mp4";
        console.log(VideoU)
        return (
            <div>
                <ReactPlayer url={myVideo} playing />
                {VideoU}
            </div>
        );
    }
}

export default VideoPlay;