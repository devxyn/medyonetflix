/* eslint-disable react/prop-types */

const Featured = ({ imgUrl, movie, height }) => {
  const isMobile = window.innerWidth < 768;

  const cutString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className={`w-full ${height} text-white`}>
      <div className="w-full h-full">
        <div className={`absolute w-full ${height} bg-gradient-to-r from-black`}></div>
        <img
          className="w-full h-full object-cover"
          src={`${imgUrl}original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">Watch Later</button>
          </div>
          <p className="text-gray-400 text-sm my-4">Released: {movie?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] text-gray-200">
            {isMobile ? cutString(movie?.overview, 180) : movie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
