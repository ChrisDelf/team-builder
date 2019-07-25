import React, { useState } from 'react';

const AddUserForm = props => {
  const initialFormState = { id: null, name: '', email: '', role: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };

    setUser(updatedUser);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <select
        value={user.role}
        className="dropdown"
        onChange={handleInputChange}
        name="role"

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

      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
