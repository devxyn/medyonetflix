/* eslint-disable react/prop-types */
const Movies = ({ item, imgUrl }) => {
  console.log(item);
  return (
    <div>
      <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  cursor-pointer relative p-2">
        <img className="w-full h-auto block" src={`${imgUrl}w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <div className="whitespace-normal text-xs md:text-sm font-bold flex flex-col flex-wrap justify-center items-center h-full text-center p-4">
            <p className="mb-4">{item?.title}</p>
            <p className="text-xs">{item?.release_date.slice(0, 4)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
