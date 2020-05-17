import React, { Component } from 'react';
import {MDBInput,MDBIcon,MDBRow,MDBCol, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import isEmpty from 'lodash.isempty';
import Moment from 'moment';

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
  Moment.locale('en');
    const isOpen = this.props.showmodal;
    const {salon,dateFCobject} =  this.props
    const user = JSON.parse(localStorage.getItem("User"))
    console.log(this.props)
    var dt = dateFCobject.dateStr ;
    let date=Moment(dt).format('YYYY-MM-DD');
    let time=Moment(dt).format('HH:mm');
    console.log(date)
    console.log(time)
  return (
    <MDBContainer>
      <MDBModal isOpen={isOpen} toggle={this.props.closePopup}>
        <MDBModalHeader toggle={this.props.closePopup} style={{ backgroundColor:"rgb(36, 30, 51)" }}>Reserve</MDBModalHeader>
        <MDBModalBody  style={{ backgroundColor:"rgb(36, 30, 51)" }}>
        <MDBContainer> <div className="grey-text">
  <MDBRow>
    <MDBCol md="12">
        
         <MDBInput label="Beauty center" icon="tag" disabled value={salon.Name} group type="text" validate error="wrong" success="right" />
         <MDBInput label="Your name" disabled value={user.firstname+ " " +user.lastname} icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" value={user.email} icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Your Tele" value={user.Telephone}  icon="envelope" group type="text"  error="wrong"
            success="right" /></MDBCol>
    <MDBCol md="6">  <MDBInput label="Date" icon="calendar" value={date} group type="date" validate error="wrong" success="right" />
       </MDBCol>
    <MDBCol md="6">
             <MDBInput label="Time" icon="Clock" value={time} group type="time" validate error="wrong" success="right" />
             </MDBCol>
             <MDBCol md="12">
    <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        
       
    </MDBCol>
  </MDBRow></div>
</MDBContainer>
        </MDBModalBody>
        <MDBModalFooter  style={{ backgroundColor:"rgb(36, 30, 51)" }}>
          <MDBBtn color="secondary" onClick={this.props.closePopup}>Close</MDBBtn>
          <MDBBtn color="indigo" onClick={ this.props.closePopup}>Reserve</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default Reserve;