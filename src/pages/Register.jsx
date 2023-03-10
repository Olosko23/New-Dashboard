import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import {UserAuth} from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {createUser} = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      console.log(email,password)
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  const handleClick = () => {
    alert(`Under Construction, Use Email`);
  };
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="border rounded-md shadow-md py-3 px-3 w-3/4">
        <form onSubmit={handleSubmit} className="py-2 mb-3 w-full">
          <h2 className="text-4xl font-bold grid place-items-center">
            Register
          </h2>
          <p className="text-base font-normal grid place-items-center mb-2">
            Enter correct credentials to Register
          </p>
          <div className="flex flex-col mb-2 gap-2">
            <input
              className="py-2 px-4 border-b"
              type="email"
              placeholder="Enter Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="py-2 px-4 border-b"
              type="password"
              placeholder="Enter Your Password"
              minLength={6}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2 grid place-items-center">
            <button
              className="w-full py-1 px-2 bg-slate-400 rounded-md grid place-items-center hover:font-semibold"
              type="submit"
            >
              Register
            </button>
          </div>
          <p className="font-medium text-base">
            Already have an account?{" "}
            <span className="font-medium hover:font-semibold">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
        <h2 className="grid place-items-center text-xl font-semibold">OR</h2>
        <div className="flex flex-col gap-2 w-full">
          <button
            onClick={handleClick}
            className="hover:font-semibold py-2 px-4 border rounded-md bg-slate-400 w-full grid place-items-center"
          >
            <span className="flex gap-2">
              Sign in with Google <FaGoogle size={25} />
            </span>
          </button>
          <button
            onClick={handleClick}
            className="hover:font-semibold py-2 px-4 border rounded-md bg-slate-400 w-full grid place-items-center"
          >
            <span className="flex gap-2">
              Sign in with Twitter <FaTwitter size={25} />{" "}
            </span>
          </button>
          <button
            onClick={handleClick}
            className="hover:font-semibold py-2 px-4 border rounded-md bg-slate-400 w-full grid place-items-center"
          >
            <span className="flex gap-2">
              Sign in with Github <FaGithub size={25} />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
