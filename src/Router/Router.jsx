import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/login/Login';
import Registration from '../Pages/login/Registration';
import News from '../Pages/News/News';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/details/:id",
                element:<PrivateRoute><News></News></PrivateRoute>
            }
        ]
    }
])


export default router;