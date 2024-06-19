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
import AllProduct from './AllProduct/AllProduct';
import Todo from './Todo/Todo';
import Registerr from "./Register/Registerr";
import SignIn from "./SignIn/Signin";
import Wheather from "./Wheather/Wheather";
import Temperature from "./Temparature/Temprature";
import Reducer from './Reducer/Reducer';

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
        <Route path="/AllProduct" element={< AllProduct />} />
        <Route path="/todo" element={< Todo/>} />
        <Route path="/user-register" element={< Registerr />} />
        <Route path="/signin" element={< SignIn />} />
        <Route path="/wheather" element={< Wheather />} />
        <Route path="/temp" element={< Temperature />} />
        <Route path="/reducer" element={< Reducer />} />
        

      </Routes>
    </div>
  );
}

export default App;


