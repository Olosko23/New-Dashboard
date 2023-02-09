import React from 'react';
import {CgProfile} from 'react-icons/cg';
import {FiSettings} from 'react-icons/fi';
import {FaServicestack} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const Sidebar = () => {
  const {user} = UserAuth();

  const menu = [
    {
      id: 1,
      title: "Home",
      link: "/dashboard"
    },
    {
      id: 2,
      title: "Indices",
      link: "/dashboard"
    },
    {
      id: 3,
      title: "Currency",
      link: "/dashboard"
    },
    {
      id: 4,
      title: "Crypto",
      link: "/dashboard"
    },
    {
      id: 5,
      title: "ETF",
      link: "/dashboard"
    },
  ]
  const services = [
    {
      id:1,
      title: "Current Market Status",
      link: '/dashboard'
    },
    {
      id:2,
      title: "Exchange Rates",
      link: '/dashboard'
    },
    {
      id:3,
      title: "Crypto Analysis",
      link: '/dashboard'
    },
  ]
  const settings = [
    {
      id: 1,
      title: "Contact",
      link: '/dashboard'
    },
    {
      id: 2,
      title: "Subscription",
      link: '/dashboard'
    },
    {
      id: 3,
      title: "Theme",
      link: '/dashboard'
    },
  ]
  return (
    <div className="h-screen mb-10 py-3 px-1 bg-slate-100 grid place-items-center">
      <div className="flex flex-col gap-2 rounded-md shadow-md w-4/5 px-2 py-2">
        <h2 className="font-semibold text-xl grid place-items-center"><span className="flex gap-1"><span className="mt-1"><CgProfile size={20} /></span>Profile</span></h2>
        <div className="flex gap-2 font-medium">{user && user.email}</div>
        <div className="font-medium">Account ID : <span className="">123a</span></div>
      </div>
      <div className="flex flex-col gap-2 rounded-md shadow-md w-4/5 px-2 py-2">
        <h2 className="font-semibold text-xl grid place-items-center"><span className="flex gap-1"><span className="mt-1"><AiOutlineMenu size={20}/></span>Menu</span></h2>
        {
          menu.map(({id,title,link}) =>(
            <div key={id} className="cursor-pointer font-medium hover:font-semibold"> <Link to={link}>{title}</Link></div>
          ))
        }
      </div>
      <div className="flex flex-col gap-2 rounded-md shadow-md w-4/5 px-2 py-2">
        <h2 className="font-semibold text-xl grid place-items-center"><span className="flex gap-1"><span className="mt-1"><FaServicestack size={20}/></span>Services</span></h2>
        {
          services.map(({id,title,link}) =>(
            <div key={id} className="cursor-pointer font-medium hover:font-semibold"> <Link to={link}>{title}</Link></div>
          ))
        }
      </div>
      <div className="flex flex-col gap-2 rounded-md shadow-md w-4/5 px-2 py-2 mb-10">
        <h2 className="font-semibold text-xl grid place-items-center"><span className="flex gap-1"><span className="mt-1"><FiSettings size={20}/></span>Settings</span></h2>
        {
          settings.map(({id,title,link}) =>(
            <div key={id} className="cursor-pointer font-medium hover:font-semibold"> <Link to={link}>{title}</Link></div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
