import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1;


  function handleChange(intputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [intputIdentifier]: +newValue,
      };
    });
  }

  


  return (
    <>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      {!inputIsValid && <p className="center" >Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput}></Results>}
    </>
  );
}

export default App
