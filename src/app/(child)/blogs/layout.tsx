//components
import React from "react";
import Link from "next/link";
//types
import { Metadata } from "next";
//others
import { headers } from "next/headers";
import Breadcrumb from "@/components/breadcrumb";
export const metadata: Metadata = {
  title: "Khuong Dinh Blogs",
  description:
    "A little blog sharing my thoughts and experiences about information technology.",
  authors: [{ name: "Wilson" }],
};
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-0 md:px-40  mark  max-w-[1280px] mx-auto bg-charcoal-black ">
      <div className="py-12 px-5 ">
        <Breadcrumb />
      </div>
      <div className="px-5"> {children}</div>
    </div>
  );
}
