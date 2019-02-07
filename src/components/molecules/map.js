import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  dispatch: data => dispatch(data)
});

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  onMapClicked(props) {
    var lat = props.center.lat;
    var lng = props.center.lng;
    var params = {
      address: this.props.state.map.address,
      lat: lat,
      lng: lng
    };
    console.log(props);
    this.props.dispatch({
      type: "UPDATE_PARAMS",
      payload: params
    });
  }

  onMarkerClick(props, marker, e) {
    console.log(props);
    var lat = props.position.lat;
    var lng = props.position.lng;
    var params = {
      address: this.props.state.map.address,
      lat: lat,
      lng: lng
    };

    this.props.dispatch({
      type: "UPDATE_PARAMS",
      payload: params
    });
  }
  render() {
    console.log(this.props);
    return (
      <Map
        google={window.google}
        className="my-map"
        initialCenter={{ lat: 6.5244, lng: 3.3792 }} // lagos
        zoom={15}
        onClick={this.onMapClicked}
        center={{
          lat: this.props.state.map.lat || 6.5243793,
          lng: this.props.state.map.lng || 3.379205700000057
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          position={{
            lat: this.props.state.map.lat || 6.5243793,
            lng: this.props.state.map.lng || 3.379205700000057
          }}
          name={this.props.state.map.address}
        />

        <InfoWindow>
          <div>
            <h1>{this.props.state.map.address}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
