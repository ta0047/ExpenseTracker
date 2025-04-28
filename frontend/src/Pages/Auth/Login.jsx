import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../Components/Layouts/AuthLayout';

const Login = () => {
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border p-2 w-full"
          />
          {errors.email && <span className="">{errors.email.message}</span>}
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

        <input type="submit" value="Login" className="bg-blue-500 text-white py-2 px-4 rounded" />
      </form>
    </AuthLayout>
  );
};

export default Login;
