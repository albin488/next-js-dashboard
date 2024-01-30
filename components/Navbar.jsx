
import Link from 'next/link';
import SessionBtn from './sessionBtn';
import LogOutBtn from './logOutBtn';

  
  export default async function Page() {
    
    return(
   <main className=' w-full mb-4'>
<nav className="bg-gray-800 w-full flex flex-row justify-between ">
  <div className=" m-0 px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
  
      <div className="flex flex-1 items-center justify-center  sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
              <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
            <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Teams</Link>
         
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
          </div>
        </div>
      </div>
    
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2 flex bg-gray-900">
      <a href="/" id='jaune' className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboards</a>
      <Link href="/admin" id='jaune' className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</Link>

      <a href="#"  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
      <div className=" relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      

   
        <div className="relative ml-3 ">
          <div className=''>
         <SessionBtn/>
          </div>

          <div className=" relative hidden right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
  
            <a href="#" className="block px-4 py-2 text-sm text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
  { /* <nav id='naivgation' className="bg-slate-800 text-black w-full p-4">
      <ul className="space-y-4 flex justify-between">
        <li className="transform transition-transform duration-300 hover:scale-105">
          <Link href="/" className="hover:text-blue-500 transition duration-300">
           Home
          </Link>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-105">
          <Link href="/addUser" className="hover:text-blue-500 transition duration-300">
          <button className=" bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M16,13h-3v3h-2v-3H8v-2h3V8h2v3h3V13z" fill="#000" />
</svg> <span>add client</span>
</button>

          </Link>
        </li>
        <li className="transform transition-transform duration-300 hover:scale-105">
         
<button className=" bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      <span>Log Out</span>
</button>
        </li>
        {/* Add more navigation items as needed /}
      </ul>
    </nav> */}
	<div className="w-full max-w-md px-7 py-10 mx-auto mb-3 bg-white rounded-2xl shadow-xl flex justify-center">
			
			<div className="px-5 pt-3 bg-white shadow-lg rounded-2xl w-1/2">
				<div className="flex flex-row space-x-3">
				
					<div className="flex group">
						<Link href="/addUser" className="p-3 text-gray-400 hover:text-yellow-500 flex flex-col items-center">
						
						
                  <svg className=" w-8 mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M16,13h-3v3h-2v-3H8v-2h3V8h2v3h3V13z" fill="#000" />
</svg>
							
								<span className="text-xs mb-2 transition-all duration-200">
									add client
								</span>

				
								<span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
		
						</Link>
					</div>

				
					<div className="flex group">
						<Link href="#" className="p-3 text-gray-400 hover:text-yellow-500">
							<span className="flex flex-col items-center">
					
								<i className="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

                <LogOutBtn/>
						

					
								<span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</Link>
					</div>

				
					<div className="flex group">
						<Link href="#" className="p-3 text-yellow-500 hover:text-yellow-500">
							<span className="flex flex-col items-center">
					
								<i className="mdi mdi-layers-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
									transition-color duration-200"></i>

					
								<span className="text-xs mb-2 transition-all duration-200">
									Feeds
								</span>

					
								<span className="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500
									hover:h-3 hover:w-3 transition-all duration-150 delay-100"></span>
							</span>
						</Link>
					</div>

				
					<div className="flex group">
						<Link href="#" className="p-3 text-gray-400 hover:text-yellow-500">
							<span className="flex flex-col items-center">
					
								<i className="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

					
								<span className="text-xs mb-2 transition-all duration-200">
									Cart
								</span>

					
								<span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</Link>
					</div>

				
					<div className="flex group">
						<Link href="#" className="p-3 text-gray-400 hover:text-yellow-500">
							<span className="flex flex-col items-center">
				
								<i className="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
									transition-color duration-200"></i>

				
								<span className="text-xs mb-2 transition-all duration-200">
									Account
								</span>

					
								<span className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>


    </main>
    )
    
  }