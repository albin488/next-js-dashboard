import LoginForm from "@/components/loginForm";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  // Check if the current page is the login page
   const session=await getServerSession(authOptions);
  return (
    <div className="bg-gray-100 h-screen flex flex-auto justify-center w-full md:w-1/6 lg:w-1/5 p-4 min-h-screen" >
   {session ? ( redirect("/dashboard") ) : (
       <LoginForm/>
      )}
    </div>
  
  );
}
