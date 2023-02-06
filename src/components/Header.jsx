import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { BsAlarm, BsBriefcase, BsFillPersonPlusFill } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  
  const { logout, user } = UserAuth();

  const handleLogout = async () =>{
    try {
      await logout();
      navigate('/')
      console.log("You are logged out")
      alert("Logged out successfully");
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="">
      <div className="w-full h-12 px-5 py-1 bg-slate-200 flex justify-between">
        <Link to="/" className="mt-2 font-bold text-lg hover:scale-110">
          OLOSKO
        </Link>
        {user ? (
          <div className="flex gap-2">
            <Link to="/dashboard" className="py-2 px-4 rounded-md bg-neutral-400 cursor-pointer hover:font-semibold">
              {" "}
              <span className="flex gap-2">
                <BsBriefcase size={20} /> Dashboard
              </span>
            </Link>
            <Link className="py-2 px-4 rounded-md bg-neutral-400 cursor-pointer hover:font-semibold">
              {" "}
              <span className="flex gap-2">
                <BsAlarm size={20} /> Notifications
              </span>
            </Link>
            <Link onClick={handleLogout} className="py-2 px-4 rounded-md bg-neutral-400 cursor-pointer hover:font-semibold">
              {" "}
              <span className="flex gap-2">
                <BsFillPersonPlusFill size={20} />
                Logout
              </span>
            </Link>
          </div>
        ) : (
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
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
