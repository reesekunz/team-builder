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

}

export default Form; 