import React, { Component } from "react";
import api from "../api";
import UserCard from "../components/UserCard";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: " d-flex flex-row flex-wrap",
})``;

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllUsers().then((users) => {
      this.setState({
        users: users.data.data,
      });
    });
  };

  render() {
    const { users } = this.state;
    console.log(users);

    return (
      <Wrapper>
        {users.map((user, key) => {
          return <UserCard user={user} key={key} />;
        })}
      </Wrapper>
    );
  }
}

export default UsersList;
