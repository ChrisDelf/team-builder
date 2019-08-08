import React, { useState, useEffect } from 'react';
import MemberCard from './Component/memberCard';

function TeamMemberBuilder() {
  const [member, setMember] = useState({ username: '', role: '', email: '' }
    // localStorage.getItem('MyValueInLocatStorage') || ''
  );
  // useEffect (() => {
  //  localStorage.setItem('MyValueInLocalStorage', member) ;
  // },[member]);
  //
  function changeHandler(event) {
    const updatedUser = { ...member, [event.target.name]: event.target.value };

    setMember(updatedUser);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('memberName', member);



  }
  function createMemberCard (member, index) {

    return (<MemberCard key= {index} member = {member}/> )


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
        <select
          value={member.role}
          className="border rounded border-full border-gray-200"
          onChange={changeHandler}
        >
          <option value="" selected="selected" hidden="hidden">
            Select A role.</option>
          <option value={(member.role = 'UI')}>UI Developer</option>
          <option value={(member.role = 'Front-End ')}>
            Front-End Engineer
          </option>
          <option value={(member.role = 'Back-End')}>Back-End </option>
          <option value={(member.role = 'UX')}>UX </option>
          <option value={(member.role = 'Data Scientist')}> Data Scientist  </option>
        </select>

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
    <button type="submit" className="btn btn-primary" onClick={createMemberCard}>
          Submit
        </button>
      </fieldset>
    </form>
  );
}

export default TeamMemberBuilder;
