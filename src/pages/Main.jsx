import { useLoaderData } from "react-router-dom";
import Featured from "../components/Featured";
import Row from "../components/Row";
import requests from "./../utils/request";

const Main = () => {
  const data = useLoaderData();
  const imgUrl = "https://www.themoviedb.org/t/p/";

  const movie = data[Math.floor(Math.random() * data.length)];

  return (
    <div>
      {/* Featured Movie on the top*/}
      <Featured imgUrl={imgUrl} movie={movie} height={"h-[550px]"} />
      <Row rowId="1" title="Popular" fetchUrl={requests.requestPopular} imgUrl={imgUrl} />
      <Row rowId="2" title="Top Rated" fetchUrl={requests.requestTopRated} imgUrl={imgUrl} />
      <Row rowId="3" title="Up Coming" fetchUrl={requests.requestUpcoming} imgUrl={imgUrl} />
    </div>
  );
};

export default Main;
