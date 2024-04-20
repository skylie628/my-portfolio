import React from "react";
import Blog from "@/components/blog";
import { getAllBlogPosts } from "@/lib/actions/blog";
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
  const postData = getAllBlogPosts();
  return (
    <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-10 flex-col mt-5  py-10">
      {postData.map((item, index) => (
        <Blog key={item.slug} data={item} />
      ))}
    </div>
  );
}
