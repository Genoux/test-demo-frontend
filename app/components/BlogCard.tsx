import React from "react";
import Image from "next/image";

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

interface BlogCardProps {
  title?: string;
  description?: string;
  author?: string;
  date?: number;
  thumbnail?: string;
  tag?: string;
}

const BlogCard = ({
  title = "Example Title",
  description = "Example description",
  author = "Unknown Author",
  date = 0,
  thumbnail = "default-thumbnail.jpg",
  tag = "General",
}: BlogCardProps) => {
  return (
    <div className="max-w-[900px] h-auto w-full bg-white rounded-sm shadow-md flex flex-col md:flex-row gap-5">
      <Image
        src={thumbnail}
        alt={thumbnail}
        sizes="100vw"
        width={500}
        height={300}
        className="rounded-sm md:w-2/3 h-auto w-full "
      />
      <div className="flex flex-col gap-4 justify-between h-full w-full py-5 px-5 md:py-10 md:pr-20">
        <div className="flex w-full flex-col gap-2">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h3>
          <p className="text-sm md:text-[15px] font-normal text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-row justify-between w-full items-center ">
          <h3 className="text-sm md:text-base font-medium text-gray-800">
            {author}
          </h3>
          <span className="text-sm md:text-base font-medium text-gray-600 bg-gray-200 rounded-full px-3 py-1">
            {tag}
          </span>
        </div>
        <span className="text-sm md:text-base font-light text-gray-500">
          {formatDate(date)}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;