import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import isEmpty from 'lodash.isempty';

class Reserve extends Component {
state = {
  modal:false
}

onHandleClose = () => {
  this.setState({
    modal: false
  });
}
componentDidMount = ()=> { 
    if(this.props.showmodal===true){
         this.setState({
            modal:true
        })
    }
    
   
}
render() {
    const isOpen = this.props.showmodal;
  return (
    <MDBContainer>
      <MDBModal isOpen={isOpen} toggle={this.props.closePopup}>
        <MDBModalHeader toggle={this.props.closePopup} style={{ backgroundColor:"rgb(36, 30, 51)" }}>Reserve</MDBModalHeader>
        <MDBModalBody  style={{ backgroundColor:"rgb(36, 30, 51)" }}>
          
        </MDBModalBody>
        <MDBModalFooter  style={{ backgroundColor:"rgb(36, 30, 51)" }}>
          <MDBBtn color="secondary" onClick={this.props.closePopup}>Close</MDBBtn>
          <MDBBtn color="indigo" onClick={ this.props.closePopup}>Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default Reserve;