import axios from "axios";

const key = "514ad4d83eff3188d4f518c6b7570826";

const movieLoader = async ({ params }) => {
  const urlEndpoint = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${key}`;
  try {
    const results = await axios.get(urlEndpoint);
    return results.data;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default movieLoader;
