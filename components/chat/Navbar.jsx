"use client";
import Image from "next/image";
import handleLogout from "@/module/singOut";
import { FaSignOutAlt } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
// components/Navbar.js
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          IIM Target
        </Link>
<<<<<<< HEAD
        {session ? (
          <ul className="flex space-x-4 items-center ">
            <li>
              <Link href="/DashBoard" className=" hover:text-blue-500 mr-5">
                Dashboard
              </Link>
            </li>

            <li className="flex flex-col items-center justify-center ">
              <Image
                src={session.user.image}
                height={60}
                width={30}
                alt="profile Image"
                className="rounded-full"
              ></Image>
              <p className="text-[15px]"> {session.user.name}</p>
            </li>
            <li>
              <span
                className="flex items-center justify-between cursor-pointer"
                onClick={handleLogout}
              >
                <button
                  onClick={() => signOut()}
                  className="hover:text-blue-500"
                >
                  Sign Out
                </button>
                <FaSignOutAlt className="text-blue-600" />
              </span>
            </li>
          </ul>
        ) : (
          <Link
            href="/signIn"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        )}
=======
          { auth ?
        <ul className="flex space-x-4">
          <li>
        
            <Link href="/DashBoard" className="text-gray-600 hover:text-blue-500">
              Dashboard
            </Link>
        
          </li>


            <li>
          <span className='flex items-center justify-between cursor-pointer' onClick={handleLogout}>
            <p   className=' px-1 '>LogOut</p>
            <FaSignOutAlt className='text-blue-600'/>
          </span>
          </li>
        </ul>

            :
            <Link href="/signIn" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </Link>
          }
>>>>>>> aed51d819786bc4a6e1ff7d3a35ef4d5e89ecadb
      </div>
    </nav>
  );
}
