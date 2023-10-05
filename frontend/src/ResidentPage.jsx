import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function ResidentPage() {
   const navigate = useNavigate();
   const Swal = require('sweetalert2')

    const[data, setData] = useState({
        requester_name: '',
        requester_phoneNo: '',
        requester_emai: '',
        requester_address: '',
        request: '',
        message:'',
        requester_image:''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("requester_name", data.requester_name);
        formdata.append("requester_phoneNo", data.requester_phoneNo);
        formdata.append("requester_email", data.requester_email);
        formdata.append("requester_address", data.requester_address);
        formdata.append("request", data.request);
        formdata.append("message", data.message);
        formdata.append("requester_image", data.requester_image);
        axios.post('http://localhost:8081/createreq', formdata)
        .then(res => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Request Has Been Submitted',
                text: 'NOTE: To follow up your request, you can send message to our barangay staff using our messenger, click the message icon on the sidebar and register.',
                showConfirmButton: true,
              });
            
        })
        .catch(err => console.log(err));
    }

    const handleLogout = () => {
		axios.get('http://localhost:8081/logout')
		.then(res => {
			navigate('/start')
		}).catch(err => console.log(err));
	}

  return (
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">RESIDENT PAGE</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li>
                            <a href="https://651eb379bd2b432346d0bc54--bejewelled-seahorse-26bce2.netlify.app/" target="_blank" rel="noopener no-referrer" className="nav-link px-0 align-middle text-white">
                                <i className="fs-4 bi-chat-dots"></i> <span className="ms-1 d-none d-sm-inline">Message</span> </a>
                        </li>
                        <li onClick={handleLogout}>
                            <a href="#" className="nav-link px-0 align-middle text-white">
                                <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Log Out</span> </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center pt-4 '>
                <h2 className='residentpage'>Make a Request</h2>
                <form className="row g-3 w-50 residentpage" onSubmit={handleSubmit}>
                    <div classNames="col-12">
                        <label for="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
                        onChange={e => setData({...data, requester_name: e.target.value})}/>
                    </div>
                    <div className="col-12">
                        <label for="inputPhone4" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" id="inputPhone" placeholder='Enter Number' autoComplete='off' onChange={e => setData({...data, requester_phoneNo: e.target.value})}/>
                    </div>
                    <div className="col-12">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder='Enter Email' autoComplete='off' onChange={e => setData({...data, requester_email: e.target.value})}/>
                    </div>
                    <div classNames="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off' onChange={e => setData({...data, requester_address: e.target.value})}/>
                    </div>
                    <div classNames="col-12">
                        <label for="inputRequest" className="form-label">Request</label>
                        <input type="text" className="form-control" id="inputRequest" placeholder="Enter Request" autoComplete='off' onChange={e => setData({...data, request: e.target.value})}/>
                    </div>
                    <div classNames="col-12">
                        <label for="inputMessage" className="form-label">Message</label>
                        <input type="text" className="form-control" id="inputRequest" placeholder="Enter Message" autoComplete='off' onChange={e => setData({...data, message: e.target.value})}/>
                    </div>
                    <div className="col-12 mb-3">
                        <label className="form-label" for="inputGroupFile02">Attach Valid ID</label>
                        <input type="file" className="form-control" id="inputGroupFile02"
					    onChange={e => setData({...data, requester_image: e.target.files[0]})}/>
				    </div>
                    
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            
        </div>        
    </div>
  )
}

export default ResidentPage
