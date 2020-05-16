import React from 'react';
import {
  MDBCard,
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

class mainPage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
       <MDBRow>
        <MDBCol md="12" xl="12" className="mb-4 HJ-70">
       <MDBCard id="classic-card" className="h-100">
          <MDBCardBody  className="h-100">
            <MDBMask className="p-4 gradient2 " style={{ overflow:"hidden"}}>
            <MDBCol md="12" className="mb-4 white-text text-center  " id="mainPage">
            <h3 className="display-3 font-weight-bold mb-0 pt-md-5 text-center" >
            <img  className=" size-50 rounded mx-auto d-block " 
            width="300px" src={require("../../assets/Logo.PNG")} />
            </h3>
            <hr className=" my-4 w-75" />
            <h4 className="subtext-header mt-2 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
              deleniti consequuntur nihil.
            </h4>
           
            <MDBBtn  rounded color='secondary'>
               Beauty Center
            </MDBBtn>
            <MDBBtn rounded color="indigo">
               Log in
            </MDBBtn>
          </MDBCol>
            </MDBMask>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>         
        </MDBRow>
      </>
    );
  }
}

export default mainPage;
