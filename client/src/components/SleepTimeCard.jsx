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

class SleepTimeCard extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => this.setState({ isOpen: true });

  closeModal = () => this.setState({ isOpen: false });

  render() {
    if (this.props.sleepTime && this.props.sleepTime.length > 0) {
      return (
        <Card>
          <CardHeader>
            <h4 className="card-title">Sleep</h4>
          </CardHeader>
          <CardBody>
            <p>
              {Math.floor(Number(this.props.sleepTime[0].sleepTime) / 60)} H{" "}
              {Number(this.props.sleepTime[0].sleepTime) % 60}
            </p>
            <p>Last updated: {new Date(this.props.sleepTime[0].timestamp).toLocaleString()}</p>
            <Button variant="primary" onClick={this.openModal}>
              View History
            </Button>
          </CardBody>
          <Modal show={this.state.isOpen}>
            <Modal.Header closeButton>
              <Modal.Title>Sleep Data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {this.props.sleepTime.map((data, key) => {
                return (
                  <div className="d-flex align-items-center ">
                    <p>
                      <strong>Timestamp:</strong> {new Date(data.timestamp).toLocaleString()} <br />
                      <strong>Sleep:</strong> {Math.floor(Number(data.sleepTime) / 60)} H {Number(data.sleepTime) % 60}
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
          <h4 className="card-title">Sleep</h4>
        </CardHeader>
        <CardBody>
          <p>No sleep data recorded yet.</p>
        </CardBody>
      </Card>
    );
  }
}

export default SleepTimeCard;
