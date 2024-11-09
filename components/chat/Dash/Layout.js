import { FiHome, FiBookOpen, FiUser, FiMenu, FiX } from 'react-icons/fi'; // Added FiX for close button
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import Alert from './Alert';
export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [name, setName] = useState('');

  const toggleDarkMode = () => {
    if(!darkMode){
      setDarkMode(true)

    }else{
      setDarkMode(false)
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const profileName = Cookies.get('Profile');
    setName(profileName || 'User');

  }, []);

  return (
    <>
    {
      darkMode?
    <div  className='  '>
    <Alert  type='success' message='Dark Mode ON' duration={3000}/>
    </div>
:""
    }
    <div className={`min-h-screen flex flex-col md:flex-row ${darkMode ? 'dark' : ''}`}>
      
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:relative w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex-shrink-0 z-20 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 text-2xl font-bold flex justify-between items-center">
          <span>IIM Target</span>
          {/* Close button for mobile view */}
          <button className="md:hidden" onClick={toggleSidebar}>
            <FiX className="text-2xl" />
          </button>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4">
            <li className="group">
              <Link href="/">
                <span className="flex items-center px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                  <FiHome className="mr-2 text-xl group-hover:scale-110 transition-transform duration-200" />
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="group">
              <Link href="/courses">
                <span className="flex items-center px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                  <FiBookOpen className="mr-2 text-xl group-hover:scale-110 transition-transform duration-200" />
                  Courses
                </span>
              </Link>
            </li>
            <li className="group">
              <Link href="/Mock">
                <span className="flex items-center px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                  <FiUser className="mr-2 text-xl group-hover:scale-110 transition-transform duration-200" />
                  Mock
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-grow bg-gray-100 dark:bg-gray-800 p-8 transition-colors duration-300 ease-in-out justify-between">
        <header className="flex justify-between items-center mb-8">
          {/* Sidebar toggle button for mobile */}
          <button
            onClick={toggleSidebar}
            className="md:hidden px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-300"
          >
            <FiMenu className="text-xl" />
          </button>

          <h1 className="text-sm md:text-3xl font-bold text-gray-800 dark:text-white ml-3 md:ml-0  ">Welcome, {name}</h1>

         
        </header>
        <main>{children}</main>
      </div>
    </div>
    </>
  );
}
