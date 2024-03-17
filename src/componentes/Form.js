import {useReducer } from 'react';
import '../formato.css';


    const initialState = {
        email: " ",
        emailIsValid: false,
        password: " ",
        passwordIsValid: false
    }

    const reducer = (state, action)=>{
        switch(action.type){
            
            case "SET_EMAIL":
               
                return{
                   
                    ...state,
                    email: action.email,
                    emailIsValid: action.email.includes('@')
                
                }
            case "SET_PASSWORD":
                return{
                    ...state,
                    password: action.password,
                    passwordIsValid: action.password.trim().length > 7
                    
                }
           
            default:
                return state;
        }

    }


function Form() {

    const [state, dispatch] = useReducer(reducer, initialState);


    const formIsValid = state.emailIsValid && state.passwordIsValid;


    function submitFormHandler(event) {
      
        event.preventDefault();
        if (!formIsValid) {
        alert('Invalid form inputs!');
        return;
    }


    console.log('Good job!');
    console.log(state);
    

    }
    return (
    <form className='form' onSubmit={submitFormHandler}>
        <div className='control'>
            <label className='label' htmlFor="email">Email</label>
            <input className='input' id="email" type="email" onChange={(e)=>{dispatch({type: "SET_EMAIL", email: e.target.value})}} />
        </div>
        <div className='control'>

            <label className='label' htmlFor="password">Password</label>
            <input className='input' id="password" type="password" onChange={(e)=>{dispatch({type: "SET_PASSWORD", password: e.target.value})}} />
        </div>
        <button type='submit' className='button'>Submit</button>
    </form>
    );
}
export default Form;