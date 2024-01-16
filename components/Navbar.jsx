import Link from 'next/link';
  
  export default async function Page() {
    
   
    return(
   <main>
    <nav id='naivgation' className="bg-slate-800 text-black w-full p-4">
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
        {/* Add more navigation items as needed */}
      </ul>
    </nav>



    </main>
    )
    
  }