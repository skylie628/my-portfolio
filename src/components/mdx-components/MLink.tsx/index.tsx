import React from "react";
import Link from "next/link";
export default function MLink(props) {
  return (
    <Link {...props} className="text-blue-eye cursor-pointer hover:underline" />
  );
}
