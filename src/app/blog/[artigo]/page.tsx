import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { notFound } from "next/navigation";

import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import Link from "next/link";
import { XYZLogoWithLink } from "@/components/common/XYZLogoWithLink";
import { decodeHtmlEntities, scrollTo } from "@/utils/utils";
import { TrackingWrapper } from "@/components/common/TrackingWrapper";
import { ArticlePage } from "@/components/Blog/ArticlePage/ArticlePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ artigo: string }>;
}) {
  const { artigo } = await params;

  const article = await fetchArticle(artigo);

  if (!article) return {};

  return {
    title: `${article.title} | Blog do X`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Blog do X`,
      description: article.excerpt,
      images: [{ url: article.featuredImage }],
    },
  };
}

export default async function Artigo({
  params,
}: {
  params: Promise<{ artigo: string }>;
}) {
  const { artigo } = await params;
  const article = await fetchArticle(artigo);

  if (!article) return notFound();

  return (
    <div>
      <main>
        <Container sx={{ py: 4 }}>
          <XYZLogoWithLink href="/blog" width="5rem" />
        </Container>

        <ArticlePage article={article} />
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://xyzcoworking.com/wp-json/wp/v2/posts");
  const posts = await res.json();

  return posts.map((post: any) => ({
    artigo: post.slug,
  }));
}

async function fetchArticle(slug: string) {
  const res = await fetch(
    `https://xyzcoworking.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );

  if (!res.ok) return null;

  const data = await res.json();
  if (!data || data.length === 0) return null;

  const post = data[0];

  return {
    id: post.id,
    title: post.title.rendered,
    content: post.content.rendered,
    excerpt: post.excerpt.rendered,
    date: post.date,
    slug: post.slug,
    author: post._embedded?.author?.[0]?.name || "XYZ Coworking",
    category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Sem categoria",
    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    link: post.link,
  };
}
