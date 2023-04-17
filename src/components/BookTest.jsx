import React ,{ useState, useEffect } from 'react'
import TimePicker from 'react-bootstrap-time-picker';
import axios from 'axios';
const BookTest = () => {

  const apiUrl = "http://localhost:8087/certification";
  const centersUrl = "http://localhost:8087/centre"
  const [data, setData] = useState([]);
  const [center, setCenters] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [selectedCenter, setSelectedCenter] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      axios.get(apiUrl)
        .then(result => {
          console.log('result.data:',result.data)
         
            
            console.log('data in if:', result.data )
            setData(result.data);
            setShowLoading(false);
         
        }).catch((error) => {
          console.log('error in fetchData:', error)

        });
      };  
    fetchData();
}, []);

useEffect(() => {
  const fetchCenters = async () => {
    axios
      .get(centersUrl)
      .then((result) => {
        console.log('result.data:', result.data);
        setCenters(result.data);
      })
      .catch((error) => {
        console.log('error in fetchCenters:', error);
      });
  };
  fetchCenters();
}, []);
  const [time, setTime] = useState(0);

  const handleTimeChange = (value) => {
      setTime(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault()

  const selectedCenterData = center.find(
    (center) => center.centerCode === selectedCenter
  );

  // Update the address field with the selected test center's address
  const addressField = document.getElementById('exampleFormControlInputCentreaName');
  addressField.value = selectedCenterData.address;
  }
  return (
    <div className=" p-5">
      <div className="col-md-6 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
        <h3>Book Your Test</h3>
        <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
            <label htmlFor='testCenterName'>Test Centre Name</label>
            <select className='form-control' id='testCenterName'  value={selectedCenter}
  onChange={(e) => setSelectedCenter(e.target.value)}>
              <option>Select</option>
              {center.map((center) => (
                <option key={center.centerCode} value={center.centerCode} >
                  {center.centerName}
                </option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Address</label>
            <input type="text" class="form-control" id="exampleFormControlInputCentreaName" placeholder="Address" />
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
              <option>Select certification</option>
              {data.map((cert, index) => (
                <option key={index}>{cert.certificationName}</option>
              ))}
            </select>
          </div>

          <button type='submit' className='btn btn-danger'>Book Now</button>
        </form>
      </div>
    </div>

  )
}

export default BookTest