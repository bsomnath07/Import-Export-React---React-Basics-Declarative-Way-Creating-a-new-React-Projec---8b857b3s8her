import React, { useState } from "react";
import SubHeading from "./SubHeading";
import InputQuery from "./InputQuery";
import SubmitButton from "./SubmitButton";
import Heading from "./Heading";
//import "./styles/App.css";

function App() {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Query submitted: ${query}`);
  };

  return (
    <div id="main">
    <Heading></Heading>
      <SubHeading />
      <form onSubmit={handleFormSubmit}>
        <InputQuery value={query} onChange={handleQueryChange} />
        <SubmitButton />
      </form>
    </div>
  );
}

export default App;


