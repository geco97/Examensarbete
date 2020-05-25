import React, { Component } from 'react';
import {MDBInput,MDBIcon,MDBRow,MDBCol, MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import isEmpty from 'lodash.isempty';
import Moment from 'moment';
import { connect } from 'react-redux'
import { createTicket } from '../../store/actions/TicketAction'



const mapStateToProps = (state) => {
  console.log(state)
  return {
      isLoading: state.ticket.isLoading,
      token: state.profile.token,
      Error: state.ticket.Error,
      user:state.profile.user,
      currentSalon:state.salon.currentSalon
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createTicket: (ticket) => dispatch(createTicket(ticket)),
    dispatch
  }
}
class Reserve extends Component {
state = {
  modal:false,
  ticket:{
    _id:null,
    userid:"",
    BCID:this.props.currentSalon.id,
    Date:'',
    Time:'',
    text:'',
    email:'',
    Telephone:''
  }
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
  onChange=(e)=>{
    let field = e.target.id;
     this.setState({
      ticket:{...this.state.ticket,[field]:e.target.value}
     })
   }
   onReservthis=(e)=>{
    this.props.createTicket(this.state.ticket)
    this.props.closePopup()
   }
render() {
  Moment.locale('en');
    const isOpen = this.props.showmodal;
    const {salon,dateFCobject} =  this.props
    let ticket =this.state.ticket;
    const user = JSON.parse(localStorage.getItem("User"))

    var dt = dateFCobject.dateStr ;
    let date=Moment(dt).format('YYYY-MM-DD');
    let time=Moment(dt).format('HH:mm');
    if(this.state.ticket.userid ===""){
      this.setState({
        ticket:{
          ...ticket,
          userid:user._id,
          email: user.email,
          Telephone:user.Telephone,
          Date:date,
          Time:time
        }
      })
    }

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
          <MDBInput label="Your email" value={ticket.email}
           icon="envelope" group type="email"  error="wrong" id="email"
           onChange={this.onChange}
            success="right" />
          <MDBInput label="Your Tele" value={ticket.Telephone}  
          icon="envelope" group type="text"  error="wrong" id="Telephone"
          onChange={this.onChange}
            success="right" /></MDBCol>
    <MDBCol md="6">  <MDBInput label="Date" icon="calendar" id="Date"
    onChange={this.onChange}
     value={ticket.Date} group type="date" validate error="wrong" success="right" />
       </MDBCol>
    <MDBCol md="6">
             <MDBInput label="Time" icon="Clock" value={ticket.Time}  id="Time"
             onChange={this.onChange}
             group type="time" validate error="wrong" success="right" />
             </MDBCol>
             <MDBCol md="12">
    <MDBInput type="textarea" rows="2" label="Your message"  id="text"
    onChange={this.onChange}
    value={ticket.text} icon="pencil-alt" />
        
       
    </MDBCol>
  </MDBRow></div>
</MDBContainer>
        </MDBModalBody>
        <MDBModalFooter  style={{ backgroundColor:"rgb(36, 30, 51)" }}>
          <MDBBtn color="secondary" onClick={this.props.closePopup}>Close</MDBBtn>
          <MDBBtn color="indigo" onClick={ this.onReservthis }>Reserve</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Reserve);