'use client'
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from 'react';
import { useRouter } from 'next/navigation'


export default function AdmRemoveBtn({id}){
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const removeUser=async()=>{
    try{ 
      setLoading(true);
     const res= await fetch(`/api/admin?id=${id}`,{
      method:"DELETE",
    });

    if(res.ok){
 // Trigger the onDelete callback
     router.push('/admin');
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
      {loading?'deliting...': <a className="bg-gray-100 flex flex-col items-center justify-center gap-x-2.5 font-semibold text-gray-900 hover:bg-gray-100" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className=' w-8'>
  <path fill="none" stroke="#F8F012" strokeWidth="3" d="M19.5,11.5V10c0-2.485,2.015-4.5,4.5-4.5s4.5,2.015,4.5,4.5v1.5" />
  <line x1="7.5" x2="40.5" y1="11.5" y2="11.5" fill="none" stroke="#F8F012" strokeLinecap="round" strokeWidth="3" />
  <line x1="20.5" x2="20.5" y1="19.5" y2="34.5" fill="none" stroke="#F8F012" strokeLinecap="round" strokeWidth="3" />
  <path d="M35,24c-6.075,0-11,4.925-11,11s4.925,11,11,11s11-4.925,11-11S41.075,24,35,24z M40.707,39.293c0.391,0.391,0.391,1.023,0,1.414C40.512,40.902,40.256,41,40,41s-0.512-0.098-0.707-0.293L35,36.414l-4.293,4.293C30.512,40.902,30.256,41,30,41s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L33.586,35l-4.293-4.293c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L35,33.586l4.293-4.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414L36.414,35L40.707,39.293z" fill="#F8F012" />
  <path d="M23.474,41H15.5c-1.378,0-2.5-1.122-2.5-2.5v-27c0-0.829-0.671-1.5-1.5-1.5S10,10.671,10,11.5v27 c0,3.033,2.467,5.5,5.5,5.5h10.133C24.778,43.111,24.05,42.103,23.474,41z" fill="#F8F012" />
  <path d="M38,11.5c0-0.829-0.671-1.5-1.5-1.5S35,10.671,35,11.5V22c1.034,0,2.035,0.134,3,0.362V11.5z" fill="#F8F012" />
  <path d="M29,23.474V19.5c0-0.829-0.671-1.5-1.5-1.5S26,18.671,26,19.5v6.133C26.889,24.778,27.897,24.05,29,23.474z" fill="#F8F012" />
</svg>
          Delete</a> }
      </button>
        ); }