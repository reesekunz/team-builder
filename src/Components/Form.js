import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState({
    name: " ",
    email: " ",
    role: " ",
    id: " ",
  });
  // form input
  const handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  // form submission
  const handleSubmit = event => {
    event.preventDefault();
    console.log(input.name);
    console.log(input.email);
    console.log(input.role);
    props.add({ ...input, id: Math.random() });
    setInput({
      name: "",
      email: "",
      role: "",
      id: null
    });
  };
  console.log("props", props);
  console.log("input", input);
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h4>Add Team Member</h4>
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

export default Form;
