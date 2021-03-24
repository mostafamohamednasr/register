import React, {useContext,useState} from 'react'

function Register(){
    const initialState = {
        userInfo:{
            name:'',
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
 

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }
    
    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    return(
        <div className="_loginRegister">
            <h1>Sign Up</h1>
            <form >
                <div className="form-control">
                    <label>Full Name</label>
                    <input name="name" required type="text" value={state.userInfo.name} onChange={onChangeValue} placeholder="Enter your name"/>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input name="email" required type="email" value={state.userInfo.email} onChange={onChangeValue} placeholder="Enter your email"/>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input name="password" required type="password" value={state.userInfo.password} onChange={onChangeValue} placeholder="Enter your password"/>
                </div>
                {errorMsg}
                {successMsg}
                <div className="form-control">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <div className="_navBtn">
                <button  >Login</button>
            </div>
        </div>
    );
}

export default Register