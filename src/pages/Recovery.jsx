import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Recovery = () => {
  const [mail, setMail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Check ${mail}`);
    navigate("/login");
  };
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="border rounded-md shadow-md py-3 px-3 w-3/4">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-4xl font-bold grid place-items-center mb-3">
            Recover Password
          </h2>
          <input
            className="py-2 px-4 border-b mb-2 w-full"
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setMail(e.target.value)}
          />
          <p className="text-base mb-3">
            Enter the email address you signed up wiht for the account.
            <br /> If it is registered a recovery password will be sent.
          </p>
          <button className="mb-2 w-full py-1 px-2 bg-slate-400 rounded-md grid place-items-center hover:font-semibold">
            Submit
          </button>
        </form>
        <p className="text-base">
          Recall Password ?{" "}
          <Link to="/login">
            <span className="hover:font-semibold">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Recovery;
