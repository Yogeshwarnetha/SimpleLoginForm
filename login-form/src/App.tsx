import React from "react";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Login from "./Components/login";
import SignUp from "./Components/signup";

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
 
)
export default App;