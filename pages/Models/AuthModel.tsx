// import { Sign } from 'crypto'
import React from 'react'
import SignIn from './SignIn'
import {IoClose} from "react-icons/io5"
import SignUp from './SignUp'

function AuthModel() {
  return (
      <>
    
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60'></div>
    <div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
        <div className='relative w-full h-full mx-auto flex items-center justify-center'>
            <div className='bg-orange-300 rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6'>
                <div className='flex justify-end p-2'>
                    <button
                        type='button'
                        className='bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white text-white'
                    >
                        <IoClose />
                    </button>
                </div>
               
                <SignIn />
            </div>
        </div>
    </div>


   
    </>
  )
}

export default AuthModel
