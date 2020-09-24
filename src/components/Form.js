import React from "react";
import { Route } from "react-router-dom";

const Form = (props)=>
{
    return(
       
       <form className="pizza-form" style={{display: 'none'}}>  
        Name:
        <input type="text" name="name" />
        </form>
  
    )
}

export default Form;
