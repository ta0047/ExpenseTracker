import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../Components/Layouts/AuthLayout';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    // Here you can call your API for authentication
    // Example:
    // const result = await loginUser(data.email, data.password);
    // if (result.success) navigate('/dashboard');
    // else setError("Invalid credentials");
  };
  return (
    <AuthLayout>
      <div className="w-80 mt-56 m-auto p-4 shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h1 className='text-3xl text-slate-600 text-center'>LOGIN</h1>
          <div>
            <label htmlFor="email" className="block mb-1">Enter Email</label>
            <input
              id="email"
              type="email"
              placeholder="abc@gmail.com"
              {...register("email", { required: "Email is required" })}
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="input input-primary w-full"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Enter Password</label>
            <input
              id="password"
              type="password"
              placeholder="strong password"
              {...register("password", { required: "Password is required" })}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="input input-primary w-full"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>
          <button type='submit' className='btn btn-primary'>LOGIN</button>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Login;
