import RemoveBtn from "./RemoveBtn";
import EditUserForm from "./EditUserForm";

export async function getData(id) {
  
      const apiUrl = `http://localhost:3000/api/users/${id}`;
      console.log('API URL:', apiUrl);
  
      const response = await fetch(apiUrl, { cache:'no-store' });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log('Data:', data.user);
  
      // Return the data
      return data.user;
    
  }

 export async function ShowClient({id}){
   
const datas = await getData(id);

    return(
        <div className=" flex flex-col justify-center w-full ">
        {datas ? (
        <div className=" w-full flex flex-row justify-center ">

          <div className=" w-2/5 relative mt-5 flex  px-4" >
    <div className="w-full flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
   <div>
    <div className=" w-full flex flex-row">
      <div className="p-4">
        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg  className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="#212121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M27.5,4.5c-1.102,0-5.9,0-7,0c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.1,0,5.898,0,7,0c1.657,0,3-1.343,3-3S29.157,4.5,27.5,4.5z"/><path fill="none" stroke="#212121" strokeLinejoin="round" strokeWidth="3" d="M30.314,8.5H35.5c1.657,0,3,1.343,3,3v27c0,1.657-1.343,3-3,3h-23c-1.657,0-3-1.343-3-3v-27c0-1.657,1.343-3,3-3h5.181"/><circle cx="24" cy="21" r="5"/><path d="M24,37c-4.561,0-8-2.149-8-5v-1.5c0-1.379,1.121-2.5,2.5-2.5h11c1.379,0,2.5,1.121,2.5,2.5V32C32,34.851,28.561,37,24,37z"/></svg>
</div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
              Name
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-600">{datas.name}</p>
          </div>
        </div>

        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="#000" d="M13.5,12.5h-11c-0.552,0-1-0.448-1-1v-8c0-0.552,0.448-1,1-1h11c0.552,0,1,0.448,1,1v8C14.5,12.052,14.052,12.5,13.5,12.5z"/><path fill="none" stroke="#000" d="M1.852 3.244L8 7.5 14.148 3.243"/><path d="M5.143 8.407L1.311 11.612 1.939 12.39 6 9zM10 9L14.061 12.39 14.689 11.612 10.857 8.407z"/></svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
              Email
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-600">{datas.email}</p>
          </div>
        </div>
        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M39.1,34.2c1.3-2.6,3.1-5,5.2-7.1c2-2,4.3-3.7,6.8-5c1.5-0.8,2-2.6,1.3-4c-0.8-1.5-2.6-2-4-1.3c-3,1.6-5.8,3.6-8.3,6.1 c-2.5,2.5-4.6,5.4-6.3,8.6c-0.8,1.5-0.2,3.3,1.3,4c0.4,0.2,0.9,0.3,1.4,0.3C37.5,35.9,38.5,35.3,39.1,34.2z"/><path d="M33,44C33,44,33,44,33,44c-1.7,0-3,1.4-3,3c0,2.7,0.4,5.5,1,8.1c0.3,1.4,1.6,2.3,2.9,2.3c0.2,0,0.5,0,0.7-0.1 c1.6-0.4,2.6-2,2.2-3.6C36.3,51.5,36,49.3,36,47C36,45.4,34.7,44,33,44z"/><path d="M21.9,65.3c2.4,5.5,5.3,10.9,8.6,16c0.9,1.4,2.8,1.8,4.2,0.9c1.4-0.9,1.8-2.8,0.9-4.2c-3.1-4.8-5.8-9.8-8.1-15l-0.1-0.2 c-6.5-15.1-3.2-32.4,8.4-44c15.6-15.6,40.9-15.6,56.5,0c11.6,11.6,15,28.9,8.6,43.9c-6.5,15.3-17.3,29.2-31.3,40.3 c-6.4,5-13.4,9.9-18.2,13.1c-2.2,1.5-3.2,4.2-2.4,6.7c0.8,2.5,3.1,4.3,5.7,4.3H94c1.7,0,3-1.3,3-3s-1.3-3-3-3l-39.4,0 c4.9-3.2,12-8.2,18.6-13.4C87.9,95.9,99.4,81.2,106.3,65c7.4-17.3,3.5-37.2-9.9-50.5c-17.9-17.9-47-17.9-64.9,0 c-13.4,13.4-17.2,33.3-9.7,50.6L21.9,65.3z"/><path d="M50.3,103.9c0.6,0.5,1.3,0.7,2,0.7c0.8,0,1.7-0.4,2.3-1c1.1-1.3,0.9-3.2-0.3-4.2c-2.9-2.5-5.6-5.1-8.2-7.9 c-1.1-1.2-3-1.3-4.2-0.2c-1.2,1.1-1.3,3-0.2,4.2C44.3,98.4,47.2,101.2,50.3,103.9z"/><path d="M46,47c0,9.9,8.1,18,18,18S82,57,82,47S74,29,64,29S46,37.1,46,47z M64,35c6.6,0,12,5.4,12,12s-5.4,12-12,12s-12-5.4-12-12 S57.4,35,64,35z"/></svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
              Adress
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-600">{datas.adress}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
      <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg className="h-5 w-5 flex-none text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="#000" strokeWidth="3" d="M21,39.5c-8.812,0-15.906-7.353-15.482-16.259C5.889,15.466,12.2,9.037,19.967,8.534C24.634,8.231,29,10,32.5,13c1.867,1.6,6.236,5.515,8.898,8.158c1.577,1.566,1.576,4.113-0.004,5.677c-2.647,2.62-6.95,6.525-8.814,8.085C29.5,37.5,25.301,39.5,21,39.5z"/><circle cx="21" cy="19" r="4"/><path d="M28,26.448c0-0.8-0.648-1.448-1.448-1.448H15.448C14.648,25,14,25.648,14,26.448v1.304C14,29.975,16.837,32,21,32s7-2.025,7-4.248V26.448z"/></svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
             Last Name
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-600">{datas.lastname}</p>
          </div>
        </div>

        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
          </svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
             Telephone
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-600">{datas.telephone}</p>
          </div>
        </div>
 
        <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M39.1,34.2c1.3-2.6,3.1-5,5.2-7.1c2-2,4.3-3.7,6.8-5c1.5-0.8,2-2.6,1.3-4c-0.8-1.5-2.6-2-4-1.3c-3,1.6-5.8,3.6-8.3,6.1 c-2.5,2.5-4.6,5.4-6.3,8.6c-0.8,1.5-0.2,3.3,1.3,4c0.4,0.2,0.9,0.3,1.4,0.3C37.5,35.9,38.5,35.3,39.1,34.2z"/><path d="M33,44C33,44,33,44,33,44c-1.7,0-3,1.4-3,3c0,2.7,0.4,5.5,1,8.1c0.3,1.4,1.6,2.3,2.9,2.3c0.2,0,0.5,0,0.7-0.1 c1.6-0.4,2.6-2,2.2-3.6C36.3,51.5,36,49.3,36,47C36,45.4,34.7,44,33,44z"/><path d="M21.9,65.3c2.4,5.5,5.3,10.9,8.6,16c0.9,1.4,2.8,1.8,4.2,0.9c1.4-0.9,1.8-2.8,0.9-4.2c-3.1-4.8-5.8-9.8-8.1-15l-0.1-0.2 c-6.5-15.1-3.2-32.4,8.4-44c15.6-15.6,40.9-15.6,56.5,0c11.6,11.6,15,28.9,8.6,43.9c-6.5,15.3-17.3,29.2-31.3,40.3 c-6.4,5-13.4,9.9-18.2,13.1c-2.2,1.5-3.2,4.2-2.4,6.7c0.8,2.5,3.1,4.3,5.7,4.3H94c1.7,0,3-1.3,3-3s-1.3-3-3-3l-39.4,0 c4.9-3.2,12-8.2,18.6-13.4C87.9,95.9,99.4,81.2,106.3,65c7.4-17.3,3.5-37.2-9.9-50.5c-17.9-17.9-47-17.9-64.9,0 c-13.4,13.4-17.2,33.3-9.7,50.6L21.9,65.3z"/><path d="M50.3,103.9c0.6,0.5,1.3,0.7,2,0.7c0.8,0,1.7-0.4,2.3-1c1.1-1.3,0.9-3.2-0.3-4.2c-2.9-2.5-5.6-5.1-8.2-7.9 c-1.1-1.2-3-1.3-4.2-0.2c-1.2,1.1-1.3,3-0.2,4.2C44.3,98.4,47.2,101.2,50.3,103.9z"/><path d="M46,47c0,9.9,8.1,18,18,18S82,57,82,47S74,29,64,29S46,37.1,46,47z M64,35c6.6,0,12,5.4,12,12s-5.4,12-12,12s-12-5.4-12-12 S57.4,35,64,35z"/></svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
              Date of birth
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-600">{datas.date}</p>
          </div>
        </div>
      </div>
      </div>
      <div className=" w-full group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <svg className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M39.1,34.2c1.3-2.6,3.1-5,5.2-7.1c2-2,4.3-3.7,6.8-5c1.5-0.8,2-2.6,1.3-4c-0.8-1.5-2.6-2-4-1.3c-3,1.6-5.8,3.6-8.3,6.1 c-2.5,2.5-4.6,5.4-6.3,8.6c-0.8,1.5-0.2,3.3,1.3,4c0.4,0.2,0.9,0.3,1.4,0.3C37.5,35.9,38.5,35.3,39.1,34.2z"/><path d="M33,44C33,44,33,44,33,44c-1.7,0-3,1.4-3,3c0,2.7,0.4,5.5,1,8.1c0.3,1.4,1.6,2.3,2.9,2.3c0.2,0,0.5,0,0.7-0.1 c1.6-0.4,2.6-2,2.2-3.6C36.3,51.5,36,49.3,36,47C36,45.4,34.7,44,33,44z"/><path d="M21.9,65.3c2.4,5.5,5.3,10.9,8.6,16c0.9,1.4,2.8,1.8,4.2,0.9c1.4-0.9,1.8-2.8,0.9-4.2c-3.1-4.8-5.8-9.8-8.1-15l-0.1-0.2 c-6.5-15.1-3.2-32.4,8.4-44c15.6-15.6,40.9-15.6,56.5,0c11.6,11.6,15,28.9,8.6,43.9c-6.5,15.3-17.3,29.2-31.3,40.3 c-6.4,5-13.4,9.9-18.2,13.1c-2.2,1.5-3.2,4.2-2.4,6.7c0.8,2.5,3.1,4.3,5.7,4.3H94c1.7,0,3-1.3,3-3s-1.3-3-3-3l-39.4,0 c4.9-3.2,12-8.2,18.6-13.4C87.9,95.9,99.4,81.2,106.3,65c7.4-17.3,3.5-37.2-9.9-50.5c-17.9-17.9-47-17.9-64.9,0 c-13.4,13.4-17.2,33.3-9.7,50.6L21.9,65.3z"/><path d="M50.3,103.9c0.6,0.5,1.3,0.7,2,0.7c0.8,0,1.7-0.4,2.3-1c1.1-1.3,0.9-3.2-0.3-4.2c-2.9-2.5-5.6-5.1-8.2-7.9 c-1.1-1.2-3-1.3-4.2-0.2c-1.2,1.1-1.3,3-0.2,4.2C44.3,98.4,47.2,101.2,50.3,103.9z"/><path d="M46,47c0,9.9,8.1,18,18,18S82,57,82,47S74,29,64,29S46,37.1,46,47z M64,35c6.6,0,12,5.4,12,12s-5.4,12-12,12s-12-5.4-12-12 S57.4,35,64,35z"/></svg>
          </div>
          <div>
            <a href="#" className="font-semibold text-gray-900">
          Clien Detail
              <span className="absolute inset-0"></span>
            </a>
            <p className=" w-full mt-1 text-gray-600">{datas.detail}</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-row divide-x divide-gray-900/5 bg-gray-50">
        
        <a href="#" className="flex items-center justify-between gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
          <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
          </svg>
          Contact Client
        </a>
        <a href="#" className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
          <svg className="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clipRule="evenodd" />
          </svg>
          
        </a>
        
        <RemoveBtn id={datas._id}/>
      </div>
    </div>
          </div>
          <EditUserForm ids={id} datasc={datas} className="w-1/2" />
        </div>
) : (
    <p>Loading...</p>
  )}

</div>
    );
}

export default ShowClient;