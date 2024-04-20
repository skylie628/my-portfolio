import MCodeBlock from "./MCodeBlock";
import MTypography from "./MTypography";
import MHeading from "./MHeading";
import MSubHeading from "./MSubHeading";
import MLink from "./MLink.tsx";

const mdxComponents = {
  code: MCodeBlock,
  p: MTypography,
  h1: MHeading,
  h2: MSubHeading,
  a: MLink,
};

export default mdxComponents;
