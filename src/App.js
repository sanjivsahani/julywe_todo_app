import logo from './logo.svg';
import './App.css';
import Navbar from './compoent/Header/Navbar';
import SignUp from './compoent/Body/SignUp';
import Login from './compoent/Body/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './compoent/Body/Home';
import Addtodo from './compoent/TodoApp/Addtodo';

function App() {
  const [refreshtoken, setrefreshToken] = useState(false)

  return (
    <>
      <BrowserRouter>
        {refreshtoken? <Navbar setrefreshToken = {setrefreshToken} /> : ""}
        <Routes>
          <Route path="/" element={<Login setrefreshToken ={setrefreshToken} />} />
          <Route path="/signup" element={<SignUp setrefreshToken ={setrefreshToken}/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
