import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getNotifications } from "../../services/notification-service";
import UserService from "../../services/user.service";
import io from "socket.io-client";
const socket = io("http://localhost:8800");
function Conversation({ data, currentUserId }) {
  const [userData, setUserData] = useState(null);
  const [a, seta] = useState(0);
  const [sender, setSender] = useState();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    console.log(userId);
    const getUserData = async () => {
      try {
        const { data } = await UserService.getUser(userId);

        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      <div className="follower conversation bg-info  ">
        <div className="d-flex align-items-center gap-4">
          <img
            src="https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg"
            alt="Profile"
            className="followerImage rounded-5"
            style={{ width: "40px", height: "40px" }}
          />
          <div className="name" style={{ fontSize: "1rem", color: "black" }}>
            <span>{userData?.username}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
