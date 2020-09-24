import React from "react";
import { BrowserRouter as Router, Route,Link, Redirect } from 'react-router-dom';
import Form from './components/Form';

const App = () => {


  return (
    <Router>
      <div className="nav-bar">
      <h1>Lambda Eats</h1>
      <Link style= {{textDecoration: 'none'}}to="/" onClick = {()=>{
        document.querySelector('.pizza-form').style.display = "none";
        document.querySelector('.form-invoker button').style.display = "block";
      
      }}><h2>Home</h2></Link>    
      <h2>Help</h2>
    </div>

    <div className="form-invoker">
      <Link style={{textDecoration: 'none'}}to="/pizza">
      {<button style={{ textDecoration: 'none', border: 'solid 1px black', color: 'black', padding: '15px 32px', textAlign: 'center', fontSize: '16px' }} onClick={()=>{
        document.querySelector('.pizza-form').style.display = "block";
        document.querySelector('.form-invoker button').style.display = "none";

      }}>Pizza?</button>}
      </Link>

     <Form/>
    </div>

    </Router>
    
      
  );
};
export default App;
