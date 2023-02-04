import React from "react";
import Image from "next/image";
import Link from "next/link";
function NewsCard({
  title,
  imgUrl,
  blogLink,
}: {
  title: string;
  imgUrl: string;
  blogLink: string;
}) {
  return (
    <Link href={blogLink} target="_blank">
      <figure className="relative cursor-pointer mx-6 my-4 ">
        <Image
          src={imgUrl}
          width="300"
          height="120"
          alt="img"
          className="relative rounded-md opacity-80"
        />
        <h2 className="absolute bottom-2 text-white text-lg font-medium text-center hover:underline">
          {title}
        </h2>
      </figure>
    </Link>
  );
}

export default NewsCard;
