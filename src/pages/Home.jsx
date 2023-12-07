import { Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
