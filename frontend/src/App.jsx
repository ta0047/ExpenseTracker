import React from 'react'
import Login from './Pages/Auth/Login';
import SignUp from './Pages/Auth/SignUp';
import Home from './Pages/Dashboard/Home';
import Income from './Pages/Dashboard/Income'
import Expense from './Pages/Dashboard/Expense'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Root}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={SignUp}/>
        <Route path="/dashboard" Component={Home}/>
        <Route path="/income" Component={Income}/>
        <Route path="/expense" Component={Expense}/>
        
      </Routes>
    </BrowserRouter>
  )
}
export default App
const Root = () => {
  const isAuthenticated=!!localStorage.getItem("tokken")
  return isAuthenticated ? (<Navigate to="/dashboard"/>) : (<Navigate to='/login'/>)
}
