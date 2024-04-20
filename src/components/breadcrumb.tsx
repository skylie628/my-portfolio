"use client";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Breadcrumb() {
  const pathname = usePathname();
  const segments: string[] = pathname.split("/").filter((item) => item !== "");
  console.log(segments);
  const breadcrumb: { to: string; name: string; className: string }[] =
    segments.map((item, index) => ({
      to: `/${segments.slice(0, index + 1).join("/")}`,
      name: item.charAt(0).toLocaleUpperCase() + item.slice(1),
      className:
        index === segments.length - 1
          ? "text-2xl cursor-default "
          : "text-2xl text-red-orange hover:text-silver underline",
    }));
  breadcrumb.unshift({
    to: "/",
    name: "Khuong Dinh",
    className: "text-2xl text-red-orange hover:text-silver underline",
  });
  return (
    <div className="flex  items-center">
      {breadcrumb.map((item, index) => (
        <>
          <Link key={index} href={item.to} className={item.className}>
            {item.name}
          </Link>
          {index !== breadcrumb.length - 1 && (
            <ChevronRightIcon className="inline-block text-2xl text-dimgray mx-1 h-5 w-5" />
          )}
        </>
      ))}
    </div>
  );
}
