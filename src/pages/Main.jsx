import Featured from "../components/Featured";
import Row from "../components/Row";
import requests from "./../utils/request";

const Main = () => {
  const imgUrl = "https://www.themoviedb.org/t/p/";

  return (
    <div>
      <Featured imgUrl={imgUrl} />
      <Row rowId="1" title="Popular" fetchUrl={requests.requestPopular} imgUrl={imgUrl} />
      <Row rowId="2" title="Top Rated" fetchUrl={requests.requestTopRated} imgUrl={imgUrl} />
      <Row rowId="3" title="Up Coming" fetchUrl={requests.requestUpcoming} imgUrl={imgUrl} />
    </div>
  );
};

export default Main;
