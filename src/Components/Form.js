import React, { useState } from "react";

function Form(props) {
  // create useState with inputs you want from user
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
  // form submission  P
  const handleSubmit = event => {
    event.preventDefault();
    console.log(input.name);
    console.log(input.email);
    console.log(input.role);
    props.add({ ...input, id: Math.random() });
    // take inputs from useState above (inputs will now be changed when form is submitted)
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
        {/* // same syntax as name label but 'name' and 'value' are different  */}
        <label htmlFor="Email">
          Email:{" "}
          <input
            type="text"
            name="email"
            // make value dynamic so will change when user inputs something
            value={input.email}
            onChange={handleChange}
          />
        </label>
        {/* // same syntax as name label but 'name' and 'value' are different  */}

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
