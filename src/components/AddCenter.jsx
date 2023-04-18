import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCenter = () => {
  const navigate =   useNavigate()
  const [state, setState] = useState({
      centerCode:'',
      centerName:'',
      address:'',
      phone:'',
      website:''
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
            <h3>Add Center</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Center Code</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Center Code" onChange={handleInputChange} value={state.centerCode} name='centerCode'/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Center Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Center Name" onChange={handleInputChange}  name='centerName' value={state.centerName}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Address</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" onChange={handleInputChange} value={state.address} name='address'/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Phone</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone" onChange={handleInputChange} value={state.phone} name='phone'/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Website</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Website" onChange={handleInputChange} value={state.website} name='website'/>
                </div>

                <button type='submit' className='btn btn-danger'>Add Center</button>
            </form>
            
        </div>
    </div>

)
}

export default AddCenter