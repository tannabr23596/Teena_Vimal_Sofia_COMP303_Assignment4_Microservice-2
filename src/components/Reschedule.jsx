import React from 'react'
import TimePicker from 'react-bootstrap-time-picker';
import { useState } from 'react';

const Reschedule = () => {
    const [time, setTime] = useState(0);

    const handleTimeChange = (value) => {
        setTime(value);
    };
    return (
        <div className=" p-5">
            <div className="col-md-6 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">

                <div class="">
                    <h3 for="exampleFormControlInput1" className='text-primary'>Test Name</h3>
                    <h6>Test Name</h6>
                </div>

                <div class="F">
                    <h3 for="exampleFormControlInput1" className='text-primary'>Time</h3>
                    <TimePicker
                        id="myTimePicker"
                        name="myTimePicker"
                        value={time}
                        onChange={handleTimeChange}
                    />
                </div>

                <div>
                    <h3 for="exampleFormControlInput1" className='text-primary'>Date</h3>
                    <input type="date" class="form-control " placeholder="Date" />
                </div>

                <div>
                    <h3 for="exampleFormControlInput1" className='text-primary'>Location</h3>
                    <input type="text" class="form-control " placeholder="Location" />
                </div>


            </div>
        </div>

    )
}

export default Reschedule