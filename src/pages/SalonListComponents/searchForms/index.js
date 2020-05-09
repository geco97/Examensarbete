import React, { Component } from 'react';
import { MDBInputGroup,MDBBtn } from 'mdbreact';

class searchForms extends Component {
 
  render() {
    return (
      <div>

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