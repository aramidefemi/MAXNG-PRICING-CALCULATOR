import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"; 
import { connect } from "react-redux";
import MapContainer from "../molecules/map";
import Autocomplete from "react-google-autocomplete";   

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  dispatch: data => dispatch(data)
});

class MapModal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modal: this.props.state.map["modal-show"],
  //     position: {
  //       address: 'lagos, nigeria'
  //     }
  //   };
  //   this.update = this.update.bind(this);
  //   this.toggle = this.toggle.bind(this);
  //   this.updatePosition = this.updatePosition.bind(this);  
  // }

  toggle() {
    this.props.dispatch({
      type: "TOGGLE_MAP",
      payload: !this.state.modal
    });
  }

  updateParams(params) {
    this.props.dispatch({
      type: 'UPDATE_PARAMS',
      payload: params
    })
  }  
  saveParams(params) {
    this.props.dispatch({
      type: 'UPDATE_SEARCH',
      payload: params
    })
  } 

 
  // update() {
  //   this.setState(prevState => ({
  //     modal: this.props.state.map["modal-show"]
  //   }));
  // }


 
  // componentDidUpdate = prevProps =>
  //   prevProps.state.map["modal-show"] !== this.props.state.map["modal-show"]
  //     ? this.update()
  //     : "";

  render() {
    
    return (
      <div>
        <Modal
          size="lg"
          isOpen={this.props.state.map['modal-show']}
          toggle={this.toggle}
          className={this.props.className}
          onMapClicked={this.onMapClicked}
          onMarkerClick={this.onMarkerClick}
        >
          <ModalBody>
            <MapContainer  />
          </ModalBody>
          <ModalFooter>
            <Autocomplete
              style={{ width: "100%" }}
              onPlaceSelected={place => {
                var params = {
                  address: place.formatted_address,
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng()
                };
                
                this.updateParams(params);
              }}
                types={["(regions)"]}

                componentRestrictions={{country: "ng"}}
                    />
     
                <Button color="warning" onClick={() =>

                  this.saveParams({
                    path : this.props.state.map.path,
                             address: this.props.state.map.path,
         lat: this.props.state.map.lat, 
         lng: this.props.state.map.lng
                  })

                }>
                  Next > 
                </Button>
 
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapModal);
