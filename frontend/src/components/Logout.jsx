import React from "react";
import { useAuth } from "../context/AuthProvider"; // AuthProvider se useAuth hook import karte hain
import toast from "react-hot-toast"; // Notifications ke liye react-hot-toast import karte hain

function Logout() {
  const [authUser, setAuthUser] = useAuth(); // Auth context se authUser aur setAuthUser ko use karte hain

  const handleLogout = () => {
    try {
      // User ko logout karne ke liye authUser state ko update karte hain
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users"); // localStorage se user data remove karte hain
      toast.success("Logout successfully"); // Successful logout ke liye toast notification

      // 3 seconds ke baad page reload karte hain
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      // Agar error aaye to error message show karte hain
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout} // Logout button click event handle karte hain
      >
        Logout
      </button>
    </div>
  );
}

export default Logout; // Logout component export karte hain
