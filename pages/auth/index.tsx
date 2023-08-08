import Navbar from "../components/Navbar";
import { IoClose } from "react-icons/io5"


import AuthModel from "../Models/AuthModel";
import SignIn from "../Models/SignIn";
import {useRecoilValue} from "recoil";
import { AuthModelState } from "@/Atoms/AuthModelAtoms";


export default function authPath() {
    const authModel=useRecoilValue(AuthModelState)
    return (

  

            <div className="bg-gray-200 h-screen relative">

                <Navbar />
                <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none ">
                    <img src="\hero.png" alt="main" />
                </div>
                {
                    authModel .isOpen && <AuthModel/>
                }
               
            </div>
    

    )
}