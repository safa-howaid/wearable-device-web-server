import axios from "axios";

console.log(process.env.REACT_APP_HOST);
const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getAllUsers = () => api.get(`/users`);
export const getUserById = (id) => api.get(`/users/${id}`);

export const getHeartRateByUserId = (id, limit) =>
  api.get(`/users/${id}/biometrics/heart-rate`, { params: { limit: limit } });
export const getBloodPressureByUserId = (id, limit) =>
  api.get(`/users/${id}/biometrics/blood-pressure`, { params: { limit: limit } });
export const getBodyTemperatureByUserId = (id, limit) =>
  api.get(`/users/${id}/biometrics/body-temperature`, { params: { limit: limit } });
export const getCaloriesBurnedByUserId = (id, limit) =>
  api.get(`/users/${id}/biometrics/calories-burned`, { params: { limit: limit } });
export const getSleepTimeByUserId = (id, limit) =>
  api.get(`/users/${id}/biometrics/sleep-time`, { params: { limit: limit } });
export const getStepCountByUserId = (id, limit) =>
  api.get(`/users/${id}/biometrics/step-count`, { params: { limit: limit } });

const apis = {
  getAllUsers,
  getUserById,
  getHeartRateByUserId,
  getBloodPressureByUserId,
  getBodyTemperatureByUserId,
  getCaloriesBurnedByUserId,
  getSleepTimeByUserId,
  getStepCountByUserId,
};

export default apis;
