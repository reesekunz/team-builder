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

  console.log("edit", editing);

  return editing ? (
    // ternary operator will say whether to add new or edit existing team member
    // adding new team nembers - copy/paste from form.js (just for <form onSumbit > use handleUpdate from above instead of handleSubmit)
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
  ) : (
    // end of copy/paste from form.js
    // editing existing team members - add dynamic values inside ternary operator (this will say that we already have that team members props (submission) and just want to edit them)
    <div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Role: {role}</div>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default TeamMember;
