import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Header = () => {

  return (
    <div className="">
      <div className="w-full h-12 px-5 py-1 bg-slate-200 flex justify-between">
        <Link to="/" className="mt-2 font-bold text-lg hover:scale-110">
          OLOSKO
        </Link>
          <div className="flex gap-2">
            <Link
              className="py-2 px-4 rounded-md bg-neutral-400 cursor-pointer hover:font-semibold"
              to="/login"
            >
              {" "}
              <span className="flex gap-2">
                <FaSignInAlt size={20} /> Login
              </span>
            </Link>
            <Link
              className="py-2 px-4 rounded-md bg-neutral-400 cursor-pointer hover:font-semibold"
              to="/register"
            >
              {" "}
              <span className="flex gap-2">
                <BsFillPersonPlusFill size={20} />
                Register
              </span>
            </Link>
          </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
