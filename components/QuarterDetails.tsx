import React, { useState } from "react";
import Image from "next/image";
function QuarterDetails({ title, core, details }: any) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleDetails() {
    setShowDetails(!showDetails);
  }
  return (
    <div className="w-full my-6 border-[0.5px] shadow-gray-300 shadow-md px-6 py-3 rounded-lg transition duration-500">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">
          {title}
          {core && <span className="text-red-700"> (Core)</span>}
        </h1>
        <Image
          src={"/assets/slide-up.png"}
          alt="arrow"
          width="30"
          height="30"
          className={`cursor-pointer transition-all ease-in duration-300 ${
            showDetails == false ? "transform rotate-180" : "rotate(0deg)"
          }`}
          onClick={toggleDetails}
        />
      </div>
      <div
        className={`transition-all ease-in duration-300 ${
          showDetails == true ? "flex flex-col " : "hidden"
        } pt-3 mt-3 border-t-[1px] border-gray-300`}
      >
        {details.map((detail: string, index: number) => {
          return (
            <p key={index}>
              {" "}
              <span className="text-red-800"> • </span> {detail}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default QuarterDetails;
