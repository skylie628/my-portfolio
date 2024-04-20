import React from "react";

export default function MHeading(props) {
  return (
    <h1
      {...props}
      className="max-md:text-h1-md max-lg:text-h1-lg text-h1-xl   text-glyph-gray"
    />
  );
}
