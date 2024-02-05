import UserAcount from "@/components/userAcount";

export default async function Account({params}){
  //const data = await getData()
  const id=params.id;
  //console.log("id edit",id);
    return(
        <>
   
 <div className=" bp-4 borderorder-slate-300 " >

    
      <div className=" w-full flex flex-row justify-center">
      <UserAcount  id={id} />

      </div>
   
        </div>
 
     </>
     ); 
}