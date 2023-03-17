import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserService from "../../services/user.service";

function Conversation({ data, currentUserId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
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
      <div className="follower conversation ">
        <div className="d-flex align-items-center gap-3">
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
      <hr style={{ width: "100%", border: "0.1px solid black" }} />
    </div>
  );
}

export default Conversation;
