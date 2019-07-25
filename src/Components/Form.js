import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState({
    name: " ",
    email: " ",
    role: " ",
    id: null
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
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name: {" "}
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email: {" "}
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role: {" "}
          <input
            type="text"
            name="role"
            value={input.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default Form;