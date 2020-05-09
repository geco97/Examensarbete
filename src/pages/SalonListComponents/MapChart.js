import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper  } from 'google-maps-react';


export class MapChart extends Component {

    state = {
    showingInfoWindow: false,
    isLoading:true,
    activeMarker: {},
    selectedPlace: {},
    currentLocation: {
      lat: 0.0,
      lng: 0.0
    },
    styles: require('./GoogleMapStyles.json')
  };
  _mapLoaded=(mapProps, map)=> {
    map.setOptions({
       styles: this.state.Style
    })
 }
  componentDidMount=()=> {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          },
          isLoading:false
        });
      });
    }else{
      //TODO:
      this.setState({
        currentLocation: {
          lat: 59.334591,
          lng: 18.06324
        },
        isLoading:false
      });
    }
  }
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    
    const coords = this.state.currentLocation;
    return (
      <>{
      ( this.state.isLoading === false )?
      
      <Map google={this.props.google}  zoom={14} 
      onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
      style={{width: '94%',height: '94%'}} initialCenter={coords}>
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
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