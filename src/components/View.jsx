import React from 'react'

const View = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="p-5">
            <div className="col-md-6  my-auto mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
               
                {/* <div className="card" >
                    <img className="card-img-top" src="..." alt="Card image cap" />
                </div> */}

                <a className='nav-link active' href='/#'>
                    <div className="card text-dark" >
                        <div className="card-body">
                            <h3>Book Test</h3>
                        </div>
                    </div>
                </a>

                <a className='nav-link active' href='/#'>
                    <div className="card mt-3 text-dark" >
                        <div className="card-body">
                            <h3>History</h3>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default View