import React, { useState } from 'react';
import AuthLayout from '../../Components/Layouts/AuthLayout';
import ProfilePhotoSelector from '../../Components/ProfilePhotoSelector.jsx'
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const SignUp = () => {
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [image, setImage] = useState("image")
  const [profilePic, setprofilePic] = useState("profile")
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <AuthLayout>
      <div className="w-80 md:w-[500px] mt-56 m-auto p-4 shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h1 className='text-3xl text-slate-600 text-center'>SIGNUP</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            <div className="bg-teal-200 w-32 m-auto h-32 rounded-full md:col-span-2 ">
              <ProfilePhotoSelector 
              image={profilePic} 
              setImage={setprofilePic}/>
            </div>
            <div className="">
              <label htmlFor="firstname" className="block mb-1">Enter First Name</label>
              <input
                id="email"
                type="text"
                placeholder="ubaid"
                {...register("firstname", { required: "This field is required" })}
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                className="input input-primary w-full"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>

            <div className="">
              <label htmlFor="email" className="block mb-1">Enter Last Name</label>
              <input
                id="lastname"
                type="text"
                placeholder="khan"
                {...register("lastname", { required: "This field is required" })}
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
                className="input input-primary w-full"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            <div className="">
              <label htmlFor="email" className="block mb-1">Enter Email</label>
              <input
                id="email"
                type="email"
                placeholder="a@gmail.com"
                {...register("email", { required: "This field is required" })}
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="input input-primary w-full"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            <div className="">
              <label htmlFor="password" className="block mb-1">Enter Password</label>
              <input
                id="password"
                type="password"
                placeholder="ubaid"
                {...register("password", { required: "This field is required" })}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="input input-primary w-full"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            <div className="">
              <button className='btn btn-primary' type='submit'>SIGNUP</button>
            </div>

            <div className="">
              <span className='ms-2'>Already Account?</span>
              <span><Link to='/login' className='link link-primary ms-2 text-lg'>Login</Link></span>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
