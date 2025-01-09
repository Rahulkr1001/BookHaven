import React from "react";
import { Link } from "react-router-dom"; // Link component import karte hain
import { useForm } from "react-hook-form"; // useForm hook import karte hain
import axios from "axios"; // axios library import karte hain
import toast from "react-hot-toast"; // toast notification import karte hain

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // useForm hook se register, handleSubmit aur errors ko destructure karte hain

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }; // userInfo object create karte hain form data se

    await axios
      .post("https://bookstore-app-gjkm.onrender.com/user/login", userInfo) // Login API call karte hain
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully"); // Success toast show karte hain
          document.getElementById("my_modal_3").close(); // Modal close karte hain
          setTimeout(() => {
            window.location.reload(); // Page reload karte hain
            localStorage.setItem("Users", JSON.stringify(res.data.user)); // User data localStorage me save karte hain
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message); // Error toast show karte hain
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal"> {/* Modal dialog define karte hain */}
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Agar form me button hoga to modal close hoga */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕ {/* Modal close button */}
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })} // Email input field register karte hain
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required {/* Error message */}
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })} // Password input field register karte hain
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required {/* Error message */}
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login {/* Login button */}
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup {/* Signup link */}
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login; // Login component export karte hain
