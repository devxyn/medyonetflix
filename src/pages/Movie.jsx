import { useLoaderData } from "react-router-dom";
import Featured from "../components/Featured";

const Movie = () => {
  const data = useLoaderData();
  const imgUrl = "https://www.themoviedb.org/t/p/";

  return (
    <div>
      <div>
        <Featured movie={data} imgUrl={imgUrl} height={"h-screen"} />
      </div>
    </div>
  );
};

export default Movie;
