import axios from "axios";
import authHeader from "./auth-header";

const API = "http://localhost:8084/api/messages";

export const getMessages = (id) => {
  return axios.get(API + "/" + id, { headers: authHeader() });
};
export const addMessage = (message) => {
  return axios.post(API, message, { headers: authHeader() });
};
