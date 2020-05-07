import React, { Component } from 'react';
import {MDBRow,MDBCol,MDBBtn,MDBIcon,MDBMedia,MDBBtnGroup} from 'mdbreact';

class index extends Component {
    render() {
        return (
            <MDBRow>
                <MDBCol md='12' className="p-1 my-1" >
                <MDBMedia className="p-1 border" style={{ maxWidth: '800px' }}>
          <MDBMedia left middle href='/Salon/id'>
            <MDBMedia
              object
              src='https://placehold.it/64x64'
              alt='Generic placeholder image'
            />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>MDBMedia heading</MDBMedia>
            <MDBCol md='12' className="m-0 p-0" ><p className="m-0 p-0">Addres</p></MDBCol>
            <MDBCol md='12' className="m-0 p-0  text-right" >
            <MDBBtnGroup size='sm'>
            <MDBBtn active color='secondary'><MDBIcon icon='map'  /> </MDBBtn>
            <MDBBtn active color='indigo'><MDBIcon icon='eye'  /> </MDBBtn>
            </MDBBtnGroup>
                </MDBCol>
          </MDBMedia>
        </MDBMedia>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default index;