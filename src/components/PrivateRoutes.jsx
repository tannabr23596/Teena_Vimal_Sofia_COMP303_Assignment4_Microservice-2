import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const userTypeToken = JSON.parse(localStorage.getItem("userType"))
    return (
        <div>
            {
                userTypeToken === "Admin" ? <Outlet /> : <Navigate to="/login" />
            }
            
        </div>

    )
}

export default PrivateRoutes