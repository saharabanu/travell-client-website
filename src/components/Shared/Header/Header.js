import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
   
    return (
        <div className="header-container">
            <div className="header container">
                <div className="row">
                    <div className="col-md-2">
                        <h2>Travel</h2>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-items">
                            <div className="d-flex justify-content-end align-items-end ">
                                <div>
                                <NavLink className="header-items"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Home
                                </NavLink>
                                <NavLink className="header-items"
                                to="/addServices"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                AddServices
                                </NavLink>
                                <NavLink className="header-items"
                                to="/orderPlace"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                               OrderPlace
                                </NavLink>
                                <NavLink className="header-items"
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Login
                                </NavLink>
                                
                                <button >Log Out</button>
                                </div>
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
                
        </div>
    );
};

export default Header;