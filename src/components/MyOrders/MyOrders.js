import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const email = user.email;
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch(`https://glacial-badlands-60430.herokuapp.com/myOrder/${email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[email])
    const handleDelete =(id) =>{
        const proceed = window.confirm('Are you sure, you want to delete?');
       if(proceed){
        const url = `https://glacial-badlands-60430.herokuapp.com/deleteOrder/${id}`;
        fetch(url,{
            method:"DELETE"
        })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            alert(' order deleted successfully')
            const remainingUsers = orders.filter(order => order._id !== id);
            setOrders(remainingUsers);

        }
        console.log(data)})
       }
    }

    return (
        <div>
           <h2>This is My Order list  {orders.length}</h2>
           <div className="row container text-center">
               {
                  orders?.map(order=><div className="col-md-6 col-lg-4 mb-3" key={order._id} >
                      <div className=" border border  ">
                        
                        <img  className="w-50 h-50"src={order?.img} alt="" />
                        <p>{order?.email}</p>
                        <h4>Address : {order?.userAddress}</h4>
                        <h4>Phone : {order?.phone}</h4>


                        <h5>{order?.name}</h5>
                        
                        <h5>{order?.price}</h5>
                        
                        <p>{order?.description
                        }</p> 

                        
                        <br />
                       <button onClick={()=>handleDelete(order._id)} className="btn btn-danger m-2">delete</button>
                       <Link to="/"><button className="btn btn-success px-4">Go Back</button></Link>

                      </div>
                      

                  </div>)

                   
               }

           </div>
        </div>
    );
};

export default MyOrders;