import React, { Component } from 'react';
import {MDBRow,MDBCol,MDBBtn,MDBIcon,MDBBadge } from 'mdbreact';
import SalonList from './SalonList'
import MultiSelect from "react-multi-select-component";
import { MDBChipsInput } from 'mdbreact';
import data from './searchdata.json'
class SalonleftSida extends Component {
  state={
    selected:[],
    selectedSalon:this.props.salonArray
   }
   setSelected=(selected)=>{
    let selectedSalon=[];
    const filterContact3 = [];
      selectedSalon = this.state.selectedSalon.filter(item => {
        console.log(item)
        selected.map((selectIte)=>{
          console.log(selectIte)
          if(item.Name.toLowerCase() ===selectIte.value.toLowerCase() ){
            filterContact3.push(item)
          }
          if(item.PostOrt.toLowerCase() ===selectIte.value.toLowerCase() ){
            filterContact3.push(item)
          }
         
        })
    })
    
    console.log(selectedSalon)
     this.setState({
       selected:selected,
       selectedSalon:filterContact3
     })
   }
   removeThisselected=(selectItem)=>{
      let selected = this.state.selected;
      
      const newlist = [].concat(selected) // Clone array with concat or slice(0)
      newlist.splice(selectItem.value, 1);
      if(newlist.length === 0){
        this.setState({
          selectedSalon:this.props.salonArray
        })
      }
      this.setState({selected: newlist}); 
   }
    render() {
      const { selected,selectedSalon } = this.state;
      const options = data;
      const { salonArray,showinMap,ShowPopup } = this.props;

        return (
          <>
          <MDBRow>
            <MDBCol md='12' className="m-0 p-0 border-bottom">
                    <MultiSelect
        options={options}
        value={selected}
        onChange={this.setSelected}
        labelledBy={"Select"}
      />
            </MDBCol>
            <MDBCol md='12' className="m-0 p-10 border-bottom">
              {
                selected.map((n)=>
                <MDBBadge color="light"
                className="p-2 m-1"
                style={{color:"#bca47a !important"}}
                onClick={(event)=>{this.removeThisselected(n)}}
                >{ n.label }</MDBBadge>
                )
              }
            </MDBCol>
                    <MDBCol md='12'>
                    <SalonList salonArray={selectedSalon} showinMap={showinMap}
                    ShowPopup={ShowPopup}
                    />
                    </MDBCol>
                </MDBRow>
            </>
        );
    }
}

export default SalonleftSida;