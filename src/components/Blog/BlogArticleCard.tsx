import { Box, ButtonBase, Chip, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { IBlogPost } from "@/data/blog-articles";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export interface IBlogArticleCardProps {
  article: IBlogPost;
}

export const BlogArticleCard = ({ article }: IBlogArticleCardProps) => {
  const articleDate = new Date(article.date);

  const dateText = articleDate.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      key={article.id}
      href={`/blog/${article.slug}`}
      style={{ height: "100%" }}
      target="_blank"
    >
      <ButtonBase
        sx={{
          width: "20rem",
          height: "100%",
          borderRadius: 3,
          pb: 2,
          pt: 1,
          px: 1,
          transition: ".3s ease all",
          "&:hover": {
            backgroundColor: "#e3e3e3",
          },
        }}
        component={Stack}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            borderRadius: 8,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <Image
            src={article.featuredImage}
            alt="Imagem"
            fill
            objectFit="cover"
          />
        </Box>

        <Stack
          direction="column"
          sx={{ pt: 1, height: "100%", width: "100%" }}
          // justifyContent="space-between"
          alignItems="flex-start"
          gap={2}
        >
          <Stack alignItems="flex-start">
            <Typography>{dateText}</Typography>

            <Chip label={article.category} size="small" variant="outlined" />

            <Typography fontWeight="bold" fontSize={20}>
              {article.title}
            </Typography>
          </Stack>

          <Stack direction="row" color="secondary.main">
            <Typography fontWeight="bold">Leia mais</Typography>

            <ArrowOutwardIcon />
          </Stack>
        </Stack>
      </ButtonBase>
    </Link>
  );
};
