import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://glacial-badlands-60430.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2 className="text-primary"> Our tourism place services</h2>
            <div className="container">

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    
                    ></Service> )
                }
                </div>



            </div>
            
        </div>
    );
};

export default Services;