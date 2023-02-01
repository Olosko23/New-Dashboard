import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const Header = () => {
  return (
    <div className="">
    <div className="w-full h-12 px-5 py-1 bg-slate-200 flex justify-between">
      <Link className="mt-2 font-bold text-lg" to="/">OLOSKO</Link>
      <div className="flex gap-2">
        <Link className="py-2 px-4 rounded-md bg-neutral-400 cursor-pointer hover:font-semibold" to="/login">Login</Link>
        <Link className="py-2 px-4 rounded-md bg-neutral-400 cursor-pointer hover:font-semibold" to="/register">Register</Link>
      </div>
    </div>
    <Outlet />
    </div>
  )
}

export default Header
