import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" gap-2 mb-24 sm:mb-10">
      <section className="mb-2 flex h-[300px] sm:h-[500px] bg-[url(https://picsum.photos/400)] bg-cover">
        <div className="basis-2/3 flex flex-col gap-4 mt-64">
          <div className="font-bold text-3xl sm:text-5xl px-5">Olosko Markets <br /> Insight</div>
          <div className="max-w-4xl mx-auto text-lg font-semibold leading-4 px-4">Offerring the best curated financial insight with focus on big markets as well as emerging markets as we try to make this sentence as long as possible in a way that it would still make economic sense</div>
        </div>
        <div className="hidden sm:flex basis-1/3"></div>
      </section>
      <section className=" px-5 max-w-4xl mx-auto mb-2 py-4">
        <h2 className="grid place-items-center mb-2 font-semibold text-xl sm:text-3xl">
          About Us
        </h2>
        <div className="font-medium text-sm sm:text-base max-w-4xl mx-auto">
          Olosko markets insight is a lorem ipsum placeholder words to make the
          section as long as possible while adding content that does not affect
          the way the page looks or appears either in mobile phones, tablets or
          even the largest screens.
        </div>
        <div className="w-1/2 mt-2 gap-2 flex place-items-center flex-row">
          <button className="border rounded-md py-2 px-3 grid place-items-center hover:font-semibold">
            <Link to="/register">Get Started</Link>
          </button>
          <button className="bg-slate-400 rounded-md  py-2 px-3 grid place-items-center hover:font-semibold">
            <Link to="/">Contact Us</Link>
          </button>
        </div>
      </section>
      <section className="mb-2 px-5 py-4">
        <h2 className="grid place-items-center mb-2 font-semibold text-xl sm:text-3xl">
          Services
        </h2>
        <div className="max-w-4xl mx-auto grid gap-5 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4">
          <div className="cursor-pointer hover:scale-105 rounded-md shadow-md py-5 px-5">
            <h3 className="font-semibold text-xl sm:text-2xl">
              Stock Market Insight
            </h3>
          </div>
          <div className="cursor-pointer hover:scale-105 rounded-md shadow-md py-5 px-5">
            <h3 className="font-semibold text-xl sm:text-2xl">
              Foreign Exchange Rates
            </h3>
          </div>
          <div className="cursor-pointer hover:scale-105 rounded-md shadow-md py-5 px-5">
            <h3 className="font-semibold text-xl sm:text-2xl">Crypto Trends</h3>
          </div>
          <div className="cursor-pointer hover:scale-105 rounded-md shadow-md py-5 px-5">
            <h3 className="font-semibold text-xl sm:text-2xl">
              Money Markets, Indices & Futures
            </h3>
          </div>
        </div>
      </section>
      <section
        name="newsletter" 
        className=" px-5 py-4 mb-2 max-w-4xl mx-auto border-t border-b"
      >
        <h2 className="text-xl font-semibold grid place-items-center">
          Subscribe to our newsletter
        </h2>
        <form className="flex flex-col gap-4 max-w-2xl mx-auto">
          <p className="text-base">
            Enter your email address to receive the latest updates everyday
            courtesy of us
          </p>
          <input
            className="py-2 px-4 border-b"
            type="email"
            placeholder="Enter Your Email"
            required
          />
          <button className="py-2 px-3 bg-slate-400 hover:font-semibold">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
