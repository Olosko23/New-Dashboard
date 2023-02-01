import React from 'react';
import {CgProfile} from 'react-icons/cg';
import {FiSettings} from 'react-icons/fi';
import {FaServicestack} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen mb-10 py-3 px-1 bg-slate-100 grid place-items-center">
      <div className="flex flex-col gap-2 rounded-md shadow-md w-4/5 px-2 py-2">
        <h2 className="font-semibold text-xl grid place-items-center"><span className="flex gap-1"><span className="mt-1"><CgProfile size={20} /></span>Profile</span></h2>
        <div className="flex gap-2 font-medium">Olosko Collins</div>
        <div className="font-medium">Account ID : <span className="">123a</span></div>
      </div>
      <div className="flex flex-col gap-2 rounded-md shadow-md w-4/5 px-2 py-2">
        <h2 className="font-semibold text-xl grid place-items-center"><span className="flex gap-1"><span className="mt-1"><AiOutlineMenu size={20}/></span>Menu</span></h2>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Home</Link></div>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Indices</Link></div>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Currency</Link></div>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Crypto</Link></div>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>ETF</Link></div>
      </div>
      <div className="flex flex-col gap-2 rounded-md shadow-md w-4/5 px-2 py-2">
        <h2 className="font-semibold text-xl grid place-items-center"><span className="flex gap-1"><span className="mt-1"><FaServicestack size={20}/></span>Services</span></h2>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Current Market Status</Link></div>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Exchange Rates</Link></div>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Crypto Analysis</Link></div>
      </div>
      <div className="flex flex-col gap-2 rounded-md shadow-md w-4/5 px-2 py-2">
        <h2 className="font-semibold text-xl grid place-items-center"><span className="flex gap-1"><span className="mt-1"><FiSettings size={20}/></span>Settings</span></h2>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Contact</Link></div>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Subscription</Link></div>
        <div className="cursor-pointer font-medium hover:font-semibold"> <Link to='/'>Theme</Link></div>
      </div>
    </div>
  )
}

export default Sidebar
