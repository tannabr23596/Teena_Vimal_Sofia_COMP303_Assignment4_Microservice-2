import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [state, setState] = useState({
        candidateId:'',
        firstName:'',
        lastName:'',
        address:'',
        city:'',
        phone:'',
        email:'',
        userType:'',
        password:''
    })

    const handleInputChange=(e)=>{
       
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8087/candidate',state)
        .then((response)=>{
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className=" p-5">
            <div className="col-md-6 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
                <h3>Register Here</h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Candidate Id</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="User Id" onChange={handleInputChange} value={state.candidateId} name='candidateId'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">First Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First name" onChange={handleInputChange}  name='firstName'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Last Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" onChange={handleInputChange} value={state.lastName} name='lastName'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Address</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" onChange={handleInputChange} value={state.address} name='address'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">city</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="City" onChange={handleInputChange} value={state.city} name='city'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Phone</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone" onChange={handleInputChange} value={state.phone} name='phone'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" onChange={handleInputChange} value={state.email} name='email'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Password</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Password" onChange={handleInputChange} value={state.password} name='password'/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">User Type</label>
                        <select className="form-control" id="exampleFormControlSelect1" onChange={handleInputChange} value={state.userType} name='userType'>
                            <option>Select One</option>
                            <option>Candidate</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <button type='submit' className='btn btn-danger'>Register</button>
                </form>
                <a href='/login'>Already a member.?</a>
            </div>
        </div>

    )
}

export default Register