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
  constructor(props) {
    super(props);
    this.updateParams = this.updateParams.bind(this);
    this.saveParams = this.saveParams.bind(this);
  }
  updateParams(params) {
    this.props.dispatch({
      type: "UPDATE_PARAMS",
      payload: params
    });
  }
  saveParams(params) {
    this.props.dispatch({
      type: "UPDATE_SEARCH",
      payload: params
    });
  }

  render() {
    return (
      <div>
        <Modal
          size="lg"
          isOpen={this.props.state.map["modal-show"]}
          toggle={this.toggle}
        >
          <ModalBody>
            <MapContainer />
          </ModalBody>
          <ModalFooter>
            <Autocomplete
              style={{ width: "80%" }}
              className="form-control"
              focus
              onPlaceSelected={place => {
                var params = {
                  address: place.formatted_address,
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng()
                };

                this.updateParams(params);
              }}
              types={["address"]}
              componentRestrictions={{ country: "ng" }}
            />

            <Button
              color="warning"
              onClick={() =>
                this.saveParams({
                  path: this.props.state.map.path,
                  address: this.props.state.map.address,
                  lat: this.props.state.map.lat,
                  lng: this.props.state.map.lng
                })
              }
            >
              Next
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
