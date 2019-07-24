import React, { useState } from 'react';

function TeamMemberBuilder() {
  const [member, setMember] = useState({ username: '', role: '', email: '' });

  function changeHandler(event) {
    const updatedUser = { ...member, [event.target.name]: event.target.value };

    setMember(updatedUser);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('memberName', member);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Signup</legend>
        <div className="form-group row">
          <label>
            MemberName
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter your username"
                value={member.username}
                onChange={changeHandler}
              />
            </div>
          </label>
        </div>
        <div className="form-group">
          <label>Role</label>
          <input
            type="role"
            className="form-control"
            name="role"
            aria-describedby="emailHelp"
            placeholder="Enter role"
            value={member.role}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="emailHelp"
            name="email"
            placeholder="Enter Email"
            onChange={changeHandler}
            value={member.email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default TeamMemberBuilder;
