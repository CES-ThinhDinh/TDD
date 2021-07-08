import {useState} from 'react';

const MessageForm = ({onSend}) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSend = () => {
    onSend(value);
    setValue('');
  };

  return (
    <div>
      <h1>Message form</h1>
      <input
        type="text"
        data-testid="messageText"
        value={value}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default MessageForm;
