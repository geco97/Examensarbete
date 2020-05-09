import React, { Component } from 'react';
import {MDBRow,MDBCol,MDBBtn,MDBIcon } from 'mdbreact';
import SalonList from './SalonList'
class SalonleftSida extends Component {
    render() {
      const { salonArray,showinMap,ShowPopup } = this.props;
        return (
            <>
                <MDBRow>
                <MDBCol md='12' className="m-0 p-0 border-bottom">
                    <MDBCol md='12'>
                <div className='input-group md-form form-sm form-2 pl-0'>
            <input
              className='form-control my-0 py-1 red-border'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
            </div>
            </MDBCol>
            <MDBCol md='12'>
            <div className='input-group md-form form-sm form-2 pl-0'>
            <input
              className='form-control my-0 py-1 '
              type='text'
              placeholder='City'
              aria-label='City'
            />
            <div className='input-group-append'>
             
              <MDBBtn
                      color='secondary'
                      size='md'
                      className='m-0 p-0 z-depth-0'
                    > <span className='input-group-text border-0 bg-transparent' id='basic-text1'>
                       <MDBIcon icon='search'  />
                       </span>
                    </MDBBtn>
               
             
            </div></div>
            </MDBCol>
            </MDBCol>
                    <MDBCol md='12'>
                    <SalonList salonArray={salonArray} showinMap={showinMap}
                    ShowPopup={ShowPopup}
                    />
                    </MDBCol>
                </MDBRow>
            </>
        );
    }
}

export default SalonleftSida;