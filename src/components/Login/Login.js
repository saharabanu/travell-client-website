import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle} = useAuth
    ();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then(result => {
            console.log(result.user);
            history.push(redirect_uri)
            
        })

    }

   
    return (
        <div className='login-page'>
            <div className=' login-content border shadow-lg rounded pt-5 pb-5'>
            <h2 className="text-danger pb-2">Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning px-3 py-2 rounded ">Google Login</button>
            </div>

        </div>
    );
};

export default Login;