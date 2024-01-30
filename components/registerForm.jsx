"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter} from 'next/navigation'

 function RegisterForm(){
  const router = useRouter()
    const [name, setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [role,setRole]=useState("editer");
    const [statu,setStatu]=useState("panding");

//console.log(email);

     const handleSubmitLog= async(e)=>{
        e.preventDefault();
        if(!name || !email || !password || password.length <= 6){
            setError("minimum password 6 characters");
            return;
        }else{
            try {

            
                const resUserExists = await fetch('/api/userExists', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
            
                  body: JSON.stringify({
                    email
                  }),
                });

                const {emailR}=await resUserExists.json();
                //console.log(emailR);

                if(emailR){
                  setError("User already exists.");
                  return;
                }else{

                const response = await fetch('/api/registers', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
            
                  body: JSON.stringify({
                    name, email, password,role,statu
                  }),
                });
                if(response.ok){
                  const form=e.target;
                  form.reset();
                  router.push('/');
                }else{
                  console.log("User registration failed");
                }
              }

        }  catch (error) {
            console.error('Error adding user:', error);
          }
    }
} 

    return(
        <div className="grid place-items-center w-full">
            <div className=" bg-white flex items-center justify-center w-1/2 lg:p-12">
        <div className="flex items-center xl:p-10">
          <form onSubmit={handleSubmitLog} className="border-t-4 border-black bg-black flex flex-col w-full h-full justify-center text-center rounded-lg shadow-lg">
           <div className="w-full p-4 flex flex-col justify-center">
            <h3 className="mb-4 text-4xl font-extrabold text-white">Sign Up</h3>
            <p className="mb-4 text-white text-center">Enter your email and password</p>
            </div>
           <div  className=" w-full  bg-blue-gray-50 mb-4">
              <hr className="h-0 border-b border-solid border-grey-500 grow"/>
    
              <hr className="h-0 border-b border-solid border-grey-500 grow"/>
              <div className=" m-4 text-left">
            <label htmlFor="username" className="mb-2 text-sm text-start text-grey-900">User Name*</label>
            <input onChange={(e)=>setName(e.target.value)} 
                    id="username" 
                    type="text" 
                    required
                    placeholder="full name" 
                    className=" mb-4 flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
            </div>
             
            <div className=" m-4 text-left">
            <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
            <input onChange={(e)=>setEmail(e.target.value)}
             id="email"
              type="email" 
              required
              placeholder="mail@loopple.com"
              className=" mb-4 flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
            </div>
            <div className=" m-4 text-left">
            <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
            <input onChange={(e)=>setPassword(e.target.value)}
             id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"/>
           {password.length <= 6 &&(
            <p className="text-sm m-4 leading-relaxed text-black">Minimum 6 characters.</p>)}
            </div>
            <div className=" m-4 text-left">
            <button className="w-full h-12 px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-black">Sign In</button>
           {error &&(
            <p className="text-sm m-4 leading-relaxed text-red-500">{error}</p>
            )}
           </div>
            <p className="text-sm m-4 leading-relaxed text-grey-900">already have an account? <Link href="/" className="mb-4 font-bold text-grey-700">Login</Link></p>
            </div>
          </form>
        </div>
      </div>
        </div>
    );
}
export default RegisterForm;