import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';



const Header = () => {
    const { user, logout } = useAuth();
   
    return (
        <div className="header-container bg-dark text-white">
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
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Login
                                </NavLink>
                                 <span>{user?.displayName} </span>
            {user?.email && <>  <button onClick={logout} className="text-danger fw-bold">log out</button>

                            <NavLink className="header-items"
                                to="/myOrders"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                               MyOrders
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
                                to="/manageOrders"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                ManageOrders
                                </NavLink> 
            
            
            
            
            
            </>}
           
            
            
                                   
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