import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  dispatch: data => dispatch(data)
});
class AppAction extends Component {
  render() {
    return (
      <button
        className={" btn " + this.props.style}
        onClick={() =>
          this.props.dispatch({
            type: "RUN_RESULTS"
          })
        }
      >
        <b>Calculate</b>
      </button>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppAction);
