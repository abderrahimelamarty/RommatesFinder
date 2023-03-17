import axios from "axios";
import authHeader from "./auth-header";

const API = "http://localhost:8084/api";

export const createChat = (data) => API.post("/chat/", data);

export const userChats = (id) => {
  return axios.get(API + "/chat/" + id, { headers: authHeader() });
};

export const findChat = (firstId, secondId) =>
  API.get(`/chat/find/${firstId}/${secondId}`);
