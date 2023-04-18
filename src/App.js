import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import View from './components/View'
import BookTest from './components/BookTest'
import History from './components/History';
import TestDetails from './components/TestDetails';
import Reschedule from './components/Reschedule';
import AdminView from './components/AdminView';
import AddCertification from './components/AddCertification';
import EditCertification from './components/EditCertification'
import AddCenter from './components/AddCenter'
import ListAllCenter from './components/ListAllCenter'
import EditCenter from './components/EditCenter';
import EditCertificationResponse from './components/EditCertificationResponse';
import PrivateRoutes from './components/PrivateRoutes';
import PrivateRoutesUser from './components/PrivateRoutesUser';

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

          <Route element={<PrivateRoutesUser />}>
            <Route path='/book' element={<BookTest />} />
            <Route path='/view' element={<View />} />
            <Route path='/history' element={<History />} />
            <Route path='/testdetails' element={<TestDetails />} />
            <Route path='/reschedule' element={<Reschedule />} />
          </Route>


          <Route element={<PrivateRoutes />}>
            <Route path='/adminView' element={<AdminView />} />
            <Route path='/adminView' element={<AdminView />} />
            <Route path='/addcertification' element={<AddCertification />} />
            <Route path='/editcertification' element={<EditCertification />} />
            <Route path='/addcenter' element={<AddCenter />} />
            <Route path='/listall' element={<ListAllCenter />} />
            <Route path='/editcenter/:centerId' element={<EditCenter />} />
            <Route path='/editcertificate/:certificateId' element={<EditCertificationResponse />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
