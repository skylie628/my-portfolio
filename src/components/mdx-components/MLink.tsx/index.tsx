import { ReactNode } from "react";
import Link from "next/link";
interface MLinkProps {
  children?: ReactNode;
  href: string | undefined;
}
export default function MLink(props: MLinkProps) {
  const { href } = props;
  if (typeof href === "string") {
    return (
      <Link
        {...props}
        href={href}
        className="text-blue-eye cursor-pointer hover:underline"
      />
    );
  }
  return <span {...props}></span>;
}
