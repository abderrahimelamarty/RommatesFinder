import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8084/api/test/";
const API_URL1 = "http://localhost:8084/api/v1/user/users";

const API_URL2 = "http://localhost:8084/api/auth/updateProfile/";
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const updateProfile = (id, user) => {
  console.log(API_URL2 + id);
  return axios.post(API_URL2 + id, { headers: authHeader() });
};
const getUser = (id) => {
  console.log(id);
  return axios.get(API_URL1 + "/" + id, { headers: authHeader() });
};
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getUser,
  updateProfile,
};

export default UserService;
