// Home.js

import React, { useState } from 'react';
import CustomCamera from './camera.js';
import Chatbox from './ChatBox';
import './Home.css';

function Home() {
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserMessage = (message) => {
    // Handle the user's message
    const newUserMessage = { text: message, sender: 'user' };

    // Check if the user's message is "hi"
    if (message.toLowerCase() === 'hi') {
      // Bot responds to "hi"
      const botMessage = { text: 'Hello! How can I help you?', sender: 'bot' };
      setChatHistory([...chatHistory, newUserMessage, botMessage]);
    } else {
      // Handle other user messages (echo for now)
      setChatHistory([...chatHistory, newUserMessage]);
    }
  };

  return (
    <div className="home">
      <div className="camera-container">
        <CustomCamera />
      </div>
      <div className="chatbox-container">
        <Chatbox chatHistory={chatHistory} onUserMessage={handleUserMessage} />
      </div>
    </div>
  );
}

export default Home;
