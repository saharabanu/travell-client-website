import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const email = user.email;
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch(`https://glacial-badlands-60430.herokuapp.com/myOrder/${email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    const handleDelete =(id) =>{
        const proceed = window.confirm('Are you sure, you want to delete?');
       if(proceed){
        const url = `https://glacial-badlands-60430.herokuapp.com/myOrder/${id}`;
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
           <h2>This is My Order list</h2>
           <div className="row container text-center">
               {
                  orders?.map(order=><div className="col-md-6 col-lg-4" key={order._id} >
                      <div className="">
                        <h4>{order?.email}</h4>
                        <img  className="w-50 h-50"src={order?.serviceImage} alt="" />
                        {/* <h5>{order?.serviceName}</h5>
                        <br />
                        <h5>{order?.service.price}</h5>
                        <br />
                        <p>{order?.service.description
                        }</p>  */}
                        <br />
                       <button onClick={()=>handleDelete(order._id)} className="btn btn-danger m-2">delete</button>

                      </div>

                  </div>)

                   
               }

           </div>
        </div>
    );
};

export default MyOrders;