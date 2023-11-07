
export default function ZipcodePlaces({ places }) {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-5 text-base mx-5">
      {places?.map((place) => {
        return (
          <div
            key={Math.random()}
            className=" bg-slate-700 font-medium text-gray-100 shadow-lg shadow-black p-5 rounded-md ring-2 ring-slate-300 ring-offset-4"
          >
            <p>Place Name : {place["place name"]}</p>
            <p>longitude : {place.longitude}</p>
            <p>State : {place.state}</p>
            <p>state abbreviation : {place["state abbreviation"]}</p>
            <p>latitude : {place.latitude}</p>
          </div>
        );
      })}
    </div>
  );
}
