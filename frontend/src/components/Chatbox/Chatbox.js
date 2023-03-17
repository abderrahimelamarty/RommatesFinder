import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserService from "../../services/user.service";
import InputEmoji from "react-input-emoji";
import "./Chatbox.css";
import { addMessage, getMessages } from "../../services/message-service";
function Chatbox({ chat, currentUser, setSendMessage, receivedMessage }) {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();
  const imageRef = useRef();
  // Always scroll to last Message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat.id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat.id,
    };
    const receiverId = chat.members.find((id) => id !== currentUser);
    // send message to socket server
    setSendMessage({ ...message, receiverId });
    // send message to database
    try {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      console.log(messages);
      setNewMessage("");
    } catch {
      console.log("error");
    }
  };
  // Receive Message from parent component
  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage);
    if (
      receivedMessage !== null &&
      receivedMessage.chatId === chat.id &&
      receivedMessage.senderId !== currentUser
    ) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await UserService.getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) getUserData();
  }, [chat, currentUser]);
  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src="https://t3.ftcdn.net/jpg/05/79/55/26/360_F_579552668_sZD51Sjmi89GhGqyF27pZcrqyi7cEYBH.jpg"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div
                    className="name"
                    style={{ fontSize: "1rem", color: "black" }}
                  >
                    <span>{userData?.username}</span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "100%",
                  border: "0.1px solid black",
                  marginTop: "20px",
                }}
              />
            </div>
            {/* chat-body */}
            <div className="chat-body">
              {messages?.map((message) => (
                <>
                  <div
                    ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>
                    {/* <span>message.createdAt</span>  */}
                  </div>
                </>
              ))}
            </div>
            {/* chat-sender */}
            <div className="chat-sender">
              <div onClick={() => imageRef.current.click()}>+</div>
              <InputEmoji value={newMessage} onChange={handleChange} />
              <button className=" btn  btn-primary" onClick={handleSend}>
                Send
              </button>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
                ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  );
}

export default Chatbox;
