import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ChatbotStyles.css';

// Chatbot component
const Chatbot = () => {
  const [chatBox, setChatBox] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [recognition, setRecognition] = useState(null);

  // Initialize speech recognition
  useEffect(() => {
    const initRecognition = () => {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const message = event.results[event.results.length - 1][0].transcript;
        addMessage("You", message);
        processUserMessage(message);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      setRecognition(recognition);
    };

    initRecognition();
  }, []);

  const addMessage = (sender, message) => {
    setChatBox([...chatBox, { sender, message }]);
  };

  const processUserMessage = (message) => {
    // Simple predefined responses based on user input
    let response = "I'm just a basic chatbot. You said: " + message;
  
    // Check for farmer-related questions
    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
      response = "Hello! How can I assist you with your farming needs today?";
    } else if (message.toLowerCase().includes("how are you")) {
      response = "I'm just a computer program, but thanks for asking!";
    } else if (message.toLowerCase().includes("crop planting")) {
      response = "Sure, I can help you with crop planting. What type of crop are you planning to plant?";
    } 
    else if (message.toLowerCase().includes("apple")) {
      response = "To successfully grow apple trees, choose the right variety, provide full sun";
    }
    else if (message.toLowerCase().includes("pest control")) {
      response = "Pest control is crucial for healthy crops. What specific pest issues are you facing?";
    } else if (message.toLowerCase().includes("irrigation")) {
      response = "Irrigation is important for crop growth. Do you need advice on irrigation methods?";
    } else if (message.toLowerCase().includes("harvesting")) {
      response = "Harvesting is a critical step. What crop are you planning to harvest, and when?";
    } else if (message.toLowerCase().includes("market prices")) {
      response = "Monitoring market prices is essential. Which crop's market prices do you want to know?";
    } else if (message.toLowerCase().includes("fertilizer")) {
      response = "Choosing the right fertilizer is key. What type of soil are you working with?";
    } else if (message.toLowerCase().includes("disease management")) {
      response = "Disease management is important. Could you describe the symptoms you're observing?";
    } else if (message.toLowerCase().includes("weather forecast")) {
      response = "Weather can impact farming. Where are you located, and what's your forecast?";
    } else if (message.toLowerCase().includes("crop rotation")) {
      response = "Crop rotation is beneficial. How often do you rotate your crops?";
    } else if (message.toLowerCase().includes("organic farming")) {
      response = "Organic farming is sustainable. What organic practices are you interested in?";
    } else if (message.toLowerCase().includes("soil testing")) {
      response = "Soil testing is important. Have you conducted a recent soil test?";
    } else if (message.toLowerCase().includes("irrigation scheduling")) {
      response = "Proper irrigation scheduling is crucial. What's your current irrigation schedule?";
    } else if (message.toLowerCase().includes("weed control")) {
      response = "Weed control is necessary. Are you using any specific weed management techniques?";
    } else if (message.toLowerCase().includes("crop protection")) {
      response = "Crop protection is vital. Do you use any protective measures like netting or covers?";
    } else if (message.toLowerCase().includes("compost")) {
      response = "Composting enriches soil. Are you composting your organic waste?";
    } else if (message.toLowerCase().includes("drought-resistant crops")) {
      response = "Drought-resistant crops are useful. Have you considered planting them?";
    } else if (message.toLowerCase().includes("farming equipment")) {
      response = "Choosing the right equipment is crucial. What type of farming equipment are you looking for?";
    } else {
      // Default response for other queries
      response = "I'm here to assist with farming-related questions. Please feel free to ask anything.";
    }
  
    addMessage("Chatbot", response);
  };
  

  const startListening = () => {
    if (recognition) {
      recognition.start();
      console.log('Listening...');
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      console.log('Stopped listening.');
    }
  };

  const handleUserInput = (event) => {
    if (event.key === 'Enter') {
      const message = userInput;
      addMessage("You", message);
      processUserMessage(message);
      setUserInput('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-container" id="chat-box">
        {chatBox.map((message, index) => (
          <div key={index}>
            {message.sender}: {message.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <div className="input-and-buttons-container">
          <input
            type="text"
            id="user-input"
            placeholder="Type a message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyUp={handleUserInput}
          />
          <button id="start-listening" onClick={startListening}>
            Start Listening
          </button>
          <button id="stop-listening" onClick={stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Chatbot />
  </React.StrictMode>,
  document.getElementById('root')
);


export default Chatbot;