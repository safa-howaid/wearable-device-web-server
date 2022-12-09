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

class BloodPressureCard extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  render() {
    if (this.props.bloodPressure && this.props.bloodPressure.length > 0) {
      return (
        <Card>
          <CardHeader>
            <h4 className="card-title">Blood Pressure</h4>
          </CardHeader>
          <CardBody>
            <p>
              <strong>Blood Pressure Systolic:</strong> {this.props.bloodPressure[0].bloodPressureSystolic}
            </p>
            <p>
              <strong>Blood Pressure Diastolic:</strong> {this.props.bloodPressure[0].bloodPressureDiastolic}
            </p>
            <p>Last updated: {new Date(this.props.bloodPressure[0].timestamp).toLocaleString()}</p>
            <Button variant="primary" onClick={this.openModal}>
              View History
            </Button>
          </CardBody>
          <Modal show={this.state.isOpen}>
            <Modal.Header closeButton>
              <Modal.Title>Blood Pressure Data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {this.props.bloodPressure.map((data, key) => {
                return (
                  <div className="d-flex align-items-center ">
                    <p>
                      <strong>Timestamp:</strong> {new Date(data.timestamp).toLocaleString()} <br />
                      <strong>Blood Pressure Systolic:</strong> {data.bloodPressureSystolic}
                      <strong>Blood Pressure Diastolic:</strong> {data.bloodPressureDiastolic}
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
          <h4 className="card-title">Blood Pressure</h4>
        </CardHeader>
        <CardBody>
          <p>No blood pressure data recorded yet.</p>
        </CardBody>
      </Card>
    );
  }
}

export default BloodPressureCard;
