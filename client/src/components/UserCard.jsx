import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div.attrs({
  className: "card border-secondary",
})`
  width: 18rem;
  margin: 20px;
`;

const CardHeader = styled.div.attrs({
  className: "d-flex flex-row justify-content-center align-content-center mt-3 mb-0",
})``;

const CardFooter = styled.div.attrs({
  className: "card-footer d-flex flex-row justify-content-around",
})``;

const CardBody = styled.div.attrs({
  className: "card-body",
})``;

class UserCard extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <h4 id={this.props.user._id} className="card-title">
            {this.props.user.name}
          </h4>
        </CardHeader>
        <CardBody>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Date of birth: {this.props.user.dateOfBirth}</li>
            <li className="list-group-item">Gender: {this.props.user.gender}</li>
            <li className="list-group-item">Height: {this.props.user.height} in.</li>
            <li className="list-group-item">Weight: {this.props.user.weight} lb</li>
          </ul>
        </CardBody>
        <CardFooter>
          <a href={"/users/" + this.props.user._id} class="card-link">
            View Dashboard
          </a>
        </CardFooter>
      </Card>
    );
  }
}

export default UserCard;
