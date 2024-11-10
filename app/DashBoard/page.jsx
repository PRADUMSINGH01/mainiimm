"use client"
import React,{useEffect} from 'react'
import Cookies from 'js-cookie';

import Dashboard from '@/components/chat/Dash/dashboardUI';
const page = () => {


/**
 * 

  useEffect(() => {
    const session = Cookies.get('session');
    console.log(session)
    if (session) {
     
      router.push('/'); // Redirect if already logged in
    }
  }, []);


 */


  return (
    <div>
      <Dashboard/>
    </div>
  )
}

export default page