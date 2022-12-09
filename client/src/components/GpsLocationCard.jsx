import React, { Component } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";

const Card = styled.div.attrs({
  className: "card",
})`
  width: 24rem;
  margin: 20px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;
const CardHeader = styled.div.attrs({
  className: "d-flex flex-row align-content-center m-3 ",
})``;

const CardBody = styled.div.attrs({
  className: "card-body",
})`
  margin-top: 0px;
  padding-top: 0px;
`;

class GpsLocationCard extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  render() {
    if (this.props.gpsLocation && this.props.gpsLocation.length > 0) {
      return (
        <Card>
          <CardHeader>
            <h4 className="card-title">Gps Location</h4>
          </CardHeader>
          <CardBody>
            <p>
              <strong>Latitude:</strong> {this.props.gpsLocation[0].latitude}
            </p>
            <p>
              <strong>Longitude:</strong> {this.props.gpsLocation[0].longitude}
            </p>
            <p>Last updated: {new Date(this.props.gpsLocation[0].timestamp).toLocaleString()}</p>
            <Button variant="primary" onClick={this.openModal}>
              View History
            </Button>
          </CardBody>
          <Modal show={this.state.isOpen}>
            <Modal.Header closeButton>
              <Modal.Title>Gps Location Data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {this.props.gpsLocation.map((data, key) => {
                return (
                  <div className="d-flex align-items-center ">
                    <p>
                      <strong>Timestamp:</strong> {new Date(data.timestamp).toLocaleString()} <br />
                      <strong>Latitude:</strong> {data.latitude}
                      <strong>Longitude:</strong> {data.longitude}
                    </p>
                  </div>
                );
              })}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>
      );
    }
    return (
      <Card>
        <CardHeader>
          <h4 className="card-title">Gps Location</h4>
        </CardHeader>
        <CardBody>
          <p>No location data recorded yet.</p>
        </CardBody>
      </Card>
    );
  }
}

export default GpsLocationCard;
