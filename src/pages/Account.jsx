import bg from "../assets/bg.jpg";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img className="absolute w-full h-[200px] md:h-[300px]  object-cover" src={bg} alt="banner" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[10%] md:top-[20%] p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Movies</h1>
          <SavedShows />
        </div>
      </div>
    </>
  );
};

export default Account;
