import ShowClient from "@/components/showClient";

export default async function UserList({params}){
  //const data = await getData()
  const id=params.userid;
    return(
        <>
   
 <div className=" bp-4 borderorder-slate-300 " >

    
      <div className=" w-full flex flex-row justify-center">
      <ShowClient  id={id} />
      </div>
   
        </div>
 
     </>
     ); 
}