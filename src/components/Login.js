import React, {useState,Suspense } from 'react'
import Register from './Register'
import {Route, Switch} from "react-router-dom";


import { Link } from 'react-router-dom';

function Login(props){


    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // On Submit Login From

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }


    const message = () => {
        return <Register/> 
       }
       
    return(
        <div className="_loginRegister">
            <h1>Login</h1>
            <form  >
                <div className="form-control">
                    <label>Email</label>
                    <input name="email" type="email" required placeholder="Enter your email" value={state.userInfo.email} onChange={onChangeValue} />
                </div>
                <div className="form-control">
                    <label>PassWord</label>
                    <input name="password" type="password" required placeholder="Enter your password" value={state.userInfo.password} onChange={onChangeValue} />
                </div>
                {errorMsg}
                {successMsg}
                <div className="form-control">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div className="_navBtn">
         
         

  

                <button>Register</button>


            </div>
        </div>
    );
}

export default Login;