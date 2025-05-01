import React, { useState } from 'react';
import AuthLayout from '../../Components/Layouts/AuthLayout';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
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
            <div className="">
              <label>First Name</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="border p-2 w-full"
              />
              {errors.email && <span className="">{errors.email.message}</span>}
            </div>

            <div className="">
              <label>Last Name</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="border p-2 w-full"
              />
              {errors.email && <span className="">{errors.email.message}</span>}
            </div>

            <div className="">
              <label>Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="border p-2 w-full"
              />
              {errors.email && <span className="">{errors.email.message}</span>}
            </div>
            <div className="">
              <label>Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="border p-2 w-full"
              />
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>

            <div className="">
              <input type="submit" value="SIGNUP" className="bg-blue-500 text-white py-2 px-4 rounded" />
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
