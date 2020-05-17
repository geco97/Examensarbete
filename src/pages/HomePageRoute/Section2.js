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
  MDBCard,
  MDBBtn
} from 'mdbreact';


class Section2 extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
       <MDBRow>
        <MDBCol md="12" xl="12" className="mb-4 HJ-70">
        <MDBCard id="classic-card" className="h-100">
        <MDBMask className="p-0 m-0 gradient2 " style={{ overflow:"hidden"}}>
        <MDBRow className="h-100 huerotate2">
          <MDBCol sm="6" md="6" className="p-0 h-100 " style={{ backgroundImage: `url(${require("../../assets/images/img3.png")})` }}></MDBCol>
          <MDBCol sm="6" md="6" className="p-4 h-100">
        <MDBCardBody  className="h-100">
       
         
          
            
            <MDBCol md="12" className="mb-4 white-text text-center  " id="mainPage">
            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
            Section2{" "}
            </h3>
            <hr className=" my-4 w-75" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam <span className="HomePageSectionNfont">apiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae,</span> quisquam iste, maiores. Nulla.</p>
            <MDBBtn outline rounded color="white">
              <MDBIcon icon="home" /> Visit us
            </MDBBtn>
          </MDBCol>
            
          
        

          

        </MDBCardBody>
        </MDBCol>
        </MDBRow>
        </MDBMask>
        </MDBCard>
        </MDBCol>         
        </MDBRow>
      
      </>
    );
  }
}

export default Section2;
