import React from "react";

function CourseCard() {
  return (
    <div className="flex flex-col bg-red-50 mx-3 my-4 p-6 rounded-md w-80">
      <h1 className="font-bold text-xl">Web 3.0 (Blockchain) and Metaverse</h1>
      <p className="font-bold text-red-900 my-3 shadow shadow-red-900 w-fit px-2 rounded-lg text-xs bg-red-100">
        Specialization
      </p>
      <p>
        This Web 3.0 and Metaverse specialization focuses on developing
        full-stack Web 3.0 and Metaverse experiences...
      </p>
      <p className="text-blue-600 underline cursor-pointer">View Details</p>
    </div>
  );
}

export default CourseCard;
