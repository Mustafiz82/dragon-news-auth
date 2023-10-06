import React, { useContext } from 'react';
import { authContext } from '../Contest/Context';
import { Navigate, useLocation, useParams } from 'react-router-dom';

const PrivateRoute = ({children }) => {

    const {user , loading} = useContext(authContext)

    const location = useLocation()
    const params = useParams()
    console.log(location);
    console.log(params);

    if (loading ){
        return <span class="loading loading-spinner text-error text-5xl"></span>

    }


    if (user) {
        return  children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;