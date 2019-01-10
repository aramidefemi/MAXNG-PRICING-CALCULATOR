import React, { Component } from "react";
class AppNavbarItems extends Component {
  render() {
    return (
      <ul class={this.props.innerCss + " navbar-nav"}>
        {this.props.items.map((item, key) => (
          <li key={key} class="nav-item">
            <a class="nav-link" href={item.link}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default AppNavbarItems;
