import React, { Component } from 'react';
import {MDBRow,MDBCol,MDBBtn,MDBIcon,MDBMedia,MDBBtnGroup} from 'mdbreact';
import {Link} from 'react-router-dom'
import isEmpty from 'lodash.isempty';
class index extends Component {
  
    render() {
      const { Salon,showinMap,SaveAsFavorite } = this.props;
      let isInLogad = false;
      if( !isEmpty(sessionStorage.getItem('jwt'))){
        isInLogad= true;
      } 
      return (
            <MDBRow>
                <MDBCol md='12' className="p-1 my-1" >
                <MDBMedia className="p-1 border" style={{ maxWidth: '800px' }}>
          <MDBMedia left middle >
            <Link to={{
              pathname:`/Salon/`+ Salon.id,
              aboutProps:{
               CurrnetSalon:  Salon
              }
            }} >
            <MDBMedia
              object
              width={"100px"}
              src={require("../../../../assets/images/images"+Salon.Logo)}
              alt=''
            />
            </Link>
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
            {
isInLogad === true?
<MDBBtn active color='indigo' onClick={(event) => SaveAsFavorite(Salon)}><MDBIcon icon='star'  /> </MDBBtn>
:
<MDBBtn color="indigo"><Link to="/Login" color="secondary" ><MDBIcon icon='star'  /> </Link> </MDBBtn>
 
            }
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