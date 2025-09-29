import { Box, Container, Stack, Typography } from "@mui/material";

import { notFound } from "next/navigation";

import { blogArticles } from "@/data/blog-articles";
import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import Link from "next/link";

const options = {
  replace: (domNode: any) => {
    if (domNode.type === "tag") {
      switch (domNode.name) {
        case "p":
          return (
            <Typography variant="body1">
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
            <Typography variant="h2">
              {domToReact(domNode.children, options)}
            </Typography>
          );
        case "h3":
          return (
            <Typography variant="h3">
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
            <Link href={domNode.attribs.href}>
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
          console.log(domNode.attribs.style);
          return (
            <Typography component="span" style={domNode.attribs.style}>
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

//  const options = {
//     replace: (domNode: any) => {
//       if (domNode.type === "tag") {
//         switch (domNode.name) {
//           case "p":
//             return <Typography paragraph>{domToReact(domNode.children, options)}</Typography>;
//           case "h1":
//             return <Typography variant="h3" gutterBottom>{domToReact(domNode.children, options)}</Typography>;
//           case "h2":
//             return <Typography variant="h4" gutterBottom>{domToReact(domNode.children, options)}</Typography>;
//           case "h3":
//             return <Typography variant="h5" gutterBottom>{domToReact(domNode.children, options)}</Typography>;
//           case "h4":
//             return <Typography variant="h6" gutterBottom>{domToReact(domNode.children, options)}</Typography>;
//           case "strong":
//             return <Box component="strong">{domToReact(domNode.children, options)}</Box>;
//           case "a":
//             return <Link href={domNode.attribs.href}>{domToReact(domNode.children, options)}</Link>;
//           case "img":
//             return <Box component="img" src={domNode.attribs.src} alt={domNode.attribs.alt || ""} maxWidth="100%" my={2} />;
//           case "ul":
//             return <Box component="ul" pl={4} mb={2}>{domToReact(domNode.children, options)}</Box>;
//           case "ol":
//             return <Box component="ol" pl={4} mb={2}>{domToReact(domNode.children, options)}</Box>;
//           case "li":
//             return <Box component="li" mb={1}>{domToReact(domNode.children, options)}</Box>;
//           default:
//             return undefined;
//         }
//       }

//     },
//   };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ artigo: string }>;
}) {
  const { artigo } = await params;

  const article = blogArticles.find((article) => article.slug === artigo);

  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: article.featuredImage,
      images: [
        {
          url: article.featuredImage,
          href: article.featuredImage,
        },
      ],
    },
  };
}

export default async function Artigo({
  params,
}: {
  params: Promise<{ artigo: string }>;
}) {
  const { artigo } = await params;

  const article = blogArticles.find((article) => article.slug === artigo);

  if (!article) return notFound();

  return (
    <div>
      <main>
        <Container>
          <Box sx={{ position: "relative", height: "20rem", width: "100%" }}>
            <Image
              src={article.featuredImage}
              alt="Imagem"
              fill
              objectFit="cover"
            />
          </Box>

          <Typography variant="h1">{article.title}</Typography>

          {parse(article.content, options)}
        </Container>
        {/* <Stack gap={{ xs: 10, md: 20 }} sx={{ pb: { xs: 0, md: 20 } }}>
          <Stack>
            <ServiceDetailsHeroSection service={service} />

            <BenefitsSection service={service} />
          </Stack>

          <StepperSection service={service} />

          <PlansSection service={service} />

          <AdvantagesSection />

          <ReviewsSection />
        </Stack>

        <FloatingCTA service={service} /> */}
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    artigo: article.slug,
  }));
}
