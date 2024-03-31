'use client'
import React, { useState } from 'react';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';
import User from './components/User';
import UsersList from './components/UsersList';
import Favicon from "./favicon.ico";

const defaultUsers = [
  {
      id: 1,
      name: 'Buzz Lightyear',
      age: 10,
      major: 'Computer Science',
      img: 'https://www.sideshow.com/storage/product-images/911427/buzz-lightyear-d-stage_disney_square.jpg' // Placeholder path, replace with actual
  },
  {
      id: 2,
      name: 'Michael Cotterell',
      age: 35,
      major: 'Computer Science',
      img: 'https://www.cs.uga.edu/sites/default/files/styles/square_400x400/public/headshot.png?itok=msEVSbrg' // Placeholder path, replace with actual
  },
  {
      id: 3,
      name: 'Courage The Cowardly Dog',
      age: 45,
      major: 'Theatre & Animation',
      img: 'https://pyxis.nymag.com/v1/imgs/0c2/a83/4cfc644e76854d6cfe92f58219d2273a25-14-courage-the-cowardly-dog.rsquare.w400.jpg'
  }
];



function Home() {
  const [showAddUser, setShowAddUser] = useState(false);
  const handleAddUserClick = () => {
    setShowAddUser((prevShowAddUser) => !prevShowAddUser);
  };
  const [users, setUsers] = useState(defaultUsers);
  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };
  return (
    <div>
      <Hdr onAddUserClick={handleAddUserClick} />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default Home;