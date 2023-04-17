import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import View from './components/View'
import BookTest from './components/BookTest'
import History from './components/History';
import TestDetails from './components/TestDetails';
import Reschedule from './components/Reschedule';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-text text-white">
            Java Assignment 4
          </span>
        </nav>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/book' element={<BookTest />} />
          <Route path='/view' element={<View />} />
          <Route path='/history' element={<History/>}/>
          <Route path='/testdetails' element={<TestDetails/>}/>
          <Route path='/reschedule' element={<Reschedule/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
