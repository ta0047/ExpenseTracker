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
                
            <label htmlFor="" className='text-lg'>{label}</label>
            <input
                className='input input-box w-full'
                type={type == 'password' ? setShowPassword ? 'text' : 'password' : type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
            />
            </div>
            
            {
                type === 'password' && (
                    <>
                        {
                            ShowPassword ?
                                (<IoEye size={20} className='cursor-pointer text-primary'
                                    onClick={() => ToggleShowPassword()}
                                />)
                                :
                                (<IoEyeOff size={20} className='cursor-pointer text-primary'
                                    onClick={() => ToggleShowPassword()}
                                />)
                        }
                    </>
                )
            }

        </div>
    )
}

export default Inputs