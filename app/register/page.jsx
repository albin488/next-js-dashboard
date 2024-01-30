import RegisterForm from "@/components/registerForm";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Register(){
    
   const session=await getServerSession(authOptions);

    return(
        <div className=" flex justify-center w-ful items-center mt-4">
             {session ? ( redirect("/dashboard") ) : (
            <RegisterForm/>
            )}
        </div>
    );
}