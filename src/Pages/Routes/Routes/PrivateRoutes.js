import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner className='spinner' animation="grow" />;
    }

    if(user?.email){
        return children
    }
    return <Navigate to='/login' state={{form : location}} replace></Navigate>
};

export default PrivateRoutes;