"use client"
import { useSession } from "next-auth/react"

export default function SessionBtn(){
    const { data: session, status } = useSession()
    return(
<div className="relative w-20 h-10 flex flex-col rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">

        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M30.933,32.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.384,2.038-2.826,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818c0.22,2.062,1.58,4.504,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21C19.367,37.239,7.546,35.916,7,45h38C44.455,35.916,32.685,37.239,30.933,32.528z" fill="#FFFFFF" />
        <button className="sr-only bg-white " type="button"  id="user-menu-button" aria-expanded="false" aria-haspopup="true">
         
       {session?.user?.name}
        </button>
</svg> 
<div>
    <div className="absolute hidden top-0 w-60 bg-gray-900 text-gray-300 p-6">
      <div className="flex space-x-6 mb-6">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </span>
        <h1>Dashboard</h1>
      </div>
      <ul className=" flex flex-col space-y-6 mt-14 border-t py-6">
        <li className="hover:bg-red-500 transition duration-500">Home</li>
        <li className="">Products</li>
        <li className="">About</li>
        <li className="">Contact</li>
        <li className="">Logout</li>
      </ul>
    </div>
  </div>
</div>
    );
 }