import React, { Component } from "react"; 
import { Link } from "react-router-dom"; 
class AppProduct extends Component {

	  render() {
    return (

<Link to={'/search'} >
<div
                      className="destination-card-xs"
                      style={{ backgroundImage: `url(${this.props.image})` }}
                    >
                      <p>Mount Patti, Lokoja, NG</p>
                    </div> 
                    </Link>
              )
	}
}

export default AppProduct;