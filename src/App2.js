import React, {useState} from 'react';
import './App.css';
import NewMessageForm from './components2/NewMessageForm';
import NewMessageList from './components2/NewMessageList';

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = message => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  return (
    <div>
      <NewMessageForm onSend={handleSend} />
      <NewMessageList messages={messages} />
    </div>
  );
};

export default App;
