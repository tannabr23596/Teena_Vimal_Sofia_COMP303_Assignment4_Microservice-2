import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EditCertification = () => {
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
          <div className="col-md-9 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
              <h3>Edit Certification</h3>
              <table class="table table-striped">
                  <thead>
                      <tr>
                          <th scope="col">sl.no</th>
                          <th scope="col">Exam Code</th>
                          <th scope="col">Certification Name</th>
                          <th scope="col">Format</th>
                          <th scope="col">Duration</th>
                          <th scope="col">No Of Questions</th>
                          <th scope="col">Passing Score</th>
                          <th scope="col">Fee</th>
                          <th scope="col">Edit</th>
                          <th scope="col">Delete</th>
                      </tr>
                  </thead>
  
  
                  <tbody>
                    {state.map((s)=>{
                      <tr >
                          <th scope="row">1</th>
                          <td><a href='#' className='text-dark'>{s.examCode}</a></td>
                          <td>{s.certificationName}</td>
                          <td>{s.format}</td>
                          <td>{s.duration}</td>
                          <td>{s.noOfQuestions}</td>
                          <td>{s.passingScore}</td>
                          <td>{s.fee}</td>
                          <td><Link className='btn btn-primary text-white' to={`/editcertificate/${s.examCode}`}>Edit</Link></td>
                          <td><button className='btn btn-danger' onClick={handleDeleteCenter()}>Delete</button></td>
                      </tr>
                   })}    
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default EditCertification