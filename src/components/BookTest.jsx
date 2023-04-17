import React from 'react'
import TimePicker from 'react-bootstrap-time-picker';
import { useState } from 'react';

const BookTest = () => {
  const [time, setTime] = useState(0);

  const handleTimeChange = (value) => {
      setTime(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className=" p-5">
      <div className="col-md-6 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
        <h3>Book Your Test</h3>
        <form onSubmit={handleFormSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Test Centre Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Test Centre Name" />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Address</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address" />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Test Date</label>
            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Test Date" />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Time</label>
            <TimePicker
                        id="myTimePicker"
                        name="myTimePicker"
                        value={time}
                        onChange={handleTimeChange}
                    />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Certification</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Select</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button type='submit' className='btn btn-danger'>Book Now</button>
        </form>
      </div>
    </div>

  )
}

export default BookTest