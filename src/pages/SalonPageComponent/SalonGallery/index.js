import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../../LightBox.css";
import isEmpty from 'lodash.isempty';

class SalonGallery extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images:isEmpty(this.props.currentSalonGallery)?[]:this.props.currentSalonGallery,
    colWidth: [3, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3]
  }
  componentDidUpdate=(prevProps)=> {
    if (this.props.currentSalonGallery !== this.state.images) {
      this.setState({
        images:this.props.currentSalonGallery
      })
    }
  }
  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;
    
    return images.map((imageSrc, index) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md={this.state.colWidth[index]} key={photoIndex}>
          <figure>
            <img
              src={require("../../../assets/images/images"+imageSrc)}
              alt="Gallery"
              className="img-fluid z-depth-1"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    })
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer className="mt-5 p-3" >
        <div className="mdb-lightbox p-3">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={require("../../../assets/images/images"+images[photoIndex])}
            nextSrc={require("../../../assets/images/images"+images[(photoIndex + 1) % images.length])}
            prevSrc={require("../../../assets/images/images"+images[(photoIndex + images.length - 1) % images.length])}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
        <MDBCol md="12" className="text-center py-4">
          <MDBBtn outline color="black"><strong>more</strong></MDBBtn>
        </MDBCol>
      </MDBContainer >
    );
  }
}

export default SalonGallery;