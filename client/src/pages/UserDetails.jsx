import React, { Component } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard";
import HeartRateCard from "../components/HeartRateCard";
import BloodPressureCard from "../components/BloodPressureCard";
import BodyTemperatureCard from "../components/BodyTemperatureCard";
import CaloriesBurnedCard from "../components/CaloriesBurnedCard";
import SleepTimeCard from "../components/SleepTimeCard";
import StepCountCard from "../components/StepCountCard";
import GpsLocationCard from "../components/GpsLocationCard";

const Wrapper = styled.div.attrs({
  className: " d-flex flex-row flex-wrap",
})`
  font-family: "Helvetica Neue";
  background-color: "F8F8F8";
`;

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.params.id,
      user: null,
    };
  }

  componentDidMount = async () => {
    const { id } = this.state;
    await api.getUserById(id).then((user) => {
      this.setState({
        user: user.data.data,
      });
    });

    // Update user data at specified interval
    this.interval = setInterval(async () => {
      console.log(Date.now());
      await api.getUserById(id).then((user) => {
        this.setState({
          user: user.data.data,
        });
        console.log("USER UPDATED");
      });
    }, 60000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { user } = this.state;
    console.log(user);
    if (user) {
      return (
        <Wrapper>
          <ProfileCard user={user} />
          <HeartRateCard heartRate={user.heartRate} />
          <BloodPressureCard bloodPressure={user.bloodPressure} />
          <BodyTemperatureCard bodyTemperature={user.bodyTemperature} />
          {/* <CaloriesBurnedCard caloriesBurned={user.caloriesBurned} /> */}
          {/* <SleepTimeCard sleepTime={user.sleepTime} /> */}
          <StepCountCard stepCount={user.stepCount} />
          <GpsLocationCard gpsLocation={user.gpsLocation} />
        </Wrapper>
      );
    }
    return (
      <Wrapper>
        <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh", width: "100%" }}>
          {" "}
          <h1>Loading...</h1>
        </div>
      </Wrapper>
    );
  }
}

export default withParams(UserDetails);
