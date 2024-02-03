'use client'
 
// pages/add-user.js

import { useState,useEffect } from 'react';
import { useRouter,redirect } from 'next/navigation'
import AdmRemoveBtn from './admRemoveBtn';

const  EditAdminForm = ({datasc}) =>  {
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(false);
    const ids=datasc._id
   // console.log(datasc);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    
    const [formData, setFormData] = useState({
      name:"",
      email: "",
      password:"",
      role: "",
      statu: "",
    });
  
    useEffect(() => {
      // Set the form data based on the initial object when the component mounts
      setFormData(datasc);
    }, []); 
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const router = useRouter();
    const handleSubmit = async (e) => {
      const formDataObject = {
        newName: formData.name,
        newRole:formData.role,
        newEmail:formData.email,
        newStatu:formData.statu,
  
    };
      e.preventDefault();
     
      console.log("click");
          try {
            setLoading(true);
            const response = await fetch(`http://localhost:3000/api/admin/${ids}`, {
              method: "PUT",
              headers: {
                'Content-Type': 'application/json',
              },
        
              body: JSON.stringify(formDataObject),
            });
  
     
  
        if (response.ok) {
          // Reload the destination page to update data
            //router.refresh();
            setLoading(false);
            setIsVisible(!isVisible);
  
            }
  
            // Handle success, e.g., show a success message or redirect
            
        } catch (error) {
            console.error('Error adding user:', error);
          }finally{
           // setLoading(false);
            console.log("update finally???");     
          }
      
    };
    
    return (
        
        <form onSubmit={handleSubmit} className="border-b">
        <div className=' hidden' >
            <div>
        <div className="w-2/5">
                  <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    Name
                  </p>
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input 
                      placeholder="client name"
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="off"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
                <div className="w-2/5">
                  <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    email
                  </p>
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input 
                      placeholder="client name"
                      type="text"
                      id="email"
                      name="email"
                      autoComplete="off"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
                <div className="w-2/5">
                  <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    password
                  </p>
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input 
                      placeholder="client name"
                      type="text"
                      id="password"
                      name="password"
                      autoComplete="off"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
                </div>
                </div>
        <div  >
            <a className="px-4 py-2 hover:bg-gray-100 flex">
                <div className="text-gray-800">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
               
                <div className="pl-3 flex flex-col">
                <label htmlFor="role" className="text-sm font-medium text-gray-800 leading-none">Role</label>

                <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="h-full text-sm  rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                    <option>{formData.role}</option>
                    <option>admin</option>
                    <option>editer</option>
                </select>
                </div>
            </a>
            <a className="px-4 py-2 hover:bg-gray-100 flex">
                <div className="text-green-600">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                >
                    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                </div>
                <div className="pl-3 flex flex-col">
                <label className="text-sm font-medium text-gray-800 leading-none">
                    Status
                </label>
                <select
                    id="statu"
                    name="statu"
                    value={formData.statu}
                    onChange={handleChange}
                    className="h-full text-sm  rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                    <option value={formData.statu}>{formData.statu}</option>
                    <option value="online">online</option>
                    <option value="pandin">pading</option>
                    <option value="block">block</option>
                </select>
                </div>
            </a>
        </div>
           
        
        
    

    <div className="flex">
        < div className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p className="text-sm font-medium text-gray-800 leading-none">
         
                   <AdmRemoveBtn id={datasc._id}/>
                    </p>
        </div>
        <button type="submit" disabled={loading} className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
        {loading?'saving...':   <p className="text-sm font-medium text-gray-800 leading-none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <circle cx="24" cy="14" r="8.5" fill="none" stroke="#F8F012" strokeWidth="3" />
  <path d="M35,24c-6.075,0-11,4.925-11,11s4.925,11,11,11s11-4.925,11-11S41.075,24,35,24z M41.707,31.707l-8,8C33.512,39.902,33.256,40,33,40s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L33,37.586l7.293-7.293c0.391-0.391,1.023-0.391,1.414,0S42.098,31.316,41.707,31.707z" fill="#F8F012" />
  <path d="M23.469,40.989c-5.675-0.117-8.968-2.067-10.737-3.715C11.631,36.249,11,34.787,11,33.262V32.5c0-0.827,0.673-1.5,1.5-1.5h10.134c0.345-1.068,0.829-2.073,1.424-3H12.5C10.019,28,8,30.019,8,32.5v0.762c0,2.354,0.979,4.617,2.687,6.207C12.906,41.536,17.017,44,24,44c0.549,0,1.074-0.02,1.588-0.049C24.751,43.07,24.035,42.076,23.469,40.989z" fill="#F8F012" />
</svg>save
</p>}
        </button>
    </div>
    </form>
    );};
    

export default EditAdminForm;