import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoutesUser = () => {
    const userTypeToken = JSON.parse(localStorage.getItem("userType"))
    return (
        <div>
            {
                userTypeToken === "Candidate" ? <Outlet /> : <Navigate to="/login" />
            }
            
        </div>

    )
}

export default PrivateRoutesUser