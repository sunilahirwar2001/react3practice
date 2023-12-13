import React, { useState } from 'react';

const SingleListAddItem = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInput((prevInput) => {
      const newItem = prevInput.trim();
      if (newItem !== '') {
        // नए आइटम को प्रीवियस इनपुट के साथ जोड़ें, और नए लाइन से अलग करें
        return prevInput + '\n' + newItem;
      }
      return prevInput;
    });
    setInput(''); // इनपुट बॉक्स रिसेट करें
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {input.split('\n').map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SingleListAddItem;
