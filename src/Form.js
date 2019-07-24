// need form inputs for name, email, role 
import React, { useState } from "react";
import "./App.css";

function Form(props) {

const [member, setMember] = useState({
name: " ",
email: " ",
role: " ",
});

const handleChange = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(member.name);
    console.log(member.email);
    console.log(member.role);
  };

  return (
    <div className="Form">
      {console.log(member)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
         Email:
          <input
            type="text"
            name="email"
            value={member.email}
            onChange={event => handleChange(event)}
          />
        </label>
        Role:
          <input
            type="text"
            name="role"
            value={member.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}


export default Form; 