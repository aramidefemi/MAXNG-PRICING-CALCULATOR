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
    this.state = {
      modal: this.props.state.map["modal-show"],
      position: {
        address: 'lagos, nigeria'
      }
    };
    this.update = this.update.bind(this);
    this.toggle = this.toggle.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  toggle() {
    this.props.dispatch({
      type: "TOGGLE_MAP",
      payload: !this.state.modal
    });
  }

  updatePosition(params) {
    this.setState(prevState => ({
      position: params
    }));
    // this.props.dispatch({
    //   type: 'UPDATE_SEARCH',
    //   payload: params
    // })
  }
  update() {
    this.setState(prevState => ({
      modal: this.props.state.map["modal-show"]
    }));
  }

  onMapClicked(props) {
   
    var lat = props.center.lat;
    var lng = props.center.lng;
                    var params = {
                  address: this.state.position.address,
                  lat: lat,
                  lng: lng
                };
                
                this.updatePosition(params);
  }

  onMarkerClick(props, marker, e) {
    var lat = props.position.lat;
    var lng = props.position.lng;
                    var params = {
                  address: this.state.position.address,
                  lat: lat,
                  lng: lng
                };
                
                this.updatePosition(params);
  }
  onSuggestionSelected(suggestion) {
    // Add your business logic here. In this case we just log...
    console.log('Selected suggestion:', suggestion)
  }
  componentDidUpdate = prevProps =>
    prevProps.state.map["modal-show"] !== this.props.state.map["modal-show"]
      ? this.update()
      : "";

  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          onMapClicked={this.onMapClicked}
          onMarkerClick={this.onMarkerClick}
        >
          <ModalBody>
            <MapContainer onMapClicked={this.onMapClicked} onMarkerClick={this.onMarkerClick} position={this.state.position} />
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
                
                this.updatePosition(params);
              }}
              types={["(regions)"]}

            componentRestrictions={{country: "ng"}}
                    />
     
                <Button color="warning" onClick={this.toggle}>
                  Do Something
                </Button>
               
            
               <Button color="secondary" onClick={this.toggle}>
                  Cancel
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
