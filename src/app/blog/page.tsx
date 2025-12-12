import { Stack } from "@mui/material";
import { BlogTest } from "@/components/Blog/BlogTest";
import { Metadata } from "next";
import { BlogHeroSection } from "@/components/Blog/BlogHeroSection";

export const metadata: Metadata = {
  title: "Blog do X",
  description:
    "Descubra conteúdos sobre empreendedorismo, gestão, coworking e produtividade. Dicas práticas e insights para transformar sua rotina profissional e pessoal.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/light-theme-favicon.ico",
        href: "/images/light-theme-favicon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/dark-theme-favicon.ico",
        href: "/images/dark-theme-favicon.ico",
      },
    ],
  },
  verification: {
    google: "BUPbm-P0z-x4MGsnxgx1zKXwFSOTUTmZAXXtR2Yx-e8",
  },
};

export default async function Blog() {
  const res = await fetch(
    "https://xyzcoworking.com/wp-json/wp/v2/posts?per_page=100&_embed",
    { next: { revalidate: 60 } } // ISR: revalida a cada 60s
  );
  const data = await res.json();

  const posts = data.map((post: any) => ({
    id: post.id,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    date: post.date,
    slug: post.slug,
    author: post._embedded?.author?.[0]?.name || "XYZ Coworking",
    category: post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Sem categoria",
    featuredImage: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "",
    link: post.link,
  }));

  return (
    <div>
      <main>
        <Stack>
          <BlogHeroSection />

          <BlogTest posts={posts} />
        </Stack>
      </main>
    </div>
  );
}
