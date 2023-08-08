import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { AuthModelState } from '@/Atoms/AuthModelAtoms';
import { Router, useRouter } from 'next/router';
import { Auth } from 'firebase/auth';
import {userCreateUserWithEmilAndPassword} from "react-firebase-hooks/auth";

function SignUp() {
  const router =useRouter();	

	const [user,setUser]=useState({email:"",password:"",confirmPassword:""});
   
	 // store the new user detial and then send it into firebase //
	 const [
		createNewUserWithEmilAndPassword,
		user,
		loading,
		error,
	 ]=userCreateUserWithEmilAndPassword(auth);


	const setAuthModelState=useSetRecoilState(AuthModelState);

	const handleClick=(type:"forgetPassword"|"SignUp"|"SignIn" )=>{
		 setAuthModelState((prev)=>({...prev,type}));
	}

	// set the users and only change the email not others //
	const handleChange=(e)=>{
		setUser((prev)=>({...prev,[e.target.email]:e.target.value})) ;
	} 
 
	// post the new user from client side to server side (firebase ) // POST method
	const handleSubmit= async(e)=>{
		e.preventDefault();
         console.log(user);

		 try {
			
			const newUser= await userCreateUserWithEmilAndPassword(inputs.email,inputs.password,input.confirmPassword) ;
		  if(newUser)
		  {
			router.push('/');
			alert("post done");
		  }else  
		  return ;
		} catch (error) {
			alert(error.message);
		 }
	}
  return (
    <div>
      <form className='space-y-6 px-6 pb-4'onSubmit={handleSubmit} >
			<h3 className='text-xl font-medium text-white'>Sign Up to LeetClone</h3>
            <p><span className='font-bold'>Explore </span> your ability and gain exeriance </p>
			<div  className='my-4'>
				<label htmlFor='email' className='text-sm font-medium block mb-2 ' onChange={handleChange}>
					Your Email
				</label>
				<input
					
					type='email'
					name='email'
					id='email'
					className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        '
					placeholder='name@company.com'
				/>
			</div>
			<div>
				<label htmlFor='password' className='text-sm font-medium block mb-2 ' onChange={handleChange}>
					 Password
				</label>
				<input
					
					type='password'
					name='password'
					id='password'
					className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        '
					placeholder='password'
				/>
			</div>
			<div>
				<label htmlFor='password' className='text-sm font-medium block mb-2 ' onChange={handleChange}>
					confirm password
				</label>
				<input
					
					type='password'
					name='password'
					id='password'
					className='
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        '
					placeholder='password'
				/>
			</div>

			<button
				type='submit'
				className='w-full text-white bg-orange-600 focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            '
			>
                submit
			
			</button>
			<div >
               <p className='text-center flex justify-center'>Already have one ?  <span className='font-bold text-green-700'>  <a href="#" onClick={()=>handleClick("SignIn")}  >  👆🏿Login</a>  </span> </p>
            </div>
		</form>
    </div>
  )
}

export default SignUp
