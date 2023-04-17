import React from 'react'

const Login = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="p-5">
            <div className="col-md-6  my-auto mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
                <h3>Login Here</h3>
                <form onSubmit={handleFormSubmit}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Password</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Password" />
                    </div>

                    <button type='submit' className='btn btn-danger'>Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login