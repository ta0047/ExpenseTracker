import React, { useState } from 'react'
import { IoEye, IoEyeOff } from "react-icons/io5";
const Inputs = ({ value, onChange, placeholder, label, type }) => {
    const [ShowPassword, setShowPassword] = useState(false)
    const ToggleShowPassword = () => {
        setShowPassword(!ShowPassword);
    }
    return (
        <div>
            <div className="w-full m-auto">
            <label htmlFor="" className='text-lg text-slate-600'>{label}</label>
            <input
                className='input input-primary w-full'
                type={type === 'password' ? (ShowPassword ? 'text' : 'password') : type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
            />
            </div>
            
            {/* {
                type === 'password' && (
                    <>
                        {
                            ShowPassword ?
                                (<IoEye size={20} className='cursor-pointer text-primary absolute top-[372px] left-[584px] z-10'
                                    onClick={() => ToggleShowPassword()}
                                />)
                                :
                                (
                                <IoEyeOff size={20} className='cursor-pointer text-primary absolute top-[372px] left-[584px] z-10'
                                    onClick={() => ToggleShowPassword()}
                                />
                            )
                        }
                    </>
                )
            } */}

        </div>
    )
}

export default Inputs