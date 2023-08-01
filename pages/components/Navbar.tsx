import Link from "next/link"


function Navbar() {
  
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-20">
        <Link rel="stylesheet" href="/" className="flex items-center justify-center h-20" >
            <img src="\logo.png" alt="thinkcode" className="h-full " />
        </Link>
        <button  className="flex items-center justify-center bg-orange-400 text-white px-2 py-1 rounded-md hover:bg-gray-300 hover:text-black hover:ease-out ">signIn</button>
        
       
    </div>
  )
}

export default Navbar
