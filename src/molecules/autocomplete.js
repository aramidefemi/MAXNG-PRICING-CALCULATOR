import React, { Component } from "react"; 
import { Icon } from "semantic-ui-react";
// import Autosuggest from 'react-autosuggest';

class AppAutocomplete extends Component {

	  render() {
    return (
<div className="filter">
                        <label> Filter </label>
                        <Icon name="filter" size="small" className="form" />
                        <input placeholder="By Period" />
                        <Icon name="dropdown" size="small" />
                      </div>   
    	        
              )
	}
}

export default AppAutocomplete;