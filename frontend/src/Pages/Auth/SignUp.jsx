import React, { useState, useEffect, useRef } from 'react';
import AuthLayout from '../../Components/Layouts/AuthLayout';
import { FaUserCircle } from "react-icons/fa";
import { MdDelete, MdOutlineFileUpload } from "react-icons/md";


import ProfilePhotoSelector from '../../Components/ProfilePhotoSelector.jsx'
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageUrl, setimageUrl] = useState(null)
  const [image, setImage] = useState(null)

  // const inputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) { setImage(file) }
    const preview = URL.createObjectURL(file)
    setimageUrl(preview);
  }
  const onChooseFile = () => {
    document.getElementById("imageUpload").click();  }

  const handleRemoveImage = () => {
    setimageUrl(null)
    document.getElementById("imageUpload").value = "";  }

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    console.log('Selected Image File:', data.image[0]);
  };
  useEffect(() => {
    setimageUrl(null)
  }, [])


  return (
    <AuthLayout>
      <div className="w-80 md:w-[500px] mt-56 m-auto p-4 shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h1 className='text-3xl text-slate-600 text-center'>SIGNUP</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="w-32 h-32 m-auto rounded-full md:col-span-2 bg-red-400 relative">
              {
                imageUrl ? (<img src={imageUrl} alt="" className='w-full h-full object-cover rounded-full' />) : (<FaUserCircle className="w-full h-full text-gray-400" />)
              }
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                {...register("image", { required: "Image is required" })}
                onChange={(e) => {
                  handleImageChange(e);
                }}
              />
              {/* <ProfilePhotoSelector 
              image={profilePic} 
              setImage={setprofilePic}
              /> */}
              <button type='button'
                className="btn btn-xs bg-indigo-500 rounded-full text-slate-100 absolute bottom-0 right-0"
                onClick={imageUrl ? handleRemoveImage : onChooseFile}
              >
                {imageUrl ? <MdDelete size={20} /> : <MdOutlineFileUpload size={20} />}
              </button>
            </div>
            <div className="">
              <label htmlFor="firstname" className="block mb-1">Enter First Name</label>
              <input
                id="firstname"
                type="text"
                placeholder="ubaid"
                {...register("firstname", { required: "This field is required" })}
                className="input input-primary w-full"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>

            <div className="">
              <label htmlFor="lastname" className="block mb-1">Enter Last Name</label>
              <input
                id="lastname"
                type="text"
                placeholder="khan"
                {...register("lastname", { required: "This field is required" })}
                className="input input-primary w-full"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            <div className="">
              <label htmlFor="email" className="block mb-1">Enter Email</label>
              <input
                className='input input-primary w-full'
                type="email"
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                })}
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}
            </div>
            <div className="">
              <label htmlFor="password" className="block mb-1">Enter Password</label>
              <input
                className='input input-primary w-full'
                type="password"
                placeholder='at least 8'
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
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
