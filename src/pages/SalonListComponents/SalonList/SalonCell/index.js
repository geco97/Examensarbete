import React, { Component } from 'react';
import {MDBRow,MDBCol,MDBBtn,MDBIcon,MDBMedia,MDBBtnGroup} from 'mdbreact';

class index extends Component {

    render() {
      const { Salon,showinMap,ShowPopup } = this.props;
      return (
            <MDBRow>
                <MDBCol md='12' className="p-1 my-1" >
                <MDBMedia className="p-1 border" style={{ maxWidth: '800px' }}>
          <MDBMedia left middle href={`/Salon/`+ Salon.id}>
            <MDBMedia
              object
              width={"100px"}
              src={require("../../../../assets/images/images"+Salon.Logo)}
              alt=''
            />
          </MDBMedia>
          <MDBMedia body>
            <MDBMedia heading>{Salon.Name}</MDBMedia>
            <MDBCol md='12' className="m-0 p-0" >
              <p className="m-0 p-0">{Salon.Adress}
              <br/>
              {Salon.Postnr} {Salon.PostOrt}
              </p>
              </MDBCol>
            <MDBCol md='12' className="m-0 p-0  text-right" >
            <MDBBtnGroup size='sm'>
            <MDBBtn active color='secondary' onClick={(event)=>showinMap(Salon)}><MDBIcon icon='map'  /> </MDBBtn>
            <MDBBtn active color='indigo' onClick={(event) => ShowPopup(Salon)}><MDBIcon icon='calendar'  /> </MDBBtn>
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