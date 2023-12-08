/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { IoWarningOutline } from "react-icons/io5";
import bg from "../assets/bg.jpg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover" src={bg} alt="banner" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="absolute h-screen w-full justify-center pt-20 items-center">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h2 className="text-3xl font-bold">Sign In</h2>
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
                {error && (
                  <div className="flex items-center justify-start text-white mb-4 p-2 bg-red-600/20 rounded">
                    <IoWarningOutline className="mr-1" size={16} />
                    <p className="text-sm">Invalid credentials! Please try again.</p>
                  </div>
                )}
                <div className="flex justify-between items-center text-sm text-gray-600 ">
                  <p className="hover:text-white">
                    <input className="mr-2" type="checkbox" name="remember" id="remember" />
                    Remember me
                  </p>
                  <p className="hover:text-white">Need help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600 mr-1">Don't have an account? </span> <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
