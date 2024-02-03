"use client"

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

 export default function LogOutBtn(){
   const router=useRouter();
    return(
        <button onClick={() => {signOut();router.push("/")}}className=" bg-white hover:bg-gray-400 text-gray-400  rounded  flex flex-col items-center">
        	<svg className=" w-8 mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M22.969 24.969L45.969 24.969M38.969 17.969L45.969 24.969 38.969 31.969"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M40.663,10.969c-3.844-4.292-9.418-7-15.632-7c-11.598,0-21,9.402-21,21s9.402,21,21,21c6.215,0,11.789-2.708,15.632-7"/></svg>
         <span className="text-xs mb-2 transition-all duration-200">
									Log Out
								</span>
  </button>
    );
 }
