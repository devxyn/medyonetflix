import axios from "axios";
import requests from "../utils/request";

const genreLoader = async () => {
  try {
    const result = await axios.get(`${requests.genreEndpoint}`);
    const data = await result.data;
    return data.genres;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default genreLoader;
