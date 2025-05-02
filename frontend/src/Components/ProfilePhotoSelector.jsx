import React, { useRef, useState } from 'react'
const ProfilePhotoSelector = ({image,setImage}) => {
    const inputRef = useRef(null)
    const [previewUrl, setpreviewUrl] = useState(null)

    const handleImageChange=(event)=>{
        const file=event.target.file(0);
        if(file){setImage(file)}
        const preview=URL.createObjectURL(file);
        setpreviewUrl(preview)
    }
    const handleRemoveImage=()=>{
        setImage(null)
        setpreviewUrl(null)
    }
    const onChooseFile=()=> {
        inputRef.current.click()
        
    }
  return (
    <>
    <div>{image}</div>
    <div>{setImage}</div>
    </>
  )
}

export default ProfilePhotoSelector