import React, { Component } from "react";
import AppGooglePlaces from "../molecules/google-places";
import AppAction from "../atoms/actions";
import { Icon } from "semantic-ui-react";

class AppSearchbar extends Component {
  input = label => (
    <div className="search">
      <label> {`${label} address`} </label>
      <input placeholder={`Enter ${label} address here... `} />
      <Icon name="search" size="small" className="form" />
    </div>
  );

  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <div className="row form-place">
            <div className="col-md-6 b-r">{this.input("Pick up")}</div>

            <div className="col-md-6">{this.input("Destination")}</div>
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
