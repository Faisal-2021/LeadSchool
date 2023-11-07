"use client";

import { useState } from "react";
import Button from "./Button";
import Link from "next/link";

function PostalCodeform({}) {
  const [pincode, setPincode] = useState("");

  return (
    <form className="flex gap-4">
      <div className=" flex hover:shadow-md items-center space-x-5 bg-white  rounded-full  border-2 border-sky-300 px-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=" w-5 h-5 stroke-gray-300 inline-flex "
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>

        <input
          type="number"
          minLength={6}
          maxLength={6}
          min={6}
          className=" max-w-xs w-40 md:w-48 rounded-full  text-gray-500 font-medium h-10 outline-none "
          placeholder="Enter 6 Digit Pincode "
          required
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        {pincode && (
          <svg
            onClick={() => {
              setPincode("");
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" w-5 h-5 inline-flex hover:scale-125 hover:rotate-180 duration-500 ease-in stroke-red-200 hover:stroke-red-500"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
      </div>
      <Link href={`/${pincode}`}>
        <Button />
      </Link>
    </form>
    // </div>
  );
}

export default PostalCodeform;
