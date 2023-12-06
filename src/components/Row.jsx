/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "./Movies";

const Row = ({ title, fetchUrl, imgUrl }) => {
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

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((item, id) => (
            <Movies item={item} key={id} imgUrl={imgUrl} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
