import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-danger">
            <h2>Page not Found</h2>
            <Link to="/home"><button>Go Home</button></Link>
        </div>
    );
};

export default NotFound;