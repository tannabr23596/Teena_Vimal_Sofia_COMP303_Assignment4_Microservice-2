import React from 'react'

const AdminView = () => {
    return (
        <div className="p-5">
            <div className="col-md-6  my-auto mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
                  

                <a className='nav-link active' href='/addcertification'>
                    <div className="card text-dark" >
                        <div className="card-body">
                            <h3>Add Certification</h3>
                        </div>
                    </div>
                </a>

                <a className='nav-link active' href='/editcertification'>
                    <div className="card mt-3 text-dark" >
                        <div className="card-body">
                            <h3>Edit Certification</h3>
                        </div>
                    </div>
                </a>

                <a className='nav-link active' href='/addcenter'>
                    <div className="card mt-3 text-dark" >
                        <div className="card-body">
                            <h3>Add Center</h3>
                        </div>
                    </div>
                </a>

                <a className='nav-link active' href='/listall'>
                    <div className="card mt-3 text-dark" >
                        <div className="card-body">
                            <h3>List All Centres</h3>
                        </div>
                    </div>
                </a>


            </div>
        </div>
    )
}

export default AdminView