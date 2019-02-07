import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  dispatch: data => dispatch(data)
});

class ResultModal extends React.Component {
  returnResults(result) {
    return (
      <table class="table table-hover">
        <tbody>
          <tr>
            <th>Distance</th>
            <td>{result["distance"]}</td>
            <th>Duration</th>
            <td>{result["duration"]}</td>
          </tr>
          <tr>
            <th>Pickup address</th>
            <td>{result["pickup"]}</td>
            <th>Delivery address</th>
            <td>{result["delivery"]}</td>
          </tr>
          <tr>
            <th>Delivery fee</th>
            <th style={{ color: "green" }}>{result["delivery_fee"]}</th>
          </tr>

          <tr>
            <th>Delivery mode</th>
            <td>{result["mode"]}</td>
            <th>Measuring unit</th>
            <td>{result["units"]}</td>
          </tr>

          <tr>
            <th>Base fare</th>
            <td>{result["base_fare"]}</td>

            {/* <th>Base per km</th>
        <td>{result['base_km']}</td>*/}
            <th>Price per km</th>
            <td>{result["price_per_km"]}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    var result = this.props.state.search["result"];
    return (
      <div>
        <Modal size="lg" isOpen={this.props.state.search["modal-show"]}>
          <ModalBody>
            <h3>
              The Fastest Way <br /> to Deliver in Your City
            </h3>
            <br />

            {result ? this.returnResults(result) : "loading..."}
          </ModalBody>
          <ModalFooter>
            <Button
              color="warning"
              onClick={() =>
                this.props.dispatch({
                  type: "HIDE_RESULT_MODAL"
                })
              }
            >
              Close
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
)(ResultModal);
