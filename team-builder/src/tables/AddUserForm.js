import React, { useState } from 'react';



const AddUserForm = props => {
  const initialFormState = { id: null, name: '', email: '', role: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
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
        type="text"
        name="email"
        value={user.email}
        onChange={handleInputChange}
    />
        <select

          className="border rounded border-full border-gray-200"
          onChange={handleInputChange}
        >
          <option value="" selected="selected" hidden="hidden">
            Select A role.</option>
          <option value={(user.role = 'UI')}>UI Developer</option>
          <option value={(user.role = 'Front-End ')}>
            Front-End Engineer
          </option>
          <option value={(user.role = 'Back-End')}>Back-End </option>
          <option value={(user.role = 'UX')}>UX </option>
          <option value={(user.role = 'Data Scientist')}> Data Scientist  </option>
        </select>

      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
