import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
      setMovies(doc.data()?.savedShow);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedId) => {
    try {
      const result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShow: result,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mt-28 md:mt-32 flex flex-col md:flex-row md:flex-wrap md:gap-4 items-center justify-center">
        {movies.map((item, id) => (
          <div key={id}>
            <div className="w-[280px] md:w-[240px] relative p-2">
              <img
                className="w-full h-auto block object-cover"
                src={`https://www.themoviedb.org/t/p/original/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <div className="whitespace-normal text-xs md:text-sm font-bold flex flex-col flex-wrap justify-center items-center h-full text-center p-4">
                  <p className="mb-4">{item?.title}</p>
                  <p
                    onClick={() => {
                      deleteShow(item.id);
                    }}
                    className="absolute text-gray-300 top-4 right-4 cursor-pointer">
                    <IoIosClose size={32} />
                  </p>
                </div>
              </div>
              <h2 className="w-full text-white text-center truncate text-sm font-semibold mt-2">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SavedShows;
