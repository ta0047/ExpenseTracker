import React, { useRef, useState, useEffect } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdDelete, MdOutlineFileUpload } from "react-icons/md";

const ProfilePhotoSelector = ({ image, setImage }) => {
  useEffect(() => {setpreviewUrl(null);}, []);

  const inputRef = useRef(null)
  
  const [previewUrl, setpreviewUrl] = useState(null)

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) { setImage(file) }
    const preview = URL.createObjectURL(file);
    setpreviewUrl(preview)
  }
  const handleRemoveImage = () => {
    setImage(null)
    setpreviewUrl(null)
    if (inputRef.current) inputRef.current.value = "";
  }
  const onChooseFile = () => {
    inputRef.current.click()
  }
  return (
    <>
      <input
        type="file"
        accept='image/*'
        ref={inputRef}
        onChange={handleImageChange}
        className='hidden'
      />
      <div className="relative w-32 h-32">
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Profile Pic"
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <FaUserCircle className="w-full h-full text-gray-400" />
        )}
        <button
          className="btn btn-xs bg-indigo-500 rounded-full text-slate-100 absolute bottom-0 right-0"
          onClick={previewUrl ? handleRemoveImage : onChooseFile}
        >
          {previewUrl ? <MdDelete size={20} /> : <MdOutlineFileUpload size={20} />}
        </button>
      </div>
    </>
  )
}

export default ProfilePhotoSelector