import UserList from "@/components/userlist";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-auto justify-center w-full md:w-1/6 lg:w-1/5 p-4 min-h-screen" >
      
      <UserList/>
    </div>
  
  );
}
