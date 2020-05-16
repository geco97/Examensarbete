import React, { Component } from 'react';
import {    
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  MDBLink
} from "mdbreact";

class LeftSide extends Component {
 render() { 
   const {activeItemPills, togglePills} = this.props;
    return (           
      <MDBRow>
         <MDBNav className='nav-pills d-block w-100'>
                  <MDBNavItem>
                    <MDBLink active={activeItemPills === '1'} onClick={togglePills('1')} link>
                      About
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink  active={activeItemPills === '2'} onClick={togglePills('2')} link>
                      Gallery
                    </MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink  active={activeItemPills === '3'} onClick={togglePills('3')} link>
                       Reserve
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav> 
      </MDBRow>
    );
  }
}

export default LeftSide;