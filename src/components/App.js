import React, { useState } from "react";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import InputQuery from "./components/InputQuery";
import SubmitButton from "./components/SubmitButton";
import "./styles/App.css";

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
      <Heading />
      <SubHeading />
      <form onSubmit={handleFormSubmit}>
        <InputQuery value={query} onChange={handleQueryChange} />
        <SubmitButton />
      </form>
    </div>
  );
}

export default App;


