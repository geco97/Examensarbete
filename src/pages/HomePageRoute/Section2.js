import React from 'react';
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
  MDBView,
  MDBBtn
} from 'mdbreact';

class Section2 extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
      <MDBAnimation type="fadeInUp" duration="500ms" delay=".2s">
        <MDBRow>
          <MDBCol md="12" className="mb-4 white-text text-center " >
            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
            Section2{" "}
            </h3>
            <hr className="hr-light my-4 w-75" />
            <h4 className="subtext-header mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
              deleniti consequuntur nihil.
            </h4>
            <MDBBtn outline rounded color="white">
              <MDBIcon icon="home" /> Visit us
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        </MDBAnimation>
      </>
    );
  }
}

export default Section2;