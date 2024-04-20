import React from "react";

export default function MSubHeading(props) {
  return (
    <h2
      {...props}
      className="max-md:text-h2-md max-lg:text-h2-lg text-h2-xl   text-glyph-gray"
    />
  );
}
