import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import './Services.css'
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([])

    // console.log(services)
    useEffect(() => {
        fetch('https://meridian-fitness-server.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div className='mt-5 mb-5 container'>
            <div className='text-center mb-5'>
                <h2>Ready to Orders</h2>
                <p>Try some of our best foods</p>
            </div>
            <div className='services'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center mt-4'>
                <Link to='/allFood'><button className='btn btn-primary'>See All</button></Link>
            </div>
        </div>
    );
};

export default Services;