import React, { Component } from 'react';
import {MDBRow,MDBCol,MDBCarousel,MDBCarouselCaption,MDBCarouselInner,MDBCarouselItem,MDBView,MDBMask} from 'mdbreact';
class index extends Component {
    render() {
        return (
            <MDBRow>
                <MDBCol  md="12">
                    <h2 className="text-center">Salon1</h2>
                </MDBCol>
                <MDBCol md="12">
                <MDBCarousel
          activeItem={1}
          length={4}
          showControls
          showIndicators
          className='z-depth-1'
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView className="View2">
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg'
                  alt='First slide'
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Light mask</h3>
                <p>First text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView  className="View2">
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg'
                  alt='Second slide'
                />
                <MDBMask overlay='black-strong' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Strong mask</h3>
                <p>Second text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView  className="View2">
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg'
                  alt='Third slide'
                />
                <MDBMask overlay='black-slight' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Slight mask</h3>
                <p>Third text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='4'>
              <MDBView  className="View2">
                <img
                  className='d-block w-100'
                  src='https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg'
                  alt="Mattonit's item"
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>

                </MDBCol>
            </MDBRow>
        );
    }
}

export default index;