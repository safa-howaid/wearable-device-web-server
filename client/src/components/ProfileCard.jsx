import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div.attrs({
  className: "card",
})`
  width: 18rem;
  margin: 20px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const CardHeader = styled.div.attrs({
  className: "d-flex flex-row justify-content-center align-content-center mt-3 mb-0",
})``;

const CardBody = styled.div.attrs({
  className: "card-body",
})`
  padding-top: 0px;
`;

class ProfileCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h4 className="card-title">Profile</h4>
        </CardHeader>
        <CardBody>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Name:</strong> {this.props.user.name}
            </li>
            <li className="list-group-item">
              <strong>Date of birth:</strong> {this.props.user.dateOfBirth}
            </li>
            <li className="list-group-item">
              <strong>Gender:</strong> {this.props.user.gender}
            </li>
            <li className="list-group-item">
              <strong>Height:</strong> {this.props.user.height} in.
            </li>
            <li className="list-group-item">
              <strong>Weight:</strong> {this.props.user.weight} lbs
            </li>
          </ul>
        </CardBody>
      </Card>
    );
  }
}

export default ProfileCard;
