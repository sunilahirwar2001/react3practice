import React, { useEffect, useState } from 'react';

const SaveLocalStorage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect=(()=>{
    const  saveData = localStorage.getItem('formData');
         if(saveData){

         
  const    {name,email,gender,phoneNumber,password} = JSON.stringify(saveData);
        
     setName(name);
     setEmail(email);
     setGender(gender);
     setPhoneNumber(phoneNumber);
     setPassword(password);

}
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    // Form validation
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      phoneNumber.trim() === '' ||
      password.trim() === ''
    ) {
      setErrorMessage('All fields are mandatory');
      return;
    }

    if (!/^[a-zA-Z0-9 ]*$/.test(name)) {
      setErrorMessage('Name is not alphanumeric');
      return;
    }

    if (!email.includes('@')) {
      setErrorMessage('Email must contain @');
      return;
    }

    if (!['male', 'female', 'other'].includes(gender)) {
      setErrorMessage('Please identify as male, female, or others');
      return;
    }

    if (!/^[0-9]+$/.test(phoneNumber)) {
      setErrorMessage('Phone Number must contain only numbers');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must contain at least 6 characters');
      return;
    }

    // Extract username from email
    const username = email.split('@')[0];

    // Display welcome message
    alert(`Hello ${username}`);

    // Clear form fields

    setName('');
    setEmail('');
    setGender('male');
    setPhoneNumber('');
    setPassword('');

  
        
  const formData = {
    name,
    email,
    gender,
    phoneNumber,
    password,
  };
  localStorage.setItem('formData', JSON.stringify(formData));

  // Clear form fields
  setName('');
  setEmail('');
  setGender('male');
  setPhoneNumber('');
  setPassword('');
};









  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p>{errorMessage}</p>}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email address:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="text"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" id="submit">Submit</button>
    </form>
  );
};




export default SaveLocalStorage
