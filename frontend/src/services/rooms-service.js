import axios from "axios";

const API_URL = "http://localhost:8084/api/v1/rooms/";

const getAllRooms = () => {
  return axios.get(API_URL + "allRooms");
};
const RoomsService = {
  getAllRooms,
};
export default RoomsService;
