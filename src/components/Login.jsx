import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [state,setState]=useState({
        email:'',
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
        axios.post(`http://localhost:8087/candidate/authenticate/${state.email}/${state.password}`,{
        })
        .then((response)=>{
            console.log(JSON.stringify(response.data.candidateId))
            console.log(JSON.stringify(response.data.candidateId))
            localStorage.setItem('candidateId',JSON.stringify(response.data.candidateId))
            localStorage.setItem('userType',JSON.stringify(response.data.userType))
            if(localStorage.getItem("userType")==="Admin"){
                navigate("/adminView")
            }
            else{
                navigate("/view")
            }
        })
        .catch((err)=>{
            console.log(err)
            navigate('/register')
        })
    }
    return (
        <div className="p-5">
            <div className="col-md-6  my-auto mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
                <h3>Login Here</h3>
                <form onSubmit={handleFormSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" name='email' value={state.email} onChange={handleInputChange} />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Password</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Password" name='password' value={state.password} onChange={handleInputChange} />
                    </div>

                    <button type='submit' className='btn btn-danger'>Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login