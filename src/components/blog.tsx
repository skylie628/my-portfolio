import React from "react";
import Link from "next/link";
import { PostsData } from "@/types";
export default function Blog({ data }: { data: PostsData }) {
  return (
    <article>
      <Link
        className="bg-black focus:outline focus:outline-blue-eye focus:outline-2 rounded-2xl overflow-hidden cursor-pointer group flex flex-col  "
        href={data.to}
      >
        <div className="md:h-[178px]  lg:h-[266px] " aria-hidden>
          <img
            src={data["cover_image"]}
            className="w-full h-full group-hover:scale-110   transition-transform duration-500 object-cover object-center"
          />
        </div>
        <div className="p-8 flex flex-col flex-1 group-hover:text-blue-eye">
          <div className="text-slate-gray  font-bold text-sm mt-2">
            JAVASCRIPT TIPS
          </div>
          <h2 className="text-2xl text-glyph-gray font-bold py-2">
            {data.title}
          </h2>

          <div className=" font-medium text-sm tracking-tight !text-glyph-gray py-2 flex-1">
            {data.excerpt}
          </div>
          <div className="text-slate-gray  font-bold text-sm mt-2">
            {data.date}
          </div>
        </div>
      </Link>
    </article>
  );
}
