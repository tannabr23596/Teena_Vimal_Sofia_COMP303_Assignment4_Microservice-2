import React from 'react'

const TestDetails = () => {
    return (
        <div className=" p-5">
            <div className="col-md-6 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">

                <div class="">
                    <h3 for="exampleFormControlInput1" className='text-primary'>Candidate Name</h3>
                    <h6>Candidate Name</h6>
                </div>

                <div class="">
                <h3 for="exampleFormControlInput1" className='text-primary'>Exam Code</h3>
                    <h6>Exam Code</h6>
                </div>

                <div>
                <h3 for="exampleFormControlInput1" className='text-primary'>Test Centre</h3>
                <h6>Test Centre</h6>
                </div>

                <div>
                <h3 for="exampleFormControlInput1" className='text-primary'>Test Score</h3>
                <h6>Test Score</h6>
                </div>

                <div>
                <h3 for="exampleFormControlInput1" className='text-primary'>Result</h3>
                <h6>Result</h6>
                </div>
            </div>
        </div>

    )
}

export default TestDetails