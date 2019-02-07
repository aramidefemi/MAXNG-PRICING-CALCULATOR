import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  dispatch: data => dispatch(data)
});

class AppMapPopupInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.popMap = this.popMap.bind(this);
  }

  popMap = path => {
    this.props.dispatch({
      type: "POP_MAP",
      payload: path
    });
  };

  render() {
    return (
      <div className="search">
        <label> {`${this.props.label} address`} </label>
        <input
          placeholder={`Enter ${this.props.label} address here... `}
          value={this.props.state.search[this.props.path].address || ""}
          onClick={() => this.popMap(this.props.path)}
        />
        <Icon name="search" size="small" className="form" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMapPopupInput);
