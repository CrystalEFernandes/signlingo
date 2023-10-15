import React from "react"
import 'bootstrap/dist/css/bootstrap.css';

import Home from "../src/components/homePages/Home.js"
import {Routes,Route} from "react-router-dom"
import Navbar from "../src/components/Navbar.js";
import Login from "./components/userAuth/login.js";
import Signup from "./components/userAuth/signup.js";
import HealthTutorials from "./components/consultationPages/healthTutorials.js";
import Profile from "./components/profilePages/Profile.js";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/tutorials" element={<HealthTutorials/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
