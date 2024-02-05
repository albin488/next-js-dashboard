
import Image from "next/image";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilArt} from 'react-icons/hi'
import { useRouter } from "next/navigation";

async function getData() {
  const api=process.env.API_URL
  const res = await fetch(`${api}/api/users`,{
      method: 'GET',
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      },
   
    });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
   // Parse JSON from the response
   const data = await res.json();
  //console.log(data.users);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return data.users;
 

}

export default async function UserList(){
  const data = await getData()

    return(
        <>
   
 <div className=" bp-4 borderorder-slate-300 p-4 " >

            <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
         
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">last Name</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Telephone</th>
          <th className="py-2 px-4 border-b">Adress</th>

        </tr>
      </thead>
      <tbody>
      {data.map((user) => (
        
        <tr key={user._id} className=" hover:bg-amber-600 hover:border-transparent hover:shadow-lg">
          <td className="py-2 px-4 border-b"><Link  href={`/editUser/${user._id}`} >{user.name}</Link></td>
          <td className="py-2 px-4 border-b"><Link  href={`/editUser/${user._id}`} >{user.lastname}</Link></td>
          <td className="py-2 px-4 border-b"><Link  href={`/editUser/${user._id}`} >{user.email}</Link></td>
          <td className="py-2 px-4 border-b"><Link  href={`/editUser/${user._id}`} >{user.telephone}</Link></td>
          <td className="py-2 px-4 border-b"><Link  href={`/editUser/${user._id}`} >{user.adress}</Link></td>    
        </tr>
       
        ))}
       
      </tbody>
    </table>

  
        </div>
 
     </>
     ); 
}