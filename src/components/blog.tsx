import React from "react";
import Link from "next/link";
interface BlogProps {
  data: {
    id: number;
    date: string;
    title: string;
    desc: string;
    slug: string;
    to: string;
  };
}
export default function Blog({ data }: BlogProps) {
  return (
    <article>
      <Link
        className="text-2xl hover:text-orange hover:underline "
        href={data.to}
      >
        <span className="text-red-orange"> #{data.id}</span> {data.title}
      </Link>
      <div className=" font-normal text-white">{data.desc}</div>
      <div className="text-dimgray font-normal text-md">
        - updated on {data.date}
      </div>
    </article>
  );
}
