// import { Sign } from 'crypto'
import React, { useEffect } from 'react'
import SignIn from './SignIn'
import {IoClose} from "react-icons/io5"
import SignUp from './SignUp'
import {useRecoilValue, useSetRecoilState} from "recoil"
import { AuthModelState } from '@/Atoms/AuthModelAtoms'
import ForgetPassword from './ForgetPassword'

function AuthModel() {
     const authModel=useRecoilValue(AuthModelState)
   
   const handleCloseClick=useCloseStatePath();

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
                     onClick={handleCloseClick} 
                   >
                        <IoClose />
                    </button>
                </div>
               
                {authModel.type ==="SignIn" ? <SignIn/>: authModel.type === "SignUp"? <SignUp/>: <ForgetPassword/>}
            </div>
        </div>
    </div>


   
    </>
  )
}

export default AuthModel


// function call -> use effect called in these region //



function useCloseStatePath()
{
   const setAuthModelState=useSetRecoilState(AuthModelState);
   const closeModelFunction=()=>{
    setAuthModelState((prev)=>({...prev,isOpen:false,type:"SignIn"}))
   }
   useEffect(() => {
      const handleEsc = (e:keyboardEvent)=>{
        if(e.key==="Escape") closeModelFunction();  
    }
        window.addEventListener("keydown",handleEsc) ;
        return ()=>
            window.removeEventListener("keydown",handleEsc)
   }, [])
   return closeModelFunction;
}
