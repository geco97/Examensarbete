import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
  MDBMask,
  MDBView,
  MDBBtn
} from 'mdbreact';
import './HomePage.css';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
    <MDBView>
    <video className="video-intro" playsInline={true} autoPlay={true} muted={true} loop={true} >
      <source src={require("../assets/Videos/animation.mp4")} type="video/mp4" />
    </video>
    <MDBMask className="d-flex justify-content-center align-items-center gradient2">
      <MDBContainer className="px-md-3 px-sm-0">
        <MDBRow>
          <MDBCol md="12" className="mb-4 white-text text-center">
            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
              Creative Agency{" "}
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
      </MDBContainer>
    </MDBMask>
  </MDBView>

  
        <div className='mt-3 mb-5'>
          <MDBContainer fluid className='mt-3 mb-5'>
            <MDBRow>
              <MDBCol
                md='12'
                className='mx-0 float-none dark z-depth-1 my-5 py-0 px-0 SectionGradientOdd' style={{height:"72vh"}}>
                <MDBView className="h-100" style={{height:"100%"}}>
                  <div className="huerotate" style={{ backgroundImage: `url(${require("../assets/images/Img1.jpg")})` }}></div>
                  <MDBMask overlay="black-strong" style={{height:"100%"}}  className="d-flex justify-content-center align-items-center gradient">
                  <MDBContainer>
                  <MDBRow>
                  <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left d-none d-md-block col-md-6 mt-xl-5 mb-5"
                >
 <h1 className="h1-responsive font-weight-bold">
                    Sign in right now!
                  </h1>

                </MDBAnimation>
               < MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">

                  </MDBAnimation>
                  </ MDBCol>
                  </MDBRow>
                    </MDBContainer>
                  </MDBMask>
                </MDBView>
               
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer fluid className='mt-3 mb-5'>
            <MDBRow>
              <MDBCol
                md='12'
                className='mx-auto float-none dark z-depth-1 my-5 py-3 px-2 SectionGradientOdd' style={{height:"72vh"}}
              >
                <MDBCardBody className='text-center'>
                  
                  <MDBRow />
                  <MDBRow className='d-flex flex-row justify-content-center row'>
                   
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer fluid className='mt-3 mb-5'>
            <MDBRow>
              <MDBCol
                md='12'
                className='mx-auto float-none dark z-depth-1 my-5 py-3 px-2 SectionGradientOdd' style={{height:"72vh"}}
              >
                <MDBCardBody className='text-center'>
                  
                  <MDBRow />
                  <MDBRow className='d-flex flex-row justify-content-center row'>
                   
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer fluid className='mt-3 mb-5'>
            <MDBRow>
              <MDBCol
                md='12'
                className='mx-auto float-none dark z-depth-1 my-5 py-3 px-2 SectionGradientOdd' style={{height:"72vh"}}
              >
                <MDBCardBody className='text-center'>
                  
                  <MDBRow />
                  <MDBRow className='d-flex flex-row justify-content-center row'>
                   
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          {/*
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <h2 className='text-center my-5 font-weight-bold'>
                  Why is it so great?
                </h2>
                <p className='text-center text-muted mb-1'>
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
                <p className='text-center text-muted mb-1'>
                  Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites.
                </p>
                <p className='text-center text-muted'>
                  We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap.
                </p>
                <hr className='my-5' />

                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='css3'
                              brand
                              className='pink-text pr-2'
                            />
                            <strong>CSS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Animations, colours, shadows, skins and many more!
                            Get to know all our css styles in one place.
                          </MDBCardText>
                          <MDBNavLink
                            tag='button'
                            to='/css'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInDown'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='cubes' className='blue-text pr-2' />
                            <strong>COMPONENTS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use components that you can use in your
                            applications. Both basic and extended versions!
                          </MDBCardText>
                          <MDBNavLink
                            tag='button'
                            to='/components'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='code' className='green-text pr-2' />
                            <strong>ADVANCED</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Advanced components such as charts, carousels,
                            tooltips and popovers. All in Material Design
                            version.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/advanced'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='bars' className='pink-text pr-2' />
                            <strong>NAVIGATION</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/navigation'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeIn'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='edit' className='blue-text pr-2' />
                            <strong>FORMS</strong>
                          </MDBCardTitle>
                          <MDBCardText className='mb-4 pb-3'>
                            Inputselecst, date and time pickers. Everything in
                            one place is ready to use!
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/forms'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='table' className='green-text pr-2' />
                            <strong>TABLES</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/tables'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='window-restore'
                              far
                              className='pink-text pr-2'
                            />
                            <strong>MODALS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/modals'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInUp'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='arrows-alt'
                              className='blue-text pr-2'
                            />
                            <strong>PLUGINS & ADDONS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Google Maps, Social Buttons, Pre-built Contact Forms
                            and Steppers. Find out more about our extended
                            components.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/addons'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                    
                  </MDBCol>
                  
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>*/}
        </div>
      </>
    );
  }
}

export default HomePage;
