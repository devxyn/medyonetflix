import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center md:justify-between p-5 w-full absolute z-[99] ${
        open && "bg-black/80 duration-500 ease-in"
      }  md:bg-transparent`}>
      <h1 className="text-red-600 text-4xl font-bold">MEDYO NETFLIX</h1>
      <div onClick={toggleOpen} className="absolute right-4 top-7 md:hidden">
        {open ? (
          <IoClose className="text-white cursor-pointer " size={24} />
        ) : (
          <IoMenu className="text-white cursor-pointer " size={24} />
        )}
      </div>
      <div
        className={`flex flex-col justify-center bg-black/80 md:bg-transparent w-full h-80 gap-2 absolute md:inline-block transition-all duration-500 ease-in ${
          open ? "top-20" : "top-[-700px]"
        } `}>
        <input
          className="hidden md:block rounded py-2 px-4 mt-4 md:mt-0 md:mr-4 bg-transparent border-2 border-black/40 text-white"
          type="text"
          placeholder="Search"
          id="search"
        />
        <div className="flex flex-col w-full h-full justify-center items-center gap-8 md:inline-block">
          <button className="w-[70%] py-2 px-5 text-white ml-2 bg-red-600 rounded">Sign In</button>
          <button className="w-[70%] py-2 px-5 text-white ml-2 border border-white rounded">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
