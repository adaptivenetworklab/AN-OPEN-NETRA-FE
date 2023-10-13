import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


export default function PrivateRoutes() {
    console.log('Private Route Works')
    let  userid = !(localStorage.getItem('authTokens') == null);
    return (
        <>
            {userid ? <Outlet  /> : <Navigate to="/login" />}
        </>

    )
}
