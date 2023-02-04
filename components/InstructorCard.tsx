import React from "react";
import Image from "next/image";
function InstructorCard({
  imgUrl,
  name,
  details,
}: {
  imgUrl: string;
  name: string;
  details: string;
}) {
  return (
    <div className="mx-10 my-8 flex py-4 flex-col items-center rounded-lg shadow-md shadow-gray-200 w-[230px]">
      <Image
        src={imgUrl}
        width="150"
        height="80"
        alt="dp"
        className="rounded-full shadow shadow-black"
      />
      <h1 className="font-bold text-center mt-3">{name}</h1>
      <p className="text-center w-3/4 font-medium text-gray-400">{details}</p>
    </div>
  );
}

export default InstructorCard;
