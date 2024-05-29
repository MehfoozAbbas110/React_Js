import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Component/Home"
import Login from './Component/Login';
import Register from './Component/Register';
import Mens from './Component/Mens';
import UseState from './Usestate/useState';
import NotFound from './Usestate/notfound';
import UseEffect1 from './UseEffect/UseEffect1';
import UseEffect2 from './UseEffect/UseEffect2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/register" element={<Register />} />
        <Route path= "/mens" element={<Mens />} />
        <Route path="/use-State" element= {< UseState />}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/use-effect1" element={< UseEffect1 />} />
        <Route path="/use-effect2" element={< UseEffect2 />} />


      </Routes>
    </div>
  );
}

export default App;


