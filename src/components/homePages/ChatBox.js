import React, { useState } from 'react';
import './Chatbox.css'; // Import your Chatbox component's CSS file

function Chatbox({ chatHistory, onUserMessage }) {
  const [message, setMessage] = useState('');

  // Ensure chatHistory is initialized as an array
  if (!Array.isArray(chatHistory)) {
    chatHistory = [];
  }

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // Add the user's message to the chat history
      onUserMessage(message);

      // Clear the input field
      setMessage('');
    }
  }

  return (
    <div className="chatbox">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbox;
