import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TeamMember from "./Components/TeamMember";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Add Team Member</div>
        <div>
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
