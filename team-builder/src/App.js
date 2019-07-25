import React, { useState, useEffect } from 'react';

import './App.css';
import UserTable from './tables/UserTable';
import AddUserForm from './tables/AddUserForm';
import EditUserForm from './tables/EditUserForm';

const App = () => {
  const usersData = [
    { id: 1, name: 'Chris', email: 'email@email.email', role: 'FrontEnd' }
  ];
  // editing users
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: '', email: '', role: '' };
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    console.log('updated', updatedUser);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };
  useEffect( () =>  {

  console.log("I am a noob")


  })
  const editRow = user => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  };

  const [users, setUsers] = useState(usersData);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
