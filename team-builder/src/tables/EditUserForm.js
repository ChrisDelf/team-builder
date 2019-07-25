import React, { useState, useEffect } from 'react';
import { debuglog } from 'util';

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />

      <select
        option
        value={user.role}
        name="role"
        className=""
        onChange={handleInputChange}

      >
        <option value="" hidden="hidden">
          Select A role.
        </option>
        <option value="UI">UI Developer</option>
        <option value="Front-End ">Front-End Engineer</option>
        <option value="Back-End">Back-End </option>
        <option value="UX">UX </option>
        <option value="Data Scientist"> Data Scientist </option>
      </select>

      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
