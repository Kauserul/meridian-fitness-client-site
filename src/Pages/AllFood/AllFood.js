import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ServicesCard from '../Home/Services/ServicesCard';
import Spinner from 'react-bootstrap/Spinner';

const AllFood = () => {
    useTitle('All Food')
    const {loading} = useContext(AuthContext) 
    const [allServices, setAllServices] = useState([])

    useEffect( () =>{
        fetch('http://localhost:5000/servicesAll')
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])
   
    if(loading){
        return <Spinner className='spinner' animation="grow" />;
    }
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