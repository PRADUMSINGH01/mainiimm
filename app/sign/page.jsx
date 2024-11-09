



















'use client';
import google from '@/module/signinmodule';
import Image from 'next/image';
import gImage from '@/app/google.svg'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
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










  return (
    <div className='flex justify-center w-full h-screen '>

     <div className="flex border h-[5rem] p-5 mt-60 shadow-xl ">

        <Image src={gImage} width={40} height={30}/>
        <button onClick={()=>google()}>Sign In with Google {}</button>
   
     </div>
    </div>
  );
}
