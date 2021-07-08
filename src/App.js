import React, {useState} from 'react';
import './App.css';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = message => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <div>
      <MessageForm onSend={handleSend} />
      <MessageList messages={messages} />
    </div>
  );
};

export default App;
