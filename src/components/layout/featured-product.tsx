import React, { Children } from "react";
import Section from "./section";
interface FeaturedProductProps {
  name: string;
  desc: string;
  teamSize: number;
  technical: string;
  Children: React.ReactNode;
}
export default function FeaturedProduct({
  name,
  desc,
  teamSize,
  technical,
  children,
}: FeaturedProductProps) {
  return (
    <Section>
      <div className="px-6">
        <h2 className="text-2xl">{name}</h2>
        <div className="mt-5 text-sm font-normal text-dimgray">
          <p>{desc}</p>
          <p>
            {teamSize === 1
              ? "Personal Project"
              : `Group of ${teamSize} members`}
          </p>
          <p>{technical}</p>
        </div>
      </div>
      {children}
    </Section>
  );
}
