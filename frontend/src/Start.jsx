import React from 'react'
import { useNavigate } from 'react-router-dom'

function Start() {
    const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded  border loginForm text-center'>
            <h2>LOG IN AS</h2>
            <div className='d-flex justify-content-between mt-5'>
                <button className='btn btn-primary btn-lg' onClick={e => navigate('/residentlogin')}>RESIDENT</button>
                <button className='btn btn-success btn-lg' onClick={e => navigate('/login')}>ADMIN</button>
            </div>
            <br></br> 
            © 2023 Quiambao & Africa         
        </div>
    </div>      
  )
}

export default Start
