import React, { Component } from "react"; 

class AppAction extends Component {

	  render() {
    return (
                 <button className={" btn "+

                  this.props.style}>Search</button>    
              )
	}
}

export default AppAction;