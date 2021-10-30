import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OrderPlace = () => {
    const {user} =useAuth();
    const {orderPlaceId} =useParams();
    const [service,setService]= useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${orderPlaceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return (
        <div>
            <h3>User Name :{user.displayName}  <br /> User Email :{user.email}</h3>
            <div className="container mt-5"> 
            <div className="row">
            <div className="col">
    <div className="card h-100">
      <img src={service?.img} className="card-img-top h-50" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{service?.name}</h5>
        <h5>Price: ${service?.price}</h5>
        <p className="card-text">{service?.description}</p>
      </div>
    </div>
  </div>

            </div>

            </div>

        </div>
    );
};

export default OrderPlace;