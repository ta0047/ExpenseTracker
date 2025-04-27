import React, { useState } from 'react'
import AuthLayout from '../../Components/Layouts/AuthLayout'
import {useNavigate} from 'react-router-dom'
import coins from '../../assets/images/coins.jpg'
import Inputs from '../../Components/Inputs/Inputs'
const SignUp = () => {
  const [profilePic, setprofilePic] = useState(null)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate=useNavigate()
  const handleSignUp= async (e) => {}
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full md:mt-0 flex flex-col justify-center" style={{ backgroundImage: "url('../../assets/images/coins.jpg')" }}>
      <p className='text-xm text-slate-500 mt-5 mb-5'>Join us today by entering you details bellow
      <h3 className='text-3xl text-slate-700'>Create an Account</h3>
      </p>
        
       
       <form onSubmit={handleSignUp}>
       <div className="w-2/3 grid lg:grid-cols-2 gap-2">
        <Inputs
        type="text"
          label={"Enter Full Name"}
          placeholder={"Full Name Please"}
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
        />
        <Inputs
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="abc@gmail.com"         
          />
        <Inputs
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Enter Strong Password"
            placeholder="Password"         
          />
       </div>
          <button className='btn btn-primary mt-5'>SIGNUP</button>
       </form>


      </div>


    </AuthLayout>
  )
}

export default SignUp