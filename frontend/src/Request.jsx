import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Request() {
  const [data, setData] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:8081/getRequest')
    .then(res => {
      if(res.data.Status === "Success") {
        setData(res.data.Result);
      }
    })
    .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8081/deletereq/' + id)
      .then(res => {
        if (res.data.Status === "Success") {
          setData(prevData => prevData.filter(requester => requester.id !== id));
        } else {
          alert("Error");
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div className='px-5 py-3'>
        <div className='d-flex justify-content-center'>
            <h3>Request List</h3>
        </div>
        <div className='mt-3'>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Valid ID</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Request</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {data.map((requester, index) => {
                return <tr key={index}>
                <td>{requester.requester_name}</td>
                <td>{<img src={`http://localhost:8081/images/`+requester.requester_image} alt="" className='requester_image' data-bs-toggle='modal' data-bs-target="#requesterimage" />
                      }
                  </td>
                <td>{requester.requester_phoneNo}</td>
                <td>{requester.requester_email}</td>
                <td>{requester.requester_address}</td>
                <td>{requester.request}</td>
                <td>{requester.message}</td>
                <td>
                  <button onClick={e => handleDelete(requester.id)} className='btn btn-sm btn-danger'>delete</button>
                </td>
              </tr>
              })} 
            </tbody>
          </table>
        </div>
        
    </div>
  )
}

export default Request
