"use client"
import { useSession } from "next-auth/react"
import Link from "next/navigation";

export default function AdminList({data}){
    const { data: session } = useSession();
    //console.log("session:",session);
    const date= data;
    console.log("date:",date);
    return(
<div className="relative ">
hello
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
                        {date.map((userd) => (
                            <tr key={userd._id} >
                            
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link   href={session?.userd?.role == "admin"  ?`/editAdmin/${userd._id}`:"#"}>
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                
                                                <svg className="w-full h-full rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M8,22.141c1.167-3.5,4.667-2.134,5.25-4.03v-1.264c-0.262-0.141-1.013-1.109-1.092-1.865c-0.207-0.018-0.531-0.223-0.627-1.034c-0.051-0.435,0.153-0.68,0.276-0.757c0,0-0.308-0.702-0.308-1.399C11.5,9.72,12.526,8,15,8c1.336,0,1.75,0.947,1.75,0.947c1.194,0,1.75,1.309,1.75,2.844c0,0.765-0.308,1.399-0.308,1.399c0.124,0.077,0.328,0.322,0.277,0.757c-0.096,0.811-0.42,1.016-0.627,1.034c-0.079,0.756-0.829,1.724-1.092,1.865v1.264c0.583,1.897,4.083,0.531,5.25,4.031c0,0-2.618,2.859-7,2.859C10.593,25,8,22.141,8,22.141z"/></svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                            {userd.name}
                                            </p>
                                        </div>
                                    </div>
                                    </Link>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link href="#">
                                    <p className="text-gray-900 whitespace-no-wrap">{userd.role}</p>
                               </Link>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <Link href="#">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                    {userd.createdAt.slice(0, -24 + 10)}
                                    </p>
                                    </Link>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ml-4">
                                <Link href="#">
                                    <span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                        <span className="relative">{userd.statu}</span>
                                    </span>
                                    </Link>
                                </td>
                               
                            </tr>
                          
                          ))}
                        </tbody>
                    </table>
</div>
    );
 }