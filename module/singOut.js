import Cookies from "js-cookie";
export default function handleLogout() {
  
        Cookies.remove('Profile');
        Cookies.remove('firebaseToken');
      window.location.href  = '/'
  }