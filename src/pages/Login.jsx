import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import {UserAuth} from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const {signIn} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await signIn(email, password);
      console.log("Logged in using", email, password);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
      setError(true);
      //alert(error.message)
      setLoading(false)
    }
  };
  const handleClick = () => {
    alert(`Under Construction, Use Email`);
  };
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="border rounded-md shadow-md py-3 px-3 w-3/4">
        <form onSubmit={handleSubmit} className="py-2 mb-3 w-full">
          <h2 className="text-4xl font-bold grid place-items-center">LOGIN</h2>
          <p className="text-base font-normal grid place-items-center mb-2">
            Enter correct credentials to login
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
              minLength={8}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2 grid place-items-center">
            <button
              className="w-full py-1 px-2 bg-slate-400 rounded-md grid place-items-center hover:font-semibold"
              type="submit"
            >
              {loading? <span>Please wait logging in...</span> : <span>Login</span>}
            </button>
            <div>
              {error ? <span className="text-red-400 text-center">{error.message}</span>: null}
            </div>
          </div>
          <p className="font-medium text-base">
            New User?{" "}
            <span className="font-medium hover:font-semibold">
              <Link to="/register">Register</Link>
            </span>
          </p>
          <p className="font-medium text-base"><Link to='/recovery'>Forgot Password? </Link></p>
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

export default Login;
