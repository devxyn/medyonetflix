/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center md:justify-between p-5 w-full z-20 absolute ${
        open ? "bg-black/80 transition-all ease-in duration-200" : "transition-all ease-out duration-200"
      } md:bg-transparent z-[99]`}>
      <Link to="/">
        <img className="h-14" src={logo} alt="logo" />
      </Link>
      <div className="absolute right-4 top-6 text-white cursor-pointer md:hidden" onClick={toggleOpen}>
        {open ? <IoClose size={24} /> : <IoMenu size={24} />}
      </div>
      <div className={`${open ? "flex " : "hidden"} flex-col transition-all ease-in duration-500 md:inline-block`}>
        <Link to="/browse" className=" text-center text-white font-bold my-4 py-2 md:mr-4 md:my-0">
          Browse Movies
          <span>
            <FaArrowRightLong className="hidden md:inline md:ml-2 " size={16} />
          </span>
        </Link>
        {user?.email ? (
          <div onMouseLeave={handleMouseLeave} className="flex flex-col gap-5 md:inline-block relative">
            <button onClick={handleToggleDropdown} className="py-2 px-5 text-white ml-2 rounded focus:outline-none">
              Account
            </button>

            {showDropdown && (
              <div className="absolute top-full left-2 bg-white border border-gray-200 py-2 px-5 rounded">
                <Link to="/account" className="block text-gray-800 hover:text-gray-600 py-1">
                  My List
                </Link>
                <button onClick={handleLogOut} className="block text-gray-800 hover:text-gray-600 py-1">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-5 md:inline-block">
            <Link to="/login">
              <button className="py-2 px-5 text-white ml-2  rounded">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="py-2 px-5 text-white ml-2 bg-red-600 rounded">Sign Up</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
