import React ,{ useState, useEffect } from 'react'
import TimePicker from 'react-bootstrap-time-picker';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const BookTest = () => {
  const navigate =   useNavigate()

  const apiUrl = "http://localhost:8087/certification";
  const centersUrl = "http://localhost:8087/centre"
  const [data, setData] = useState([]);
  const [center, setCenters] = useState([]);
  const [state, setState] = useState({
    
        centreName:'',
        address:'',
        testdate:'',
        time:'',
        certificationName:'',
        candidateId:'',
    })

  const [showLoading, setShowLoading] = useState(true);
  const bookTestStyle = {
    padding: "1rem !important"
  };


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
  const handleInputChange=(e)=>{
       
    setState({
        ...state,
        [e.target.name]:e.target.value,
        candidateId:localStorage.getItem('candidateId')
    })
}
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
        axios.post('http://localhost:8087/test/booking',state)
        .then((response)=>{
            console.log(response.data)
            if(response.data === 'Successfull'){

              navigate('/login')
              alert('Test Date booked successfully')
            }
            else {
              navigate('/view')
              alert('Test Date is already booked')
            }
        })
        .catch((err)=>{
            console.log(err)
            navigate('/login')
        })
 
  }
  return (
    <div style={bookTestStyle}>
      <div className="col-md-6 mt-2 mx-auto bg bg-light p-5 border border-danger  border-width-5 text-dark">
        <h3>Book Your Test</h3>
        <form onSubmit={handleFormSubmit}>
        
        <div class="form-group">
            <label for="exampleFormControlInput1">Test Centre Name</label>
            <select class="form-control" id="exampleFormControlSelect1" name="centreName" onChange={handleInputChange} value={state.centreName}>
              <option>Select centre name</option>
              {center.map((centre, index) => (
                <option key={index}>{centre.centerName}</option>
              ))}
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Address</label>
            <input type="text" class="form-control" id="exampleFormControlInputCentreaName" placeholder="Address" name="address" onChange={handleInputChange} value={state.address} />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Test Date</label>
            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="Test Date" name="testdate" onChange={handleInputChange} value={state.testdate}/>
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Time</label>
            <input type="text"
                        id="myTimePicker"
                        name="time"
                        onChange={handleInputChange} value={state.time}
                    />
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Certification</label>
            <select class="form-control" id="exampleFormControlSelect1" name="certificationName" onChange={handleInputChange} value={state.certificationName}>
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