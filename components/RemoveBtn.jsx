'use client'
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from 'react';
import { useRouter } from 'next/navigation'


export default function RemoveBtn({id}){
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const removeUser=async()=>{
    try{ 
      setLoading(true);
     const res= await fetch(`/api/users?id=${id}`,{
      method:"DELETE",
    });

    if(res.ok){
 // Trigger the onDelete callback
     router.push('/');
 // Reload the destination page to update data
 router.refresh();
    }
  }catch(error){
console.log("error deleting item",error);
    }finally{
      setLoading(false);
      console.log("deleted finally???");
      console.log(id.id);
    }
  }
 
// if(confirmed){
//   setTimeout(() => {
//     console.log("Suite d'opérations asynchrones");
//   }, 0);

 

  
    return (
      <button onClick={removeUser} disabled={loading}>
      {loading?'deliting...': <a className="bg-gray-100 flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M28.7,44H7.121c0.731-4.013,4.275-5.429,7.712-6.801c2.736-1.093,5.321-2.124,6.114-4.471L21,32.572V27.5l-0.4-0.3c-0.661-0.495-1.413-1.938-1.604-4.041l-0.052-0.907h-0.913c-0.204-0.036-0.831-0.482-1.025-1.964C17.001,20.219,17,20.07,17,20.006c0.004-0.756,0.567-1.182,0.572-1.186l0.614-0.429l-0.238-0.71c-0.675-2.012-0.95-3.357-0.948-4.645C17.005,8.08,20.071,5,25,5c1.977,0,3.114,0.839,3.488,1.558l0.244,0.469l0.526,0.063c3.065,0.362,3.727,3.082,3.742,5.299c0.015,2.155-0.641,4.292-0.956,5.319l-0.171,0.77l0.657,0.405c0.092,0.058,0.465,0.437,0.471,1.124c0,0.064-0.001,0.213-0.006,0.277c-0.14,1.61-0.82,1.961-0.994,1.967h-0.873l-0.118,0.865c-0.322,2.363-1.042,3.66-1.609,4.085L29,27.5v5.059l0.065,0.172c0.159,0.417,0.388,0.781,0.648,1.122c0.376-0.627,0.806-1.217,1.287-1.763v-3.64c1.107-1.121,1.635-3.003,1.884-4.386c0.908-0.378,1.911-1.394,2.103-3.613C34.996,20.34,35,20.1,35,19.992c-0.007-0.981-0.383-1.791-0.855-2.326c0.366-1.245,0.869-3.224,0.855-5.292c-0.027-4.009-1.848-6.603-5.018-7.197C29.02,3.822,27.167,3,25,3c-5.815,0-9.663,3.586-9.979,9.25C15.007,12.496,15,12.746,15,13c-0.002,1.647,0.405,3.299,0.855,4.717c-0.432,0.514-0.85,1.295-0.855,2.277c0,0.105,0.004,0.346,0.018,0.504c0.274,2.107,1.228,3.113,2.066,3.52c0.277,1.898,0.965,3.489,1.916,4.435v3.775c-0.578,1.386-2.59,2.188-4.909,3.114c-3.901,1.558-8.757,3.496-9.09,9.604L5,46h24.624C29.256,45.367,28.948,44.699,28.7,44z"/><path fill="none" stroke="#000" strokeWidth="2" d="M40 31A9 9 0 1 0 40 49A9 9 0 1 0 40 31Z"/><path fill="none" stroke="#000" strokeLinecap="round" strokeWidth="2" d="M36.5 36.5L43.5 43.5M43.5 36.5L36.5 43.5"/></svg>
          Delete Client</a> }
      </button>
        ); }