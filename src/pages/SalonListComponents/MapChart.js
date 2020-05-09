import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper  } from 'google-maps-react';
import isEmpty from 'lodash/isEmpty';
import { MDBTable, MDBTableBody, MDBTableHead , MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export class MapChart extends Component {

    state = {
    showingInfoWindow: false,
    isLoading:true,
    isSelected:false,
    activeMarker: {},
    selectedPlace: {},
    currentLocation: {
      lat: 0.0,
      lng: 0.0
    },
    salonArray:[],
    icon: {
      url: "https://loc8tor.co.uk/wp-content/uploads/2015/08/stencil.png", // url
      scaledSize: new this.props.google.maps.Size(90, 42), // scaled size
  }
  };
  _mapLoaded=(mapProps, map)=> {
    map.setOptions({
       styles: this.state.Style
    })
 }
  componentDidMount=()=> {
    if(!isEmpty(this.props.selectedSalon)){

      this.setState({
        currentLocation: {
          lat: this.props.selectedSalon.coordinates[0],
          lng: this.props.selectedSalon.coordinates[1]
        },
        isLoading:false,
        salonArray:this.props.salonArray,
        selectedPlace:{
          onClick: this.onMarkerClick , 
          position:{ lat: this.props.selectedSalon.coordinates[0], lng:this.props.selectedSalon.coordinates[1] },
          key:this.props.selectedSalon.id,
          name: this.props.selectedSalon.Name,
          Adress:this.props.selectedSalon.Adress,
          Logo:this.props.selectedSalon.Logo,
          Openschame:this.props.selectedSalon.Openschame,
          icon:this.state.icon,
        }
      });
    }
    else{
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: isEmpty(this.props.selectedSalon)?coords.latitude:this.props.selectedSalon.coordinates[0],
              lng: isEmpty(this.props.selectedSalon)?coords.longitude:this.props.selectedSalon.coordinates[1]
            },
            isLoading:false,
            salonArray:this.props.salonArray
          });
        });
      }else{
        //TODO:
        this.setState({
          currentLocation: {
            lat: 59.334591,
            lng: 18.06324
          },
          isLoading:false,
          salonArray:this.props.salonArray
        });
      }
    }
  
 
  }
  
  onMarkerClick = (props, marker, e) =>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    let coords = this.state.currentLocation;
    const salonArray = this.state.salonArray;
    const icon = this.state.icon
    
    
    return (
      <>{
      ( this.state.isLoading === false )?
      
      <Map google={this.props.google}  zoom={14} 
      onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
      style={{width: '94%',height: '94%'}} initialCenter={coords}
      center={{ lat: isEmpty(this.props.selectedSalon)?coords.latitude:this.props.selectedSalon.coordinates[0],
         lng: isEmpty(this.props.selectedSalon)?coords.longitude:this.props.selectedSalon.coordinates[1] }}
      >
        <Marker />
        {
          salonArray.map((salon)=>
            <Marker 
            onClick={this.onMarkerClick} 
            position={{ lat: salon.coordinates[0], lng:salon.coordinates[1] }}
            key={salon.id}
            name={salon.Name}
            Adress={salon.Adress}
            Logo={salon.Logo}
            Openschame={salon.Openschame}
            icon= {icon } /> 
          )
        }
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onClose}
  >
    <div>
    <MDBCol>
      <MDBCard style={{ width: "22rem",overflow:"hidden" }}>
        <MDBCardBody style={{overflow:"hidden"}}>
          <MDBCardTitle>{this.state.selectedPlace.name}</MDBCardTitle>
          <MDBCardText>
          <MDBCol md="12">
            {
              isEmpty(this.state.selectedPlace.Logo)?"":
              <img
             src={require("../../assets/images/images"+this.state.selectedPlace.Logo)}
              className="img-fluid" alt="" style={{width:"100%"}}  />
            }
          </MDBCol>
          <h5>
          {this.state.selectedPlace.Adress}.
          </h5>
           
          <hr/>
          <MDBTable>
          <MDBTableBody>
            {
              
               isEmpty(this.state.selectedPlace.Openschame)?"":
               
                this.state.selectedPlace.Openschame.map((row)=>
                <tr>
                  <td className="p-2">{row[1]}</td>
                  <td className="p-2">{row[2]}</td>
                </tr>
                )
               
            }
            </MDBTableBody>
            </MDBTable>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
  </InfoWindow>
       
      </Map>
      :
      <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
      </div>
      }
      </>
      
    );
  }
  
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyDrIL7gY9OrGRU_eqQ_a8RbHhQ05jSO61Q'
})(MapChart);