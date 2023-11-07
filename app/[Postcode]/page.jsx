
import ZipcodePlaces from "@/components/places";

async function getData(zipcode) {
  const res = await fetch(`https://api.zippopotam.us/in/${zipcode}`);

  if (!res.ok) {
    return "Pincode not found";
  }

  
  return res.json();

}

export default async function PostalCode({ params }) {

  const data = await getData(params.Postcode);


  return (
    <div className=" my-28 md:my-20 text-lg font-semibold text-gray-800 ">
      {!data.country ? (
        <p className="flex items-center justify-center py-5 text-red-500 text-center text-2xl animate-pulse duration-1000 ease-in-out">
          {data}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" inline-flex h-7 w-7 mx-2 animate-wiggle"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
            <line x1="9" x2="9.01" y1="9" y2="9" />
            <line x1="15" x2="15.01" y1="9" y2="9" />
          </svg>
        </p>
      ) : (
        <>
          <p>Post code : {data["post code"]} </p>
          <p>Country : {data.country}</p>
          <p>country abbreviation : {data["country abbreviation"]}</p>
          <ZipcodePlaces places={data.places} />
        </>
      )}
    </div>
  );
}
