'use client'
 
// pages/add-user.js

import { useState,useEffect } from 'react';
import { useRouter,redirect } from 'next/navigation'

 const  EditUserForm = ({ids,datasc,}) =>  {
  const [isVisible, setIsVisible] = useState(true);
  const api=process.env.API_URL
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  const [formData, setFormData] = useState({
    name:'',
    lastname:'',
    email: '',
    date: '',
    adress: '',
    telephone: '',
    detail: '',
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
      newLastname:formData.lastname,
      newEmail:formData.email,
      newDate:formData.date,
      newAdress:formData.adress,
      newTelephone:formData.telephone,
      newDetail:formData.detail

  };
    e.preventDefault();
   
    console.log("click");
        try {
          const response = await fetch(`${api}/api/users/${ids}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
            },
      
            body: JSON.stringify(formDataObject),
          });

   

      if (response.ok) {
        // Reload the destination page to update data
          router.refresh();
          setIsVisible(!isVisible);

          }

          // Handle success, e.g., show a success message or redirect
          
      } catch (error) {
          console.error('Error adding user:', error);
        }
    
  };
  
  return (
    <div className="mx-auto my-10 w-1/2">
    <button onClick={toggleVisibility}  className=''>
        {isVisible ? <a href="#" className="bg-yellow-300 flex text-xs items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M28.7,44H7.121c0.731-4.013,4.275-5.429,7.712-6.801c2.736-1.093,5.321-2.124,6.114-4.471L21,32.572V27.5l-0.4-0.3c-0.661-0.495-1.413-1.938-1.604-4.041l-0.052-0.907h-0.913c-0.204-0.036-0.831-0.482-1.025-1.964C17.001,20.219,17,20.07,17,20.006c0.004-0.756,0.567-1.182,0.572-1.186l0.614-0.429l-0.238-0.71c-0.675-2.012-0.95-3.357-0.948-4.645C17.005,8.08,20.071,5,25,5c1.977,0,3.114,0.839,3.488,1.558l0.244,0.469l0.526,0.063c3.065,0.362,3.727,3.082,3.742,5.299c0.015,2.155-0.641,4.292-0.956,5.319l-0.171,0.77l0.657,0.405c0.092,0.058,0.465,0.437,0.471,1.124c0,0.064-0.001,0.213-0.006,0.277c-0.14,1.61-0.82,1.961-0.994,1.967h-0.873l-0.118,0.865c-0.322,2.363-1.042,3.66-1.609,4.085L29,27.5v5.059l0.065,0.172c0.159,0.417,0.388,0.781,0.648,1.122c0.376-0.627,0.806-1.217,1.287-1.763v-3.64c1.107-1.121,1.635-3.003,1.884-4.386c0.908-0.378,1.911-1.394,2.103-3.613C34.996,20.34,35,20.1,35,19.992c-0.007-0.981-0.383-1.791-0.855-2.326c0.366-1.245,0.869-3.224,0.855-5.292c-0.027-4.009-1.848-6.603-5.018-7.197C29.02,3.822,27.167,3,25,3c-5.815,0-9.663,3.586-9.979,9.25C15.007,12.496,15,12.746,15,13c-0.002,1.647,0.405,3.299,0.855,4.717c-0.432,0.514-0.85,1.295-0.855,2.277c0,0.105,0.004,0.346,0.018,0.504c0.274,2.107,1.228,3.113,2.066,3.52c0.277,1.898,0.965,3.489,1.916,4.435v3.775c-0.578,1.386-2.59,2.188-4.909,3.114c-3.901,1.558-8.757,3.496-9.09,9.604L5,46h24.624C29.256,45.367,28.948,44.699,28.7,44z"/><path fill="none" stroke="#000" strokeWidth="2" d="M40 31A9 9 0 1 0 40 49A9 9 0 1 0 40 31Z"/><path fill="none" stroke="#000" strokeLinecap="round" strokeWidth="2" d="M36.5 36.5L43.5 43.5M43.5 36.5L36.5 43.5"/></svg>
          Edit Client
        </a>: <a className="bg-yellow-300 flex text-xs items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.707,18.293c0.391,0.391,0.391,1.023,0,1.414C19.512,19.902,19.256,20,19,20s-0.512-0.098-0.707-0.293L15,16.414l-3.293,3.293C11.512,19.902,11.256,20,11,20s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L13.586,15l-3.293-3.293c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L15,13.586l3.293-3.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L16.414,15L19.707,18.293z"/></svg>
        Cancel
        </a>
        }
      </button>

      <div className={` ${isVisible ? 'hidden' : ''}`}>
      <div className="flex w-full max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div
  id='entete'
    className=" grid px-4 py-8 m-0 overflow-hidden text-center text-white bg-gray-900 place-items-center rounded-xl bg-clip-border shadow-gray-900/20">

    
  </div>
  <div className="p-6">
    <div className="block overflow-visible">
      <nav>
        <ul role="tablist" className="relative z-0 flex flex-row p-1 rounded-lg bg-blue-gray-50 bg-opacity-60">
          <li role="tab"
            className="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
            data-value="card">
            <div className="z-20 text-inherit">date create</div>
            <div className="absolute inset-0 z-10 h-full bg-white rounded-md shadow" data-projection-id="4"></div>
          </li>
          <li role="tab"
            className="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
            data-value="paypal">
            <div className="z-20 text-inherit">{datasc.createdAt}</div>
          </li>
        </ul>
      </nav>
      <div className="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
        <div role="tabpanel"
          className=" w-2/4 p-0 font-sans text-base antialiased font-light leading-relaxed text-gray-700 h-max"
          data-value="card">
          <form className="flex flex-col gap-4 mt-12" onSubmit={handleSubmit}>
          <div className="w-full flex items-center justify-between gap-4 my-4">
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
                    LastName
                  </p>
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input placeholder="client last name"
                     type="text"
                     id="lastname"
                     name="lastname"
                     autoComplete="off"
                     value={formData.lastname}
                     onChange={handleChange}
                     required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 my-4">
              <div className="w-2/5">
                  <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  Email
                  </p>
                  <div className="relative h-10 w-full min-w-[200px] ">
                  <input type="email" placeholder="name@mail.com"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />                  <label
                      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
                <div className="w-2/5">
                  <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  date of birth
                  </p>
                  <div className="relative h-10 w-full min-w-[200px] ">
                  <input type="date" placeholder=""
                  id="date"
                  name="date"
                  autoComplete="off"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                       <label
                      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
              </div>

            <div className="my-3">
             
              <div className="flex items-center justify-between gap-4 my-4">
              <div className="w-2/5">
                  <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                   Adress
                  </p>
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input placeholder="district-avenue-street-number"
                      id="adress"
                      name="adress"
                      autoComplete="off"
                      value={formData.adress}
                      onChange={handleChange}
                      required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
                <div className="w-2/5">
                  <p className="block mb-2 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                  Telephone Number
                  </p>
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input placeholder="ex:+25769000000"
                    type='telephone'
                    id="telephone"
                      name="telephone"
                      autoComplete="off"
                      value={formData.telephone}
                      onChange={handleChange}
                      required
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                  </div>
                </div>
              </div>
              <p className="block mb-4 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 ">
                Client details
              </p>
              <div className="relative h-10 w-full min-w-[200px]">
                <input placeholder="info"
                id="detail"
                name="detail"
                autoComplete="off"
                value={formData.detail}
                onChange={handleChange}
                required
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                <label
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
              </div>
            </div>
            <button
            onClick={() => {console.log("push");redirect('/');}}
            id='entete'
              className="select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit">
              Update Client
            </button>
        
          </form>
          <div>
     

   
   
      </div>
    </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default EditUserForm;
