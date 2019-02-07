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

  	popMap = path => {
  		this.props.dispatch({
  			type: 'POP_MAP',
  			payload: path
  		}); }

  render() {

  	const {label,path} = this.props;
    return (
    <div className="search">
      <label> {`${label} address`} </label>
      <input 
      	placeholder={`Enter ${label} address here... `} 
      	value={this.props.state.search[path].address || ''} 
      	onClick={ () => this.popMap(path)} />
      <Icon name="search" size="small" className="form" />
    </div>
  );
}
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMapPopupInput);