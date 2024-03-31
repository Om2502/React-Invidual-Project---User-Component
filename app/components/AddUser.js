import React, { useState } from 'react';
import './AddUser.css';
import Button from './Button';
import Card from './Card';

const AddUser = (props) => {
  // State variables for each input field
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredImg, setEnteredImg] = useState('');
  const [enteredMajor, setEnteredMajor] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    // Check if the username entered
    if (enteredUsername.trim().length === 0) {
      return;
    }

    const user = {
      id: Math.random().toString(),
      name: enteredUsername,
      age: enteredAge,
      img: enteredImg,
      major: enteredMajor
    };

    props.onAddUser(user);

    // Clear the state variables => clear the input fields
    setEnteredUsername('');
    setEnteredAge('');
    setEnteredImg('');
    setEnteredMajor('');
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input 
          id="username" 
          type="text" 
          name="username" 
          value={enteredUsername} 
          onChange={(event) => setEnteredUsername(event.target.value)} 
        />
        <label>Age (Years)</label>
        <input 
          id="age" 
          type="number" 
          name="age" 
          value={enteredAge} 
          onChange={(event) => setEnteredAge(event.target.value)} 
        />
        <label>Link to image</label>
        <input 
          id="img" 
          type="text" 
          name="img" 
          value={enteredImg} 
          onChange={(event) => setEnteredImg(event.target.value)} 
        />
        <label>Major</label>
        <input 
          id="major" 
          type="text" 
          name="major" 
          value={enteredMajor} 
          onChange={(event) => setEnteredMajor(event.target.value)} 
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;