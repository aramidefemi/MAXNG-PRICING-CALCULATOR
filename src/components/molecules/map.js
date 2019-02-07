import React, { Component } from "react"; 
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

  render() {
    console.log(this.props.position)
    return (
      <Map google={window.google} className="my-map" 

          initialCenter={{lat: 6.5244, lng: 3.3792}}
          zoom={15}
          onClick={this.props.onMapClicked}
        
                    center={{
          lat: this.props.position.lat || 6.5243793,
            lng: this.props.position.lng || 3.379205700000057
          }}
      >
 
        <Marker onClick={this.props.onMarkerClick}

                  position={{
            lat: this.props.position.lat || 6.5243793,
            lng: this.props.position.lng || 3.379205700000057
          }}
                name={this.props.position.address} />
 
        <InfoWindow>
            <div>
              <h1>{this.props.position.address}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}


 
export default  MapContainer;