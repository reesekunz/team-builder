// need form inputs for name, email, role 
import React, { useState } from "react";
import "./App.css";

//function TeamMember(props) {

    let teamMembers = [
    {"id":1,
    "name":"Reese",
    "email":"reesekunz21@gmail.com",
    "role":"frontend engineer"},

    {"id":2,
    "name":"LeBron",
    "email":"lebronjames23@gmail.com",
    "role":"backend engineer"},

    {"id":3,
    "name":"Anthony",
    "email":"anthonydavis@gmail.com",
    "role":"designer"},
    
    ]

    console.log('teamMembers array', teamMembers);
    console.log('teamMembers array', JSON.stringify(teamMembers));

  
// teamMembers.map((member) => {
// console.log(member);
// return (

// {member.name}
// {member.email}
// {member.role}

// )
// )};