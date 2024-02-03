import EditAdminForm from "./editAdminForm";


export async function getData(id) {
  
    const apiUrl = `http://localhost:3000/api/admin/${id}`;
    //console.log('API URL:', apiUrl);

    const response = await fetch(apiUrl, { cache:'no-store' });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    //console.log('Data:', data.user);

    // Return the data
    return data.user;
  
}
export default async function UserAcount({id}){
   const datas = await getData(id);
  // console.log("id:",id);
return(
    
    <div className="mx-auto right-0 mt-8 w-60 p-4 ">
         {datas ? (
                    <div className="bg-white  rounded overflow-hidden shadow-lg">
                        <div className="text-center p-6 bg-gray-800 border-b">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M12,4.75c1.795,0,3.25,1.455,3.25,3.25c0,1.795-1.455,3.25-3.25,3.25S8.75,9.795,8.75,8C8.75,6.205,10.205,4.75,12,4.75z M12,20c-2.77,0-5.21-1.408-6.646-3.547C6.475,14.823,10.046,14,12,14s5.525,0.823,6.646,2.453C17.21,18.592,14.77,20,12,20z M18.999,12.998c0,0-1.42,0.078-2.248-0.749s-0.749-2.248-0.749-2.248s1.42-0.078,2.248,0.749S18.999,12.998,18.999,12.998z"/></svg> <p className="pt-2 text-lg font-semibold text-gray-50">{datas.name}</p>
                        <p className="text-sm text-gray-100">{datas.email}</p>
                        <div className="mt-5">
                            <a
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                            >
                            Manage your Account
                            </a>
                        </div>
                        </div>
                        <EditAdminForm datasc={datas} />
                       
                    </div>
                    ) : (
    <p><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-4 w-4 text-gray-800 fill-current animate-spin" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"></path></svg>
        Loading...</p>
  )}
                </div>
);
}