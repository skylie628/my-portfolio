import React from "react";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="mark w-full h-full max-w-[1280px] px-0 md:px-40 ">
      <div className="py-10 md:py-15 px-3 md:px-0 ">{children}</div>
    </section>
  );
}
