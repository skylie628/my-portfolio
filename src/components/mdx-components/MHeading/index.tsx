import React, { ReactNode } from "react";

interface MHeadingProps {
  children?: ReactNode;
}

export default function MHeading(props: MHeadingProps) {
  return (
    <h1
      {...props}
      className="max-md:text-h1-md max-lg:text-h1-lg text-h1-xl   text-glyph-gray"
    />
  );
}
