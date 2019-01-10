import React, { Component } from "react";
import AppNavbarItems from "../molecules/nav-items";
import AppGooglePlaces from "../molecules/google-places";
import AppAutocomplete from "../molecules/autocomplete";
import AppAction from "../atoms/actions";


class AppSearchbar extends Component {

	  render() {
    return (
              <div className="row">
                  <div className="col-md-10">
                    <div className="row form-place">
                      <div className="col-md-8 b-r">
                          <AppGooglePlaces />
                      </div>

                      <div className="col-md-4">
                          <AppAutocomplete />
                      </div>
                    </div>
                  </div>
                  <div className="search col-md-2">
                     <AppAction  style="btn-block" />
                  </div>
                </div>
             
    	        
              )
	}
}

export default AppSearchbar;