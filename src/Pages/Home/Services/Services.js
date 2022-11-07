import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import './Services.css'
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div className='mt-5 mb-5'>
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
                <Link to='/services'><button className='btn btn-primary'>See All</button></Link>
            </div>
        </div>
    );
};

export default Services;