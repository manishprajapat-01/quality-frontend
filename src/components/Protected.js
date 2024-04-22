import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected({ Component }) {
    let navigate = useNavigate();
    let token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    })
    return (
        <>
            <Component />
        </>
    )
}
