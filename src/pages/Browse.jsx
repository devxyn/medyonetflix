/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import requests from "../utils/request";
import Movies from "../components/Movies";

const Browse = () => {
  const data = useLoaderData();
  const [genre, setGenre] = useState("");
  const [movieList, setMovieList] = useState([]);
  const imgUrl = "https://www.themoviedb.org/t/p/";

  const handleGenre = (e) => {
    setGenre(e.target.value);
  };

  const loadGenre = async () => {
    try {
      const results = await axios.get(`${requests.movieListEndpoint}${genre}`);
      const data = results.data;
      setMovieList(data.results);
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    loadGenre();
  }, [genre]);

  console.log(movieList);

  return (
    <div className="text-white h-screen p-4 pt-20">
      <div>
        <h2 className="text-2xl">Browse Movies</h2>
        <label htmlFor="genre">Genre: </label>
        <select className="text-white bg-transparent" name="genre" id="genre" onChange={handleGenre}>
          {data.map((item) => (
            <option className="text-black" key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-0 md:gap-4 justify-center items-center">
        {movieList.map((item) => (
          <Link to={`/movie/${item.id}`} key={item.id}>
            <Movies item={item} imgUrl={imgUrl} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Browse;
