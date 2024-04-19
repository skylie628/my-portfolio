import React from "react";
import Blog from "@/components/blog";
export default function page() {
  const mockData = [
    {
      id: 1,
      date: "2022-01-01",
      title: "Redux, Jotai, Zustand, what is the differences?",
      desc: "How to dispay new features in a blog?",
      slug: "first-blog",
    },
    {
      id: 2,
      date: "2022-01-02",
      title: "Second blog",
      desc: "This is the second blog",
      slug: "second-blog",
    },
    {
      id: 3,
      date: "2022-01-03",
      title: "Third blog",
      desc: "This is the third blog",
      slug: "third-blog",
    },
    {
      id: 4,
      date: "2022-01-04",
      title: "Fourth blog",
      desc: "This is the fourth blog",
      slug: "fourth-blog",
    },
    {
      id: 5,
      date: "2022-01-05",
      title: "Fifth blog",
      desc: "This is the fifth blog",
      slug: "fifth-blog",
    },
  ];
  return (
    <div className="flex gap-5 flex-col p-5">
      {mockData.map((item) => (
        <Blog key={item.slug} data={{ ...item, to: `blogs/${item.slug}` }} />
      ))}
    </div>
  );
}
