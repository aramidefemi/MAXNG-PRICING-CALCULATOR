import React, { Component } from "react";
import AppProduct from "../molecules/product"

class AppProductRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getColomns = this.getColomns.bind(this);
  }

  getColomns() {
    var cols = 12 / this.props.columns;
    return `col-md-${cols}`;
  }

  render() {
    return (
      <div className="row">
        {this.props.items.map((item, index) => (
          <div className={this.getColomns()}>
            <AppProduct link={item.link} image={item.image} />
          </div>
        ))}
      </div>
    );
  }
}

export default AppProductRow;
