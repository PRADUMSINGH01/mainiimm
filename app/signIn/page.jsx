"use client";
import google from "@/module/signinmodule";
import Image from "next/image";
import gImage from "@/app/google.svg";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  // const router = useRouter()
  // useEffect(()=>{
  // const session = Cookies.get("firebaseToken")
  // if(!session){
  // router.push('/sign')
  // }else{
  //   router.push('/')
  // }
  // },[])

  const [signIN, SetsignIN] = useState(false);
  const SignIn = () => {
    if (!signIN) {
      SetsignIN(true);
    } else {
      SetsignIN(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen  bg-black" >
      <div className=" flex flex-col w-full md:w-1/2 border-2 rounded-md p-5    m-3">
        <div className=" flex w-full  justify-between items-center ">
          <button className="  bg-blue-500 p-2 mb-3 text-white   rounded-md hover:bg-blue-700 " onClick={SignIn} disabled >
            Sign Up{" "}
          </button>

          <button
            className="  p-2 mb-3 text-white bg-red-500 rounded-md hover:bg-red-700 "
            onClick={SignIn}
          >
            {signIN?"Sign Up":"Sign In"}
            
          </button>
        </div>

        <div className={signIN ? "hidden" : "flex flex-col"}>

          <h1 className='text-white text-2xl text-center mb-2'>Create your Account </h1>
          <hr/>


          <div className="flex flex-col mt-6 ">
            <lebel className=" text-red-500 font-bold "> First Name</lebel>
            <input
              type="text"
              name=""
              id=""
              className="p-2 rounded-md outline-none"
              placeholder=" Enter First Name "
            />
          </div>

          <div className="flex flex-col  m-1">
            <lebel className=" text-blue-500 font-bold">last Name </lebel>
            <input
              type="email"
              name=""
              id=""
              className="p-2 rounded-md outline-none"
              placeholder=" Enter Last Name "
            />
          </div>

          <div className="flex flex-col  m-1">
            <lebel className=" text-yellow-500 font-bold">Email</lebel>
            <input
              type="email"
              name=""
              id=""
              className="p-2 rounded-md outline-none"
              placeholder=" Enter Email "
            />
          </div>
          <div className="flex flex-col  m-1">
            <lebel className=" text-indigo-500 font-bold">Password</lebel>
            <input
              type="password"
              name=""
              id=""
              className="p-2 rounded-md outline-none"
              placeholder=" Enter Password"
            />
          </div>
          <div className="flex flex-col  m-1 items-center justify-center">
            <button
              type="submit"
              className="text-white bg-green-500 p-2 shadow-md mt-6 rounded-md hover:bg-green-700"
            >
              {" "}
              Sign-Up
            </button>
          </div>
        </div>
        <div className={signIN ? "flex  flex-col " : "hidden "}>
          
        <h1 className='text-white text-2xl text-center mb-6'> Login with your Email Id   </h1>
          <hr/>

          <div className="flex flex-col  mt-6">
            <lebel className=" text-yellow-500 font-bold">Email</lebel>
            <input
              type="email"
              name=""
              id=""
              className="p-2 rounded-md outline-none"
              placeholder=" Enter Email "
            />
          </div>
          <div className="flex flex-col  m-1">
            <lebel className=" text-indigo-500 font-bold">Password</lebel>
            <input
              type="password"
              name=""
              id=""
              className="p-2 rounded-md outline-none"
              placeholder=" Enter Password"
            />
          </div>
          <div className="flex flex-col  m-1 items-center justify-center">
            <button
              type="submit"
              className="text-white bg-green-500 p-2 mt-6 shadow-md rounded-md hover:bg-green-700"
            >
              {" "}
              Sign-In
            </button>
          </div>
          
          <div
            className={
              "flex items-center w-full justify-center  h-[5rem] p-5 mt-8 shadow-xl bg-white rounded-md"
            }
          >
            <Image src={gImage} width={40} height={30} />
            <button onClick={() => google()}>Sign In with Google {}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
