"use client"

import Link from 'next/link';
import { useSession } from "next-auth/react"

 export default function AccountBtn(){
   const { data: session } = useSession();
   //console.log(session);
    return(
        <button className=" bg-white hover:bg-gray-400 text-gray-400  rounded  flex flex-col items-center">
         <Link href={`/account/${session?.user?.id}`} className="text-xs mb-2 transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M9.054,12.413c0.164,1.283,0.72,1.608,1.074,1.635C10.263,15.245,11.55,16.777,12,17v2c-0.083,0.251-0.231,0.456-0.403,0.645C12.435,20.368,13.574,21,15,21c1.426,0,2.565-0.632,3.403-1.355C18.231,19.456,18.083,19.251,18,19v-2c0.45-0.223,1.737-1.755,1.872-2.952c0.354-0.027,0.91-0.352,1.074-1.635c0.088-0.689-0.262-1.076-0.474-1.198c0,0,0.528-1.003,0.528-2.214c0-2.428-0.953-4.5-3-4.5c0,0-0.711-1.5-3-1.5c-4.242,0-6,2.721-6,6c0,1.104,0.528,2.214,0.528,2.214C9.316,11.336,8.966,11.724,9.054,12.413z"/><path d="M20.239,20.674C19.099,21.829,17.364,23,15,23s-4.099-1.171-5.239-2.326C7.064,21.59,3,22.006,3,27h24C27,22.006,22.936,21.59,20.239,20.674z"/></svg>
									Account
								</Link>
  </button>
    );
 }