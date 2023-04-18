import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'


const EditCertification = () => {
    const [state,setState]=useState([])
    const navigate =   useNavigate()


    useEffect(()=>{
      axios.get(`http://localhost:8087/certification`)
      .then((response)=>{
        console.log('response.data:',response.data)
        setState(response.data)
       
      })
      .catch((err)=>{
        console.log(err)
      })
    },[])

    console.log(state)

    const handleDeleteCertification=(id)=>{
      console.log("handle delete center clicked")
     axios.delete(`http://localhost:8087/certification/${id}`)
      .then((response)=>{
        console.log(response.data)
        setState(response.data)
      })
    }
  
    return (
      <div className=" p-5">
          <div className="col-md-9 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
              <h3>Edit Certification</h3>
              {state.length===0 && <h1>No Certifications</h1>}
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
                    {state.map((s,key)=>{
                      return(
                      <tr >
                          <th scope="row">1</th>
                          { <td><a href='#' className='text-dark'>{s.examCode}</a></td> }
                          <td>{s.certificationName}</td>
                          <td>{s.format}</td>
                          <td>{s.duration}</td>
                          <td>{s.noOfQuestions}</td>
                          <td>{s.passingScore}</td>
                          <td>{s.fee}</td>
                          <td><Link className='btn btn-primary text-white' to={`/editcertificate/${s.examCode}`}>Edit</Link></td>
                          { <td><button className='btn btn-danger' onClick={() =>handleDeleteCertification(s.examCode)}>Delete</button></td> }
                      </tr>)
                   })}     
                  </tbody>
              </table>
          </div>
      </div>
  )
}

export default EditCertification