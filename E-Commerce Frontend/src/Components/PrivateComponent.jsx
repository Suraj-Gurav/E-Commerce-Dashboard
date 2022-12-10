import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = () => {
    const auth=localStorage.getItem("e-user");
    return (
        <>
            {auth?<Outlet/>:<Navigate to="/signIn"/>}
        </>
    )
};

export default PrivateComponent;