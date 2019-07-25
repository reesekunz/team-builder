// need form inputs for name, email, role 
import React, { useState } from "react";

function Form(props) {
const [input, setInput] = useState({
name: " ",
email: " ",
role: " ",
});
const handleChange = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(input.name);
    console.log(input.email);
    console.log(input.role);
  };

  return (
    <div className="Form">
      {console.log(input)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
         Email:
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
        Role:
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