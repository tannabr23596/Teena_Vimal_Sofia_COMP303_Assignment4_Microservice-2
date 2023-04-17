import React from 'react'

const History = () => {
    return (
        <div className=" p-5">
            <div className="col-md-6 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
                <h3>Test History</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">sl.no</th>
                            <th scope="col">Test Data</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><a href='#' className='text-dark'>Mark</a></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Completed</td>
                            <td>Pending</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History