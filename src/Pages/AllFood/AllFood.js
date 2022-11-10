import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import ServicesCard from '../Home/Services/ServicesCard';

const AllFood = () => {
    useTitle('All Food')
    const [allServices, setAllServices] = useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/servicesAll')
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])
    return (
        <div className='container mt-3 mb-4'>
            <h3>There are {allServices.length} Food</h3> 
            <div className='services'>
            {
                allServices.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                ></ServicesCard>)
            }
            </div>
        </div>
    );
};

export default AllFood;