import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="nav-bar">
      <h1>Lambda Eats</h1>
      <Link to="/" style={{ textDecoration: 'none' }}><h2>Home</h2></Link>    
      <h2>Help</h2>
    </div>
    </Router>
    
      
  );
};
export default App;
