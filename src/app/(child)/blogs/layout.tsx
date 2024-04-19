import React from "react";
import { cn } from "@/lib/utils";
import { headers } from "next/headers";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb";
export default function layout({ children }: { children: React.ReactNode }) {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const token = fullUrl.split("/").slice(3) || [];
  const breadcrumb = token.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  );
  return (
    <div className="px-0 md:px-40 text-silver">
      <div className="mark max-w-[1280px] "></div>
      <div className="py-10 md:py-15 px-3 md:px-0">
        <Breadcrumb />
      </div>
      {children}
    </div>
  );
}
