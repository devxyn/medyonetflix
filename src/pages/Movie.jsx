import { useLoaderData } from "react-router-dom";

const Movie = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="text-white">
      <h1>{data.title}</h1>
    </div>
  );
};

export default Movie;
