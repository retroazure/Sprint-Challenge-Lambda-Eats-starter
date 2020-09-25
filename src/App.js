import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Form from "./components/Form";
import './App.css';


const App = () => {
  let [formState, setFormState] = useState({
    name: "",
    size: "",
    mushrooms: false,
    onions: false,
    feta: false,
    garlic: false,
    instructions: "",
  });

  const [inputErrors, setInputErrors] = useState({
    //State for form input validation errors
    name: "",
    size: "",
    mushrooms: "",
    onions: "",
    feta: "",
    garlic: "",
    instructions: "",
  });
  
  const removeButton = ()=>{
    document.querySelector(".buildButton").style.display = "none";
  }
  
  const displayButton = ()=>{
    document.querySelector(".buildButton").style.display = "inline-block";
  }

  return (
    <Router>
      <div className="App">
        <div style={{display: 'flex'
        , justifyContent: 'start'
        , flexDirection: 'row'
        , alignItems: 'center'
        , paddingTop: '20px'}}>

          <h1 style={{paddingLeft: '150px', paddingRight: '800px'}}>Lambda Eats</h1>
          <Link onClick={displayButton} style={{textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold'}} to="/">Home</Link>
          <Link style={{textDecoration: 'none',paddingLeft:'150px',fontSize: '1.5rem', fontWeight: 'bold'}} to="/">Help</Link>
        
      </div>

      <div style={{paddingTop: '100px'}}>
      <Link to="/pizza" id="buildlink">
          <button className="buildButton" onClick={removeButton}>Build your pizza</button>
        </Link>
      </div>
        
        <Route path="/pizza">
          <Form
            formState={formState}
            setFormState={setFormState}
            inputErrors={inputErrors}
            setInputErrors={setInputErrors}
          />
        </Route>

        <Route path="/thanks">
          
          <h1>Congrats! Pizza is on its way!</h1>

          <img
            src="https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif"
            alt="gif"
          />

        </Route>
      </div>
    </Router>
  );
};
export default App;
