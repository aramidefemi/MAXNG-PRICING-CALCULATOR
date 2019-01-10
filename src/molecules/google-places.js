import React, { Component } from "react"; 
import Autocomplete from "react-google-autocomplete";
import { Icon } from "semantic-ui-react";

class AppGooglePlaces extends Component {

	  render() {
    return (

                      <div className="search">
                        <label> Search </label>
                        <Icon name="search" size="small" className="form" />

                        <Autocomplete
                          placeholder="Find Beautiful Experinces"
                          onPlaceSelected={place => {
                            console.log(place);
                            alert(place.formatted_address);
                          }}
                        />
                        <Icon name="dropdown" size="small" />
                      </div>     
    	        
              )
	}
}

export default AppGooglePlaces;