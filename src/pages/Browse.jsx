/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import requests, { key } from "../utils/request";
import Movies from "../components/Movies";
import { CiSearch } from "react-icons/ci";

const Browse = () => {
  // eslint-disable-next-line no-unused-vars
  const data = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [genre, setGenre] = useState("");
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState();
  const [movieList, setMovieList] = useState([]);
  const imgUrl = "https://www.themoviedb.org/t/p/";

  // const handleGenre = (e) => {
  //   setGenre(e.target.value);
  // };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      loadSearch();
    }
  };

  const handleSearchQuery = (e) => {
    if (search === "") {
      setSearchData();
    }
    setSearch(e.target.value);
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

  const loadSearch = async () => {
    try {
      const results = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${key}`);
      const data = results.data;
      setSearchData(data.results);
    } catch (error) {
      throw new Error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    loadGenre();
  }, [genre]);

  return (
    <div className="text-white h-screen p-8 pt-24">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">Browse Movies</h2>
        <div className="flex flex-row justify-center items-center relative">
          <input
            className="text-white px-6 py-2 rounded bg-transparent active:bg-transparent border border-white w-full relative"
            type="text"
            id="search"
            name="search"
            placeholder="Search movies"
            onChange={handleSearchQuery}
            onKeyDown={handleKeyPress}
          />
          <CiSearch className="absolute right-2 cursor-pointer" onClick={loadSearch} size={24} />
        </div>
        {/* <div className="flex justify-between p-8">
          <div>
            <label htmlFor="genre">Genre: </label>
            <select className="text-white bg-transparent" name="genre" id="genre" onChange={handleGenre}>
              {data.map((item) => (
                <option className="text-black" key={item?.id} value={item?.name}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>
        </div> */}
      </div>
      {searchData && search && (
        <div>
          <h2 className="m-4 text-2xl">
            Search results for <span className="font-bold">{search}</span>
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap gap-0 md:gap-4 justify-center items-center">
            {searchData.map((item) => (
              <Link to={`/movie/${item?.id}`} key={item?.id}>
                <Movies item={item} imgUrl={imgUrl} />
              </Link>
            ))}
          </div>
        </div>
      )}
      {!search && (
        <div className="flex flex-col md:flex-row flex-wrap gap-0 md:gap-4 justify-center items-center">
          {movieList.map((item) => (
            <Link to={`/movie/${item?.id}`} key={item?.id}>
              <Movies item={item} imgUrl={imgUrl} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Browse;
