const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-between p-4 w-full absolute z-[99] bg-transparent">
      <h1 className="text-red-600 text-4xl font-bold">MEDYO NETFLIX</h1>
      <div className="hidden md:inline-block">
        <input
          className="rounded py-2 px-4 mt-4 md:mt-0 md:mr-4 bg-transparent border-2 border-black/40 text-white"
          type="text"
          placeholder="Search"
          id="search"
        />
        <div className="inline-block">
          <button className="py-2 px-5 text-white ml-2 bg-red-600 rounded">Sign In</button>
          <button className="py-2 px-5 text-white ml-2 rounded">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
