import React, { Component } from "react"; 
import { Link } from "react-router-dom"; 

class AppProduct extends Component {

	  render() {
    return (

<Link to={this.props.link} >
<div
                      className="destination-card-xs" 
                      style={{ backgroundImage: `url(${this.props.image})`, height: this.props.height || '150px' }}
                    >
                      <p>Mount Patti, Lokoja, NG</p>
                    </div> 
                    </Link>
              )
	}
}

export default AppProduct;