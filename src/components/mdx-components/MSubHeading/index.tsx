import { ReactNode } from "react";

interface MSubHeadingProps {
  children?: ReactNode;
}
export default function MSubHeading(props: MSubHeadingProps) {
  return (
    <h2
      {...props}
      className="max-md:text-h2-md max-lg:text-h2-lg text-h2-xl   text-glyph-gray"
    />
  );
}
