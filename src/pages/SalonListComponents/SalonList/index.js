import React, { Component } from 'react';
import SalonCell from './SalonCell'

class index extends Component {
    render() {
        const { salonArray ,showinMap,SaveAsFavorite}= this.props;
        return (
            <div>
                {
                    salonArray.map((Salon, i)=>                   
                        <SalonCell Salon={Salon} showinMap={showinMap} SaveAsFavorite={SaveAsFavorite}/>
                    )  
                    
                }
                
            </div>
        );
    }
}

export default index;