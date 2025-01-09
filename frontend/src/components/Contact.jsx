import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utils/utils";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://bookstore-app-gjkm.onrender.com/contact', data); // Update the URL if necessary
      toast.success(response.data.message); // Display the success message
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + error.response.data.message); // Display the error message
      } else {
        toast.error("An unexpected error occurred"); // Display a generic error message
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-6 pt-5 bg-base-100 flex items-center justify-center min-h-screen dark:bg-slate-900 dark:text-white">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md dark:bg-slate-900 dark:text-white">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:bg-slate-900 dark:text-white">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:bg-slate-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="dark:bg-slate-800 dark:text-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:bg-slate-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="dark:bg-slate-800 dark:text-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:bg-slate-900 dark:text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="dark:bg-slate-800 dark:text-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("message", { required: true })}
              />
              {errors.message && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div>
              <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
