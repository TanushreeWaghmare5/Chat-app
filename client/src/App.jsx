import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:3001", {
    transports: ["websocket", "polling"],
});

function App() {
    
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => {
            socket.off("receive_message");
        };
    }, []);

     const sendMessage = () => {
        if (message.trim() !== "" && username.trim() !== "") {
            const data = {
                username,
                message,
                timestamp: new Date().toLocaleTimeString()
            };
            socket.emit("send_message", data);
            setMessage("");
        }
    };
     return (
        <div className="chat-container">
            {!isLoggedIn ? (
                <div className="login-box">
                    <h2 className="title">Enter Your Name</h2>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Your Name"
                        className="chat-input"
                    />
                    <button onClick={() => setIsLoggedIn(true)} className="send-button">Start Chat</button>
                </div>
            ) : (
                <div className="chat-box">
                    <h2 className="title">💬 Live Chat</h2>
                    <div className="messages-container">
                        {messages.map((msg, index) => (
                            <div key={index} className="message-box">
                                <p className="message"><strong>{msg.username}</strong>: {msg.message}</p>
                                <span className="timestamp">{msg.timestamp}</span>
                            </div>
                        ))}
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="chat-input"
                        />
                        <button onClick={sendMessage} className="send-button">➤</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;

