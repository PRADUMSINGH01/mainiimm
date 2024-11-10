'use client'

import handleLogout from '@/module/singOut';
import { FaSignOutAlt } from 'react-icons/fa';

// components/Navbar.js
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
export default function Navbar() {
const [auth , setAuth]  = useState(false)
  useEffect(()=>{
  const session = Cookies.get("Profile")
  if(session){
    setAuth(true)
  }else{
    setAuth(false)
  }

})
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          IIM Target
        </Link>
        <ul className="flex space-x-4">
          <li>
        
            <Link href="/DashBoard" className="text-gray-600 hover:text-blue-500">
              Dashboard
            </Link>
        
          </li>


            <li>
          { auth ?
          <span className='flex items-center justify-between cursor-pointer' onClick={handleLogout}>
            <p   className=' px-1 '>LogOut</p>
            <FaSignOutAlt className='text-blue-600'/>
          </span>
            :

            <Link href="/sign" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </Link>
          }
          </li>
        </ul>
      </div>
    </nav>
  );
}