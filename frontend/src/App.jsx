import React from 'react'
import Login from './Pages/Auth/Login';
import SingUp from './Pages/Auth/SignUp';
import Home from './Pages/Dashboard/Home';
import Income from './Pages/Dashboard/Income'
import Expense from './Pages/Dashboard/Expense'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App

const Root = () => {
  const isAuthenticated=!!localStorage.getItem("tokken")
  return isAuthenticated ? 
  (<Navigate to="/dashboard"/>)
  :
  (<Navigate to='/login'/>)
}
