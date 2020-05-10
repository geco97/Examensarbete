import React, { Component } from 'react';
import { MDBInputGroup,MDBBtn } from 'mdbreact';
import MultiSelect from "react-multi-select-component";

class searchForms extends Component {
 state={
  selected:[]
 }
 setSelected=(selected)=>{
   this.setState({
     selected:selected
   })
 }
  render() {
    const options = [
      { label: "Grapes", value: "grapes" },
      { label: "Mango", value: "mango" },
      { label: "Strawberry", value: "strawberry" },
    ];
    return (
      <div>
 <pre>{JSON.stringify(this.state.selected)}</pre>
<MultiSelect
        options={options}
        value={this.state.selected}
        onChange={this.setSelected}
        labelledBy={"Select"}
      />
                 <MDBInputGroup
                  containerClassName='mb-3'
                  hint="Search"
                 
                />
                <MDBInputGroup
                  hint="City"
                  containerClassName='mb-3'
                  append={
                    <MDBBtn
                      outline
                      color='secondary'
                      size='md'
                      className='m-0 px-3 py-2 z-depth-0'
                    >
                      Search
                    </MDBBtn>
                  }
                /> 
      </div>
    );
  }
}

export default searchForms;