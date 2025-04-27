import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from '../../Components/Layouts/AuthLayout'
import { useNavigate } from 'react-router-dom'
import Inputs from '../../Components/Inputs/Inputs'
const Login = () => {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  const [error, seterror] = useState("")

  const Navigate = useNavigate();
  const HandleLogin = () => {

  }
  return (
    <AuthLayout>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={HandleLogin}
          className="flex flex-col gap-4 w-[50%] shadow-[0_0_10px_rgba(0,0,0,0.7)] p-5 rounded-xl"
        >
          <h1 className="text-2xl font-semibold text-center text-slate-600">LOGIN</h1>

          <Inputs
            type="email"
            value={email}
            onChange={({ target }) => setemail(target.value)}
            label="Email Address"
            placeholder="abc@gmail.com"
            
          />

          <Inputs
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Enter Password"
            placeholder="Strong password"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button className="bg-blue-600 text-white py-2">
            LOGIN
          </button>

          <p className="text-center text-sm text-gray-700">
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-violet-700 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>



    </AuthLayout>
  )
}

export default Login