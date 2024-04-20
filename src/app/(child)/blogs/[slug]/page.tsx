//components
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import mdxComponents from "@/components/mdx-components";
//actions
import { getPostData } from "@/lib/actions/blog";
//types
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = params;
  // getdata
  const { frontmatter, content } = await getPostData(slug);
  console.log("frontmatter la ", frontmatter);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      siteName: "wilson.tv",
      description: frontmatter.excerpt,
      images: [frontmatter.cover_image, ...previousImages],
      type: "article",
      publishedTime: new Date(frontmatter.date).toISOString(),
      authors: ["Wilson"],
    },
  };
}

export default async function page({ params }) {
  const { slug }: { slug: string } = params;
  const { frontmatter, content } = await getPostData(slug);

  return (
    <div className="md:max-w-[820px] mx-auto ">
      <MDXRemote components={mdxComponents} source={content} />
    </div>
  );
}
