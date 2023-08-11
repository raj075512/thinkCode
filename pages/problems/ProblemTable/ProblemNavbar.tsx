import { AuthModelState } from "@/Atoms/AuthModelAtoms"
import { auth } from "@/pages/Firebase/Firebase"
import AuthModel from "@/pages/Models/AuthModel"
import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { useSetRecoilState } from "recoil"

function ProblemNavbar() {
   // set the auth model  state //
 

   // get the user from firebase current //
   const userCurr=useAuthState(auth);

   const setHandleAuthState=useSetRecoilState(AuthModelState)
   const handleSignIn=()=>{
       setHandleAuthState((prev)=>({...prev,isOpen:true,type:"SignIn"}))
   }

  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-20">
        <Link rel="stylesheet" href="/" className="flex items-center justify-center h-20" >
            <img src="\logo.png" alt="thinkcode" className="h-full " />
        </Link>
      
       <button  className="flex items-center justify-center bg-orange-400 text-white px-2 py-1 rounded-md hover:bg-gray-300 hover:text-black hover:ease-out " >
          <a href="/auth" onClick={handleSignIn}> signIn </a>
     </button>
          
       
    </div>
  )
}

export default ProblemNavbar
