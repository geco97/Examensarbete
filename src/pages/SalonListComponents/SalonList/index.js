import React, { Component } from 'react';
import SalonCell from './SalonCell'

class index extends Component {
    render() {
        const { salonArray ,showinMap,ShowPopup}= this.props;
        return (
            <div>
                {
                    salonArray.map((Salon, i)=>                   
                        <SalonCell Salon={Salon} showinMap={showinMap} ShowPopup={ShowPopup}/>
                    )  
                    
                }
                
            </div>
        );
    }
}

export default index;