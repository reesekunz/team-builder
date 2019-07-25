import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TeamMember from "./Components/TeamMember";

function App() {
  // Create new useState for members
  const [members, setMembers] = useState([]);
  // Applying to Form component (be sure to use spread operator for members)
  const submitMember = member => setMembers([...members, member]);
  // Applying to TeamMember component (mapping over state to render team members)
  const update = newMember =>
    setMembers([
      // map over each member in the array, return each unique value in that array - need to add id to components useState to give each unique dataset a value
      ...members.map(member => {
        if (member.id === newMember.id) {
          return newMember;
        }
        return member;
      })
    ]);

  console.log("members", members);

  return (
    <div className="App">
      <header className="App-header">
        {/* //map over TeamMember component to get each team member  */}
        {members.map((member, index) => (
          <TeamMember member={member} key={index} update={update} />
        ))}
        {/* add Form component  */}
        <Form add={submitMember} />
      </header>
    </div>
  );
}

export default App;
