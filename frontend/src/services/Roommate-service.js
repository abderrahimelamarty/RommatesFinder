import axios from "axios";
import authHeader from "./auth-header";

const API = "http://localhost:8084/roommates";

export const createRoommate = (
  ville,
  prix,
  image,
  userId,
  description,
  interests
) => {
  return axios.post(
    API + "/",
    { ville, prix, image, userId, description, interests },
    { headers: authHeader() }
  );
};
export const getRoommmates = () => {
  return axios.get(API + "/");
};
export const getRoommmate = (id) => {
  return axios.get(API + "/" + id);
};
// export const userChats = (id) => {
//   return axios.get(API + "/chat/" + id, { headers: authHeader() });
// };

// export const findChat = (firstId, secondId) =>
//   API.get(`/chat/find/${firstId}/${secondId}`);
