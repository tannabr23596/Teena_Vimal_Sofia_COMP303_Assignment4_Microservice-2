import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListAllCenter = () => {
  const [state,setState]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8087/centre`)
    .then((response)=>{
      //console.log(response.data)
      setState(response.data)
      console.log(state)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const handleDeleteCenter=(id)=>{
    console.log("handle delete center clicked")
    axios.delete(`http://localhost:8087/centre/${id}`)
     .then((response)=>{
       console.log(response.data)
       setState(response.data)
     })
  }

  return (
    <div className=" p-5">
        <div className="col-md-9 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
            <h3>List All Centers</h3>
            {state.length===0 && <h1>No Centres</h1>}
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
                  {state.map((s,key)=>{
                    return(
                    <tr >
                        <th scope="row">1</th>
                        <td><a href='#' className='text-dark'>{s.centerCode}</a></td>
                        <td>{s.centerName}</td>
                        <td>{s.address}</td>
                        <td>{s.phone}</td>
                        <td>{s.website}</td>
                        <td><Link className='btn btn-primary text-white' to={`/editcenter/${s.centerCode}`}>Edit</Link></td>
                        { <td><button className='btn btn-danger' onClick={()=>handleDeleteCenter(s.centerCode)}>Delete</button></td> }
                    </tr>)
                 })}    
                </tbody>
            </table>
        </div>
    </div>
)
}

export default ListAllCenter