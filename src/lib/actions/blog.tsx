"use server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
//types
import { PostsData } from "@/types";
const getAllBlogPosts = (): PostsData[] => {
  const postsDirectory = path.join(process.cwd(), "posts");
  //get list of file names inside post folder
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, "");
      //get exactly path of post in folder directory
      const fullPath = path.join(postsDirectory, fileName);
      //get file contents
      const fileContents = fs.readFileSync(fullPath, "utf8");
      //parse metadata of post
      const { date, title, excerpt } = matter(fileContents).data;
      return {
        id,
        slug: id,
        to: `/blogs/${id}`,
        date,
        title,
        excerpt,
      };
    })
    //sort post by date descending
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    //add index to each post
    .map((item, index) => ({
      ...item,
      index: fileNames.length - index,
    }));

  return allPostsData;
};
const getRelatedPost = (): string => {
  const blogPosts = getAllBlogPosts();
  const mdxRelatedPost = blogPosts
    .map((post) => `[${post.title}](${post.to})  `)
    .join(" \n");
  return mdxRelatedPost;
};
const getPostData = async (
  slug: string
): Promise<{
  frontmatter: { [key: string]: any };
  slug: string;
  content: string;
}> => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const MDXRelatedPost = getRelatedPost();

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const MDXContentWithFooter = `${content}
  ## Related Post
  ${MDXRelatedPost}
  `;

  return { frontmatter, slug, content: MDXContentWithFooter };
};
export { getAllBlogPosts, getPostData };
