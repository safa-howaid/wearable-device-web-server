import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div.attrs({
  className: " d-flex flex-column flex-wrap justify-content-center align-items-center h-100",
})``;

class Landing extends Component {
  render() {
    return (
      <Wrapper style={{ minHeight: "80vh" }}>
        <h1 style={{ marginBottom: 40 }}>The site is up!</h1>
        <h3>
          Check out Web Server / Web Client implementation{" "}
          <a href="https://github.com/safa-howaid/wearable-device-web-server">here</a>.
        </h3>
        <h3>
          Check out QNX wearable device simulation <a href=" https://github.com/NickLebel/wearableDevice">here</a>.
        </h3>
      </Wrapper>
    );
  }
}

export default Landing;
