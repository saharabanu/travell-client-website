import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const OrderPlace = () => {
    const {user} =useAuth();
    const {orderPlaceId} =useParams();
    const [service,setService]= useState({})
    const { register, handleSubmit, reset } = useForm({ defaultValues: { email: user.email,name:service.name,img:service.img} });


    const [person, setPerson] = useState({});
    
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${orderPlaceId}`)
        .then(res=>res.json())
        .then(data=>{setService(data)})
    },[])
    const onSubmit = data => {
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        )
            .then(res => res.json())
            .then(data => {
                setPerson(data)
            })

        data.image = person?.img;
        console.log(data);
        reset()
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7 col">
                            <div className="card h-100">
                <img src={service?.img} className="card-img-top h-50 " alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{service?.name}</h5>
                    <h5>Price: ${service?.price}</h5>
                    <p className="card-text">{service?.description}</p>
                </div>
                </div>
                </div>
                <div className="col-md-5 col">
                <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <input className="mb-3" required placeholder="Name" {...register("userName")} defaultValue={user.displayName} /> */}
                            <br />
                            <input className="mb-3" required placeholder="Email" {...register("userEmail")} defaultValue={user.email} />

                                <br />
                            <input className="mb-3" required placeholder="address" {...register("userAddress")} />
                            <br />
                            <input className="mb-3" required placeholder="phone number" type="number" {...register("phone")} />
                            <br />
                            
                            <input className="mb-3" required placeholder="Name" {...register("serviceName")} defaultValue={service.name} />
                            <br />
                            <input className="mb-3" required placeholder="img" {...register("serviceImage")} defaultValue={service.img} />
                            <br />
                           <Link to='/myOrders'> <input type="submit" value="Place Order" /></Link>
                        </form>
                </div>

            </div>
            

        </div>
    );
};

export default OrderPlace;


// https://glacial-badlands-60430.herokuapp.com/