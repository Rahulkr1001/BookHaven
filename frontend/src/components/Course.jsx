import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import list from "../../public/list.json";

const Course = () => {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white">
          <h1 className="text-2xl  md:text-4xl dark:bg-slate-900 dark:text-white">
            We're delighted to have you{" "}
            <span className="text-pink-500 dark:bg-slate-900 dark:text-white">
              {" "}
              Here! :)
            </span>
          </h1>
          <p className="mt-12 dark:bg-slate-900 dark:text-white">
            We invite you to explore our website and discover the perfect book
            for your next read. Don’t forget to sign up for our newsletter to
            stay updated on the latest arrivals and exclusive offers. Thank you
            for visiting Book Haven. Happy reading!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-2 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
