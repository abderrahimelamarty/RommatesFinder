import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8084/api/v1/rooms/";

const getAllRooms = () => {
  return axios.get(API_URL + "allRooms");
};
const addRoom = (ville, adresse, prix, images, userId) => {
  return axios.post(
    API_URL + "addRoom",
    { userId, ville, adresse, prix, images },
    { headers: authHeader() }
  );
};
const getRoom = (id) => {
  return axios.get(API_URL + "Rooms/" + id);
};
const getRoomsBycity = (city) => {
  return axios.get(API_URL + "RoomsByCity/" + city);
};

const RoomsService = {
  getAllRooms,
  addRoom,
  getRoom,
  getRoomsBycity,
};

export default RoomsService;
