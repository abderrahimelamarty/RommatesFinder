import axios from "axios";

const API_URL = "http://localhost:8084/api/auth/";

const register = (Inputs) => {
  return axios.post(API_URL + "signup", Inputs);
};

const login = (Inputs) => {
  return axios.post(API_URL + "signin", Inputs).then((response) => {
    localStorage.setItem("user", JSON.stringify(response.data));

    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
