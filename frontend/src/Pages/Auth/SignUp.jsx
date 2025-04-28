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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>First Name</label>
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
            className="border p-2 w-full"
          />
          {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName.message}</span>}
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
            className="border p-2 w-full"
          />
          {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border p-2 w-full"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="border p-2 w-full"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        <input type="submit" value="Sign Up" className="bg-green-500 text-white py-2 px-4 rounded" />
      </form>
    </AuthLayout>
  );
};

export default SignUp;
