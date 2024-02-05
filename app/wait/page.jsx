export default function Wait(){
    return(
        <div className="grid place-items-center w-full">
        <div className=" bg-white flex items-center justify-center w-1/2 lg:p-12">
    <div className="flex items-center xl:p-10">
      <form className="border-t-4 border-black bg-black flex flex-col w-full h-full justify-center text-center rounded-lg shadow-lg">
       <div className="w-full p-4 flex flex-col justify-center">
        <h3 className="mb-4 text-4xl font-extrabold text-white">account created</h3>
        <p className="mb-4 text-white text-center">Your account is pending approval by administrators</p>
   </div>
      </form>
    </div>
  </div>
    </div>
    );
}