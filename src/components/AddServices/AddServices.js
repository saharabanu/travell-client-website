import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://glacial-badlands-60430.herokuapp.com/services',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Service Added Successfully')}
            console.log(data)
            reset();
        })

       
    
    }
    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
             <input {...register("name")} required  placeholder="name" />
            <textarea {...register("description")} required   placeholder="description"/>
            <input type="number" {...register("price")} required placeholder="price"/>
            <input {...register("img")} required  placeholder="img url" />
            <input type="submit" />
            </form>
        </div>
    );
};

export default AddServices;