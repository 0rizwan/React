import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Protected = ({ children , authentication = true}) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.isAuth)

    useEffect(() => {
        // Easiest logic but wont work
        // if (authStatus === true) {
        //     navigate('/')
        // } else if (authStatus === false) {
        //     navigate('/login')
        // }

        // This is main logic
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }else if (!authentication && authStatus !== authentication){
            navigate('/')
        }

        setLoader(false)
    }, [authentication, authStatus, navigate])

    return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default Protected
