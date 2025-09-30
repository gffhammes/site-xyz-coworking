import { Box, Container, Stack, Typography } from "@mui/material";

import { notFound } from "next/navigation";

import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import Link from "next/link";
import { XYZLogoWithLink } from "@/components/common/XYZLogoWithLink";

const options = {
  replace: (domNode: any) => {
    if (domNode.type === "tag") {
      switch (domNode.name) {
        case "p":
          return (
            <Typography
              component="p"
              sx={{
                marginBlockStart: ".5rem",
                marginBlockEnd: "1rem",
              }}
            >
              {domToReact(domNode.children, options)}
            </Typography>
          );
        case "h1":
          return (
            <Typography variant="h1">
              {domToReact(domNode.children, options)}
            </Typography>
          );
        case "h2":
          return (
            <Typography
              variant="h2"
              sx={{
                marginBlockStart: ".5rem",
                marginBlockEnd: "1rem",
                fontSize: "2rem !important",
              }}
            >
              {domToReact(domNode.children, options)}
            </Typography>
          );
        case "h3":
          return (
            <Typography
              variant="h3"
              sx={{
                marginBlockStart: ".5rem",
                marginBlockEnd: "1rem",
                fontSize: "1.5rem",
              }}
            >
              {domToReact(domNode.children, options)}
            </Typography>
          );
        case "h4":
          return (
            <Typography variant="h4">
              {domToReact(domNode.children, options)}
            </Typography>
          );
        case "h5":
          return (
            <Typography variant="h5">
              {domToReact(domNode.children, options)}
            </Typography>
          );
        case "h6":
          return (
            <Typography variant="h6">
              {domToReact(domNode.children, options)}
            </Typography>
          );
        case "strong":
          return <strong>{domToReact(domNode.children, options)}</strong>;
        case "a":
          return (
            <Link href={domNode.attribs.href} target="_blank">
              <Typography component="span" sx={{ textDecoration: "underline" }}>
                {domToReact(domNode.children, options)}
              </Typography>
            </Link>
          );
        case "img":
          return (
            <img
              src={domNode.attribs.src}
              alt={domNode.attribs.alt || ""}
              style={{ maxWidth: "100%" }}
            />
          );
        case "ul":
          return (
            <Box component="ul" pl={4} mb={2}>
              {domToReact(domNode.children, options)}
            </Box>
          );
        case "ol":
          return (
            <Box component="ol" pl={4} mb={2}>
              <Typography>{domToReact(domNode.children, options)}</Typography>
            </Box>
          );
        case "li":
          return (
            <Box component="li" mb={1}>
              <Typography>{domToReact(domNode.children, options)}</Typography>
            </Box>
          );

        case "span":
          return (
            <Typography
              component="span"
              // style={domNode.attribs.style}
            >
              {domToReact(domNode.children, options)}
            </Typography>
          );
        default:
          return undefined;
      }
    }

    // Texto cru só se **não tiver pai tag** (ou seja, texto solto)
    if (
      domNode.type === "text" &&
      domNode.data.trim() &&
      (!domNode.parent || domNode.parent.type !== "tag")
    ) {
      return <Typography component="span">{domNode.data}</Typography>;
    }
  },
};

export async function generateMetadata({
  params,
}: {
  params: { artigo: string };
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
  params: { artigo: string };
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

        <Box
          sx={{
            height: "30rem",
            width: "100%",
            backgroundColor: "#333333",
            py: 4,
          }}
        >
          <Container sx={{ height: "100%", mt: -10 }}>
            <Stack height="100%" justifyContent="center">
              <Typography color="primary" textTransform="uppercase">
                {article.category}
              </Typography>

              <Typography variant="h1" color="white" fontWeight={500}>
                {article.title}
              </Typography>

              <Typography color="primary">
                Publicado em {article.date} • Escrito por {article.author}
              </Typography>
            </Stack>
          </Container>
        </Box>

        <Container>
          <Stack gap={10}>
            <Box
              sx={{
                position: "relative",
                height: "30rem",
                width: "100%",
                mt: -10,
              }}
            >
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                objectFit="cover"
              />
            </Box>

            <Box>{parse(article.content, options)}</Box>
          </Stack>
        </Container>
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
