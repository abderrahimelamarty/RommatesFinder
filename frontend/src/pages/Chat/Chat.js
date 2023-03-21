import React, { useRef } from "react";
import "./Chat.css";
import AuthService from "../../services/auth.service";
import { useState } from "react";
import { useEffect } from "react";
import { userChats } from "../../services/chat-service";
import Conversation from "../../components/Conversations/Conversation";

import Chatbox from "../../components/Chatbox/Chatbox";
import { getNotifications } from "../../services/notification-service";
import io from "socket.io-client";
function Chat() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const socket = useRef();

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(currentUser?.id);

        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [currentUser?.id]);
  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");

    socket.current.emit("new-user-add", currentUser?.id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [currentUser?.id]);
  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      setReceivedMessage(data);
    });
  }, []);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await getNotifications(currentUser?.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotifications();
  }, [currentUser?.id]);
  const reload = () => {
    window.location.reload();
  };
  return (
    <div>
      {" "}
      <div className="Chat">
        {/* Left Side */}
        <div className="Left-side-chat">
          <div className="Chat-container">
            <h2>Chats</h2>
            <div className="Chat-list">
              {" "}
              {chats?.map((chat) => (
                <div
                  onClick={() => {
                    setCurrentChat(chat);
                  }}
                >
                  <Conversation data={chat} currentUserId={currentUser.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side */}

        <div className="Right-side-chat">
          <Chatbox
            chat={currentChat}
            currentUser={currentUser?.id}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
