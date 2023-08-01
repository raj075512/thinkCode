import Navbar from "../components/Navbar";
import {IoClose} from "react-icons/io5"
// import SignIn from "./SignIn";
// import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import AuthModel from "../Models/AuthModel";
import SignIn from "../Models/SignIn";
export default function authPath()
{
    return(
     
        <>
        
        

        <div className="bg-gray-200 h-screen relative">

   <Navbar/>
   <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none ">
     <img src="\hero.png" alt="main" />
   </div>
      <AuthModel/>
 </div>
        </>
     
    )
}