import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import QuestionSetHeading from './QuestionSetHeading'

function index() {
  return (
   <>

    <div className="flex items-center justify-between bg-gray-200 sm:px-12 px-2 md:px-20">
        <Link rel="stylesheet" href="/" className="flex items-center justify-center h-20" >
            <img src="\logo.png" alt="thinkcode" className="h-full " />
        </Link>
    
       
    </div>
    
    
    <QuestionSetHeading/>

    </>
  
  )
}

export default index;
