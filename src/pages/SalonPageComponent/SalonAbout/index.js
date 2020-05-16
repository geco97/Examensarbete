import React, { Component } from 'react';
import {MDBRow,MDBCol,MDBTableBody,MDBTable,MDBBtn } from 'mdbreact';
import isEmpty from 'lodash/isEmpty';
class index extends Component {
  
    render() {
      const { currentSalon, isLoading } = this.props;
      console.log(currentSalon)
        return (
            <MDBRow>
              {
                isLoading === true?
                <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span> </div>
                :
                <>
          <MDBCol  md="12">
          <h2 className="text-center">{currentSalon.Name}</h2>
      </MDBCol>
      <MDBCol md="12" className="border-bottom">
      <MDBRow>
        <MDBCol md="8"><p>{
          currentSalon.description
        }</p></MDBCol>
        <MDBCol md="4">
          {
            (isEmpty(currentSalon))?"":
            <img 
            width={"100%"}
            src={require( "../../../assets/images/images"+currentSalon.Logo)}
            className="img-fluid" alt="" />
          }
       
        </MDBCol>
      </MDBRow>
      </MDBCol>
      <MDBCol md="12" >
      <MDBRow className="border-bottom">
      <MDBCol md="6" className="my-2">
      <MDBTable borderless>
          <MDBTableBody>
            <tr>
              <td className="p-2">Website</td>
              <td className="p-2">{ currentSalon.Website }</td>
              </tr>
              <tr>
              <td className="p-2">Tele.</td>
              <td className="p-2">{ currentSalon.Tele }</td>
              </tr>
              <tr>
              <td className="p-2">Addres</td>
        <td className="p-2">{ currentSalon.Adress } {currentSalon.PostOrt}</td>
            </tr>
          </MDBTableBody>
      </MDBTable>

      </MDBCol>
        <MDBCol md="6" className="my-2">
        <MDBTable borderless>
          <MDBTableBody>
            { isEmpty(currentSalon.Openschame)?"":
               
               currentSalon.Openschame.map((row)=>
                <tr>
                  <td className="p-2">{row[1]}</td>
                  <td className="p-2">{row[2]}</td>
                </tr>
                )
               
            }
            </MDBTableBody>
            </MDBTable>
        </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6">
            {
              isEmpty(currentSalon.Tags)?"":
              currentSalon.Tags.map((tag)=>
              <MDBBtn color="deep-purple" size="sm"> {tag}  </MDBBtn>
              )
            }
          </MDBCol>
          <MDBCol md="6">
            <form>
              
            </form>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      </>
              }
               
            </MDBRow>
        );
    }
}

export default index;