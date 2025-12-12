import { decodeHtmlEntities, formatDateISOToBR, scrollTo } from "@/utils/utils";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { TrackingWrapper } from "../../common/TrackingWrapper";
import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import Link from "next/link";
import { ArticlePageHeroButtons } from "./ArticlePageHeroButtons";

export interface IArticlePageProps {
  article: {
    id: any;
    title: any;
    content: any;
    excerpt: any;
    date: any;
    slug: any;
    author: any;
    category: any;
    featuredImage: any;
    link: any;
  };
}

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
              {...domNode.attribs}
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

export const ArticlePage = ({ article }: IArticlePageProps) => {
  return (
    <Box>
      <Box
        sx={{
          height: "fit-content",
          width: "100%",
          backgroundColor: "#333333",
          py: 8,
        }}
      >
        <Container
          maxWidth="md"
          sx={{ height: "100%", mt: -10, pt: 10, pb: 10 }}
        >
          <Stack height="100%" justifyContent="center">
            <Typography color="primary" textTransform="uppercase">
              {decodeHtmlEntities(article.category)}
            </Typography>

            <Typography variant="h1" color="white" fontWeight={500}>
              {article.title}
            </Typography>

            <Typography color="primary" sx={{ mt: 2 }}>
              Publicado em {formatDateISOToBR(article.date)} • Escrito por{" "}
              {article.author}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <ArticlePageHeroButtons />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Stack gap={10}>
          <Box
            sx={{
              position: "relative",
              height: "30rem",
              width: "100%",
              mt: -10,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              objectFit="cover"
            />
          </Box>

          <Box id="article">{parse(article.content, options)}</Box>
        </Stack>
      </Container>
    </Box>
  );
};
