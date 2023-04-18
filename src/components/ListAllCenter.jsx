import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListAllCenter = () => {
  const [state,setState]=useState([])

  useEffect(()=>{
    axios.get(``)
    .then((response)=>{
      setState(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[state])

  const handleDeleteCenter=(id)=>{
    console.log("handle delete center clicked")
    setState()
  }

  return (
    <div className=" p-5">
        <div className="col-md-6 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
            <h3>List All Centers</h3>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">sl.no</th>
                        <th scope="col">Center Code</th>
                        <th scope="col">Center Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>


                <tbody>
                  {state.map((s)=>{
                    <tr >
                        <th scope="row">1</th>
                        <td><a href='#' className='text-dark'>{s.centerCode}</a></td>
                        <td>{s.centerName}</td>
                        <td>{s.address}</td>
                        <td>{s.phone}</td>
                        <td>{s.website}</td>
                        <td><Link className='btn btn-primary text-white' to={`/editcenter/${s.centerCode}`}>Edit</Link></td>
                        <td><button className='btn btn-danger' onClick={handleDeleteCenter()}>Delete</button></td>
                    </tr>
                 })}    
                </tbody>
            </table>
        </div>
    </div>
)
}

export default ListAllCenter