import React, { Component } from 'react';
import {MDBRow, MDBCol,MDBAnimation,MDBNav,MDBNavItem,MDBLink,} from 'mdbreact'
class LeftSide extends Component {
    
    render() {
        const { activeItemPills,togglePills } = this.props;
        return (
            <MDBRow>
                <MDBCol>
                  <MDBNav className='nav-pills d-block'>
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
                      Book
                    </MDBLink>
                  </MDBNavItem>
                </MDBNav>
                
                </MDBCol>     
            </MDBRow>
        );
    }
}
export default LeftSide;