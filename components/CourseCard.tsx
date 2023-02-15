import React from "react";
import Link from "next/link";
function CourseCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="flex flex-col bg-red-50 mx-3 my-4 p-6 rounded-md w-80">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="font-bold text-red-900 my-3 shadow shadow-red-900 w-fit px-2 rounded-lg text-xs bg-red-100">
        Specialization
      </p>
      <p>{description}</p>
      <Link
        href={`/courses${link}`}
        className="text-blue-600 underline cursor-pointer"
      >
        View Details
      </Link>
    </div>
  );
}

export default CourseCard;
