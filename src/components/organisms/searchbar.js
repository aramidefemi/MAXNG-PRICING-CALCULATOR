import React, { Component } from "react";
import AppGooglePlaces from "../molecules/google-places";
import AppAction from "../atoms/actions";
import  AppMapPopupInput  from "../atoms/map-popup-input";
class AppSearchbar extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <div className="row form-place">
            <div className="col-md-6 b-r">
             <AppMapPopupInput label='Pick Up' path="origin" />
            </div>

            <div className="col-md-6">
             <AppMapPopupInput label='Destination' path="destination" />
            </div>
          </div>
        </div>
        <div className="search col-md-2">
          <AppAction style="btn-block" />
        </div>
      </div>
    );
  }
}

export default AppSearchbar;
