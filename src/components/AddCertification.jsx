import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCertification = () => {

  const navigate =   useNavigate()
  const [state, setState] = useState({
      examCode:'',
      certificationName:'',
      format:'',
      duration:'',
      noOfQuestions:'',
      passingScore:'',
      fee:''
  })

  const handleInputChange=(e)=>{
     
      setState({
          ...state,
          [e.target.name]:e.target.value
      })
  }

  const handleFormSubmit = (e) => {
      e.preventDefault()
      console.log(state)
      // axios.post('http://localhost:8087/candidate',state)
      // .then((response)=>{
      //     console.log(response.data)
      //     navigate('/login')
      // })
      // .catch((err)=>{
      //     console.log(err)
      //     navigate('/register')
      // })
  }
  return (
    <div className=" p-5">
        <div className="col-md-6 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
            <h3>Add Certification</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Exam Code</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Exam Code" onChange={handleInputChange} value={state.examCode} name='examCode'/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Certification Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Certification Name" onChange={handleInputChange}  name='certificationName' value={state.certificationName}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Format</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Format" onChange={handleInputChange} value={state.format} name='format'/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Duration</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Duration" onChange={handleInputChange} value={state.duration} name='duration'/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">No Of Questions</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="No Of Questions" onChange={handleInputChange} value={state.noOfQuestions} name='noOfQuestions'/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Passing Score</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Passing Score" onChange={handleInputChange} value={state.passingScore} name='passingScore'/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Fee</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Fee" onChange={handleInputChange} value={state.fee} name='fee'/>
                </div>

                <button type='submit' className='btn btn-danger'>Add Certification</button>
            </form>
            
        </div>
    </div>

)
}

export default AddCertification