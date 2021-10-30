import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


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
        <div>
            <h2 className="text-primary">Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning p-3 rounded">Google Login</button>

        </div>
    );
};

export default Login;