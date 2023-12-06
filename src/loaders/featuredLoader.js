import axios from "axios";
import requests from "../utils/request";

const featuredLoader = async () => {
  try {
    const response = await axios.get(requests.requestPopular);
    const data = await response.data;
    return data.results;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
};

export default featuredLoader;
