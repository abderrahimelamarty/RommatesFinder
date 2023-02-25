import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8084/api/v1/rooms/";

const getAllRooms = () => {
  return axios.get(API_URL + "allRooms");
};
const addRoom = (ville, adresse, prix, images) => {
  return axios.post(
    API_URL + "addRoom",
    {
      ville,
      adresse,
      prix,
      images,
    },
    { headers: authHeader() }
  );
};
const getRoom = (id) => {
  return axios.get(API_URL + "Rooms/" + id);
};
const RoomsService = {
  getAllRooms,
  addRoom,
  getRoom,
};

export default RoomsService;
