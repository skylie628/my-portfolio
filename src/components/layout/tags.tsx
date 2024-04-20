import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface TagsProps {
  title: string;
  tags: string[] | { title: string; to: string }[];
  isLink?: boolean;
}
export default function Tags({ title, tags, isLink = false }: TagsProps) {
  const tagClasses = isLink
    ? "text-red-orange underline hover:text-silver hover:cursor-pointer transition duration-[300] ease-in-out"
    : "";
  return (
    <div className="w-full pt-10 nick pl-6 relative leading-normal">
      <h2 className="  text-xl sm:text-2xl md:text-3xl  text-3xl text-silver leading-normal">
        {title}
      </h2>
      <ul>
        {tags.map((tag, index) => (
          <li
            className={cn(
              "inline-block text-lg  sm:text-xl md:text-2xl  text-dimgray "
            )}
            key={index}
          >
            {isLink && typeof tag === "object" && (
              <Link href={tag.to} className={tagClasses}>
                {tag.title}
              </Link>
            )}
            {!isLink && typeof tag === "string" && (
              <span className={tagClasses}>{tag}</span>
            )}
            , &nbsp;
          </li>
        ))}
      </ul>
    </div>
  );
}
