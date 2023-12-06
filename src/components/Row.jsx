/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "./Movies";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchUrl, imgUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(fetchUrl);
        const data = await response.data;
        setMovies(data.results);
      };
      fetchData();
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  }, [fetchUrl]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          className="bg-white left-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={"slider" + rowId}
          className="flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((item, id) => (
            <Movies item={item} key={id} imgUrl={imgUrl} />
          ))}
        </div>
        <MdChevronRight
          className="bg-white right-2 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
          onClick={slideRight}
        />
      </div>
    </>
  );
};

export default Row;
