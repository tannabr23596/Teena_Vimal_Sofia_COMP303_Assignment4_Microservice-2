import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
const History = () => {

    const [state,setState]= useState([])

    useEffect(()=>{
      axios.get(`http://localhost:8087/test`)
      .then((response)=>{
        //console.log(response.data)
        setState(response.data)
        console.log(state)
      })
      .catch((err)=>{
        console.log(err)
      })
    },[])
    return (
        <div className="p-7">
                <h3>Test History</h3>
                {state.length===0 && <h1>No Tests Booked</h1>}
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">sl.no</th>
                            <th scope="col">Center Code</th>
                            <th scope="col">Exam code</th>
                            <th scope="col">Candidate Id</th>
                            <th scope="col">Date and Time</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>


                    <tbody>
                  {state.map((s,key)=>{
                    return(
                    <tr >
                        <th scope="row">1</th>
                        <td><a href='#' className='text-dark'>{s.centerCode}</a></td>
                        <td>{s.examCode}</td>
                        <td>{s.candidateId}</td>
                        <td>{s.dateAndTime}</td>
                        <td>{s.status}</td>
                      
                        { <td><button className='btn btn-primary' >Reschedule</button></td> }
                    </tr>)
                 })}    
                </tbody>
                </table>
            </div>
    )
}

export default History