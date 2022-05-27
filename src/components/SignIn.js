import React from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils';

const SignIn = (props) => {
    const redirect=useNavigate();

    const handleLogin = () => {
        login();
        //props.history.push('/dashboard');
        redirect("/dashboard")
    }

    return (
        <div>
            <h1>Sign in</h1>

            <button onClick={() => handleLogin()}>Click here to log in</button>
        </div>
    );
};

export default SignIn;