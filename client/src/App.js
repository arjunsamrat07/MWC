import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Vehicle from './components/Vehicle/Vehicle';
import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar';
import Videos from './components/Videos/Videos';
import Map from './components/Map/Map';
import Report from './components/Report/Report';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vehicle' element={<Vehicle />} />
        <Route path='/alert' element={<Alert />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/map' element={<Map />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
