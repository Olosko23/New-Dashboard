import React from 'react';
import {CgProfile} from 'react-icons/cg';
//import {FiSettings} from 'react-icons/fi';
//import {FaServicestack} from 'react-icons/fa';
//import {AiOutlineMenu} from 'react-icons/ai';
//import {Link} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const {user} = UserAuth();

  return (
    <div className="h-screen mb-10 py-3 px-1 bg-slate-100 grid place-items-center">
      <div className="flex flex-col gap-2 rounded-md shadow-md w-4/5 px-2 py-2">
        <h2 className="font-semibold text-xl grid place-items-center"><span className="flex gap-1"><span className="mt-1"><CgProfile size={20} /></span>Profile</span></h2>
        <div className="flex gap-2 font-medium">{user && user.email}</div>
        <div className="font-medium">Account ID : <span className="">123a</span></div>
        <div>
          <Link to='*'><span>Profile</span></Link>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar
