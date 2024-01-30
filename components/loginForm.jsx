"use client"

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

 function LoginForm(){
  
  const [email , setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError]=useState("");
  const [loading, setLoading] = useState(false);
  
  const router=useRouter();

  const handleSubmit =async(e)=>{ 
    e.preventDefault();
console.log("email:",email);
console.log("pass:",password);
    try{
      setLoading(true);
     const res = await signIn("credentials",{
      email,
      password,
      redirect:false,
     });
     if(res.error){
      setLoading(false);
      console.log("error");
      setError("Invalid Password");
      return;
     }else{
     console.log("login");
      router.replace("dashboard");}
     
    }catch(error){
      console.log(error);
    }

  };

    return(
    <div className="grid place-items-center w-full">
      <div className=" bg-white flex items-center justify-center w-1/2 lg:p-12">
        <div className="flex items-center xl:p-10">
          <form onSubmit={(e) => handleSubmit(e)} className="border-t-4 border-black bg-black flex flex-col w-full h-full justify-center text-center rounded-lg shadow-lg">
           <div className="w-full p-4 flex flex-col justify-center">
            <h3 className="mb-4 text-4xl font-extrabold text-white">Login</h3>
            <p className="mb-4 text-white text-center">Enter your email and password</p>
           </div>
           <div  className=" w-full  bg-blue-gray-50 mb-4">
              <hr className="h-0 border-b border-solid border-grey-500 grow"/>
    
              <hr className="h-0 border-b border-solid border-grey-500 grow"/>
             
              <div className=" m-4 text-left">
              <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
              <input onChange={(e)=> setEmail(e.target.value)} 
              id="email" 
              name="email"
              type="email" 
              placeholder="mail@loopple.com"
               className=" mb-4 flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
              </div>
              <div className=" m-4 text-left">
                <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
                <input onChange={(e)=> setPassword(e.target.value)}  id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
              </div>
              <div className=" m-4 text-left">
                <button disabled={loading} type="submit" className="w-full h-12 px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-black">{loading?'connecting...': "Login"}</button>
                {error &&(
            <p className="text-sm m-4 leading-relaxed text-red-500">{error}</p>
            )}
              </div>
              <p className="text-sm m-4 leading-relaxed text-grey-900">Not registered yet? <Link href="/register" className="mb-4 font-bold text-grey-700">Create an Account</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}
export default LoginForm;