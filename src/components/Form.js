import React from "react";
import * as yup from 'yup';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import { render } from "@testing-library/react";

const Form = (props)=>
{
    //Passed from App.js

    let {formState, setFormState, inputErrors, setInputErrors} = props;

    

    //Input Validation Schema using yup

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, "Please type your name")
            .required("Name is Required"),
        size: yup
            .string(),
        mushrooms: yup
            .boolean(),
        onions: yup
            .boolean(),
        feta: yup
            .boolean(),
        garlic: yup
            .boolean(),
        instructions: yup
            .string()
      });

    //Functions

    let onFormInput = event => {

        if (event.target.type !== 'checkbox') {

            setFormState({

                ...formState,
                [event.target.name]: event.target.value
    
            })

        } else {

            setFormState({

                ...formState,
                [event.target.name]: event.target.checked
    
            })

        }


        //Sets state of inputErrors if there is an invalid input

        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {

                setInputErrors({

                    ...inputErrors,
                    [event.target.name]: ''

                });

            })
            .catch(err => {

                setInputErrors({

                    ...inputErrors,
                    [event.target.name]: err.errors[0]

                });

            })

            formSchema.isValid(formState).then(valid => { //Enables button if the input is valid

                document.querySelector('form button').disabled = !valid;
    
            })
        
        console.log(formState)

        event.persist()

    }

    let onFormSubmit = event => {

        event.preventDefault()

        axios
            .post('https://reqres.in/api/users', formState)
            .then(response => {

                console.log('Data response:', response.data);

                document.querySelector('.pizzaForm').style.display = 'none';

                render(

                    <Router>
                        <Redirect push to='/thanks' />

                        <h1>Congrats! Pizza is on its way!</h1>

                        <img src='https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif' alt='gif' />

                    </Router>,
                    
                    document.querySelector('.App')
                )
                

            })
            .catch(err => {

                console.log(err);

            });

    }

    return (

        <div className='pizzaForm'>

            <h1>Build your pizza</h1>

            <form onSubmit={event => onFormSubmit(event)}>

                <label>
                    Name

                    <input 
                    type='text' 
                    name='name'
                    onChange={event => onFormInput(event)}
                    value={formState.name.value}>
                    </input>

                    <h3 id='name-error'>{inputErrors.name}</h3>

                </label> 

                <label>
                    Pizza Size

                    <select 
                    name='size' 
                    onChange={event => onFormInput(event)}
                    value={formState.size.value}>

                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>

                    </select>

                </label>     
                
                <h3>Toppings</h3>

                <label>
                    Mushrooms 

                    <input 
                    type='checkbox' 
                    name='mushrooms'
                    onChange={event => onFormInput(event)}>
                    </input>

                </label>           

                <label>
                    Onions 

                    <input 
                    type='checkbox' 
                    name='onions'
                    onChange={event => onFormInput(event)}>
                    </input>

                </label>    

                <label>
                    Feta cheese 

                    <input 
                    type='checkbox' 
                    name='feta'
                    onChange={event => onFormInput(event)}>
                    </input>

                </label>  

                <label>
                    Roasted garlic 

                    <input 
                    type='checkbox' 
                    name='garlic'
                    onChange={event => onFormInput(event)}>
                    </input>

                </label> 

                <label>
                    Special instructions

                    <input 
                    type='text' 
                    name='instructions'
                    onChange={event => onFormInput(event)}
                    value={formState.instructions.value}>
                    </input>

                </label>

                {/* <Link to='/thanks'> */}
                    <button disabled={true}>Submit order</button>
                {/* </Link> */}
            </form>

        </div>
    )
}

export default Form;
