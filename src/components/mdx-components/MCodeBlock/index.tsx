import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
interface MCodeBlockProps {
  children?: ReactNode;
}
const MCodeBlock = (props: MCodeBlockProps) => {
  return (
    <SyntaxHighlighter
      showLineNumbers
      language="javascript"
      style={{ ...dracula, backgroundColor: "#111!important" }}
      {...props}
      className="font-normal rounded-md p-5 my-5 overflow-x-auto bg-nones !bg-[#111]"
    />
  );
};

export default MCodeBlock;
