import Link from "next/link";
import { useSession } from "next-auth/react"
import AdminList from "@/components/adminList";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function GetUsers() {
    const api=process.env.API_URL
    //const  session =await getServerSession(authOptions);
    const res = await fetch(`${api}/api/admin`,{
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
   //Admin(session)
   //console.log("session",session);
    return data.users
   
  
  }

export default async function Admin(){
   
    const  session =await getServerSession(authOptions);
    const data = await GetUsers()
    return(
        <div className="antialiased font-sans bg-gray-200">
    <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div>
                <h2 className="text-2xl font-semibold leading-tight">Users</h2>
            </div>
            <div className="my-2 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">
                    <div className="relative">
                      
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative">
                      
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="block relative">
                    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search"
                        className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden w-96">
                  
                    <table className="min-w-full leading-normal w-96">
                        <thead>
                            <tr className="ml-4">
                                <th
                                    className="px-5 ml-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    User
                                </th>
                                <th
                                    className="px-5  ml-10 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Rol
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Created at
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((user) => (
                            <tr key={user._id} >
                            
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link   href={session?.user?.role == "admin"  ?`/editAdmin/${user._id}`:"#"}>
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                
                                                <svg className="w-full h-full rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M8,22.141c1.167-3.5,4.667-2.134,5.25-4.03v-1.264c-0.262-0.141-1.013-1.109-1.092-1.865c-0.207-0.018-0.531-0.223-0.627-1.034c-0.051-0.435,0.153-0.68,0.276-0.757c0,0-0.308-0.702-0.308-1.399C11.5,9.72,12.526,8,15,8c1.336,0,1.75,0.947,1.75,0.947c1.194,0,1.75,1.309,1.75,2.844c0,0.765-0.308,1.399-0.308,1.399c0.124,0.077,0.328,0.322,0.277,0.757c-0.096,0.811-0.42,1.016-0.627,1.034c-0.079,0.756-0.829,1.724-1.092,1.865v1.264c0.583,1.897,4.083,0.531,5.25,4.031c0,0-2.618,2.859-7,2.859C10.593,25,8,22.141,8,22.141z"/></svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                            {user.name}
                                            </p>
                                        </div>
                                    </div>
                                    </Link>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link href={session?.user?.role == "admin"  ?`/editAdmin/${user._id}`:"#"}>
                                    <p className="text-gray-900 whitespace-no-wrap">{user.role}</p>
                               </Link>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link href={session?.user?.role == "admin"  ?`/editAdmin/${user._id}`:"#"}>
                                    <p className="text-gray-900 whitespace-no-wrap">
                                    {user.createdAt.slice(0, -24 + 10)}
                                    </p>
                                    </Link>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ml-4">
                                <Link href={session?.user?.role == "admin"  ?`/editAdmin/${user._id}`:"#"}>
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">{user.statu}</span>
                                    </span>
                                    </Link>
                                </td>
                               
                            </tr>
                          
                          ))}
                        </tbody>
                    </table>
                    <div
                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-900">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            <button
                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}


