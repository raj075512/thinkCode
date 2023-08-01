import Navbar from "./components/Navbar";
import SignIn from "./Models/SignIn";

export default function Home() {
  return (
 <div className="bg-gray-200 h-screen relative">

   <Navbar/>
   <div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none ">
     <img src="\hero.png" alt="main" />
   </div>
      
 </div>
  )
}
