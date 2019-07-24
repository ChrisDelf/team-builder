import React, { useState } from 'react';

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
        email="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <select
        className="border rounded border-full border-gray-200"
        onChange={handleInputChange}
      >
        <option value="" selected="selected" hidden="hidden">
          Select A role.
        </option>
        <option value={(user.role = 'UI')}>UI Developer</option>
        <option value={(user.role = 'Front-End ')}>Front-End Engineer</option>
        <option value={(user.role = 'Back-End')}>Back-End </option>
        <option value={(user.role = 'UX')}>UX </option>
        <option value={(user.role = 'Data Scientist')}> Data Scientist </option>
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
