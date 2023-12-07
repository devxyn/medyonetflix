import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center md:justify-between p-4 w-full z-20 absolute ${
        open ? "bg-black/80 transition-all ease-in duration-200" : "transition-all ease-out duration-200"
      } md:bg-transparent`}>
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold">MEDYO NETFLIX</h1>
      </Link>
      <div className="absolute right-4 top-6 text-white cursor-pointer md:hidden" onClick={toggleOpen}>
        {open ? <IoClose size={24} /> : <IoMenu size={24} />}
      </div>
      <div className={`${open ? "flex " : "hidden"} flex-col transition-all ease-in duration-500 md:inline-block`}>
        <input
          className="rounded py-2 px-4 mt-4 mb-5 md:mt-0 md:mr-4 bg-transparent border-2 border-white/50 text-white"
          type="text"
          placeholder="Search"
          id="search"
        />
        <div className="flex flex-col gap-5 md:inline-block">
          <button className="py-2 px-5 text-white ml-2 bg-red-600 rounded">Sign In</button>
          <button className="py-2 px-5 text-white ml-2 rounded">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
