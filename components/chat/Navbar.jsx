"use client";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

import handleLogout from "@/module/singOut";
import { FaSignOutAlt } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
// components/Navbar.js
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
export default function Navbar() {
  const { data: session } = useSession();

  const [slidebar, setsidebar] = useState(false);
  function slidebarFuc() {
    if (slidebar) {
      setsidebar(false);
    } else {
      setsidebar(true);
    }
  }
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center ">
        <Link href="/" className="text-xl font-bold text-gray-800">
          IIM Target
        </Link>

        {/*      ------------------------------  small screen  navbar  ------*/}
        <div
          className={`flex flex-col  ${
            slidebar ? "absolute top-0 w-full h-[100%] bg-black/50" : ""
          }  md:hidden lg:hidden`}
        >
          <button onClick={slidebarFuc} className="reletive">
            {slidebar ? (
              <IoCloseSharp className="w-20 h-10 flex text-white  mt-10 " />
            ) : (
              <RxHamburgerMenu className="w-20 h-10 flex" />
            )}
          </button>

          <div
            className={
              slidebar
                ? "flex z-10 flex-col md:hidden  items-center justify-center w-full "
                : "hidden "
            }
          >
            {session ? (
              <ul className="flex  h-full w-full  flex-col md:hidden  lg:hidden justify-center items-center  space-x-4 items-center ">
                <li>
                  <Link
                    href="/DashBoard"
                    className="text-white text-xl hover:text-blue-500 mr-5"
                  >
                    Dashboard
                  </Link>
                </li>

                <li className="flex flex-col items-center justify-center ">
                  <Image
                    src={session.user.image}
                    height={80}
                    width={40}
                    alt="profile Image"
                    className="rounded-full mt-6"
                  ></Image>
                  <p className="text-[15px] text-white mt-2">
                    {" "}
                    {session.user.name}
                  </p>
                </li>
                <li>
                  <span
                    className="flex items-center justify-between cursor-pointer"
                    onClick={handleLogout}
                  >
                    <button
                      onClick={() => signOut()}
                      className="text-white text-md mt-24 hover:text-blue-500"
                    >
                      Sign Out
                    </button>
                    <FaSignOutAlt className="text-blue-600  mt-24" />
                  </span>
                </li>
              </ul>
            ) : (
              <Link
                href="/signIn"
                className="flex mt-44 h-10 md:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/*      ------------------------------  lg  navbar*/}
        {session ? (
          <ul className=" hiddle md:flex space-x-4 items-center ">
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
            className="  hidden  md:flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
