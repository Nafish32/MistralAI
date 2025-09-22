import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Optional: for styling

function App() {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatLog]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!message.trim()) {
      setError('Please enter a message.');
      return;
    }

    const userMessage = { sender: 'user', text: message };
    setChatLog(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const result = await axios.get(`http://localhost:8085/api/mistralai/${encodeURIComponent(message)}`);
      const aiMessage = { sender: 'ai', text: result.data };
      setChatLog(prev => [...prev, aiMessage]);
    } catch (err) {
      let errorMsg = '';
      if (err.response) {
        errorMsg = `Error: ${err.response.status} - ${err.response.data.message || err.message}`;
      } else if (err.request) {
        errorMsg = 'Error: No response received from the server. Is the server running?';
      } else {
        errorMsg = `Error: ${err.message}`;
      }
      setChatLog(prev => [...prev, { sender: 'error', text: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mistral Chat 🤖</h1>

        <div className="chat-window">
          {chatLog.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              <span className="sender">{msg.sender === 'user' ? 'You' : msg.sender === 'ai' ? 'Mistral AI' : 'Error'}</span>
              <div className="message">{msg.text}</div>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        <form onSubmit={handleSubmit} className="chat-form">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask something..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
