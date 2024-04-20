import { ReactNode } from "react";

interface MTypographyProps {
  children?: ReactNode;
}
const MTypography = (props: MTypographyProps) => {
  return (
    <p {...props} className="my-3 text-base text-glyph-gray font-normal" />
  );
};

export default MTypography;
