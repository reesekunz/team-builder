import React, { useState } from "react";

function TeamMember(props) {
  // pass each input you want as a parameter
  const { name, email, role, id } = props.member;
  // same useState from form.js
  const [input, setInput] = useState({
    name: name,
    email: email,
    role: role,
    id: id
  });
  // create new useState for editing data
  const [editing, setEditing] = useState(false);

  const handleEdit = event => {
    setEditing(!editing);
  };
  // same as form.js (handleChange is form input)
  const handleChange = event => {
    console.log("target name", event.target.name);
    console.log("value", event.target.value);
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  // instead of hanldeSubmit in form.js we have new const, handleUpdate (passes inputed data as props to update/edit)
  const handleUpdate = event => {
    event.preventDefault();
    props.update(input);
    setEditing(false);
  };

  console.log("edit", editing); //edit shows as boolean - true or false (apply this to if/else below)

  //   If/else statement to tell form you either want to edit existing team member (first section)
  //   or add new team member (second section - just returning exactly what you have from form.js
  //   only difference is use handleUpdate from above instead of handleSubmit)

  if (editing === false) {
    return (
      <div>
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>Role: {role}</div>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  } else {
    return (
      <div className="Form">
        <form onSubmit={handleUpdate}>
          <label htmlFor="Name">
            Name:{" "}
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Email">
            Email:{" "}
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Role">
            Role:{" "}
            <input
              type="text"
              name="role"
              value={input.role}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default TeamMember;
