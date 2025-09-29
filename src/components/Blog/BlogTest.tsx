"use client";

import { blogArticles, blogCategories, IBlogPost } from "@/data/blog-articles";
import {
  Box,
  ButtonBase,
  Chip,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useEffect, useMemo, useState } from "react";

export interface IBlogTestProps {}

export const BlogTest = (props: IBlogTestProps) => {
  const [page, setPage] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState("");

  const pageSize = 9;

  const filteredArticles = useMemo(() => {
    let articlesToShow = blogArticles;

    if (selectedCategories.length > 0) {
      articlesToShow = articlesToShow.filter((article) =>
        selectedCategories.includes(article.category)
      );
    }

    return articlesToShow;
  }, [selectedCategories]);

  const articlesToShow = useMemo(() => {
    let articlesToShow = filteredArticles;

    const initialIndex = page * pageSize;
    const finalIndex = (page + 1) * pageSize;

    return articlesToShow.slice(initialIndex, finalIndex);
  }, [filteredArticles, page]);

  const pagesQuantity = useMemo(
    () => Math.ceil(filteredArticles.length / pageSize),
    [articlesToShow]
  );

  useEffect(() => {
    setPage(0);
  }, [selectedCategories]);

  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Stack direction="row" flexWrap="wrap" width="100%" overflow="hidden">
          {blogCategories.map((category) => {
            const isSelected = selectedCategories.includes(category);

            return (
              <Chip
                label={category}
                color={isSelected ? "primary" : "default"}
                // variant={isSelected ? "filled" : "outlined"}
                onClick={() => {
                  setSelectedCategories((current) => {
                    if (current.includes(category)) {
                      return current.filter((item) => item !== category);
                    } else {
                      return [...current, category];
                    }
                  });
                }}
              />
            );
          })}
        </Stack>
      </Container>

      <Container id="blog-content">
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr 1fr 1fr" }}
          gridAutoRows="1fr"
          gap={4}
        >
          {articlesToShow.map((article) => (
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
                    <Chip
                      label={article.category}
                      size="small"
                      variant="outlined"
                    />

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
          ))}
        </Box>
      </Container>

      <Container>
        <Pagination
          count={pagesQuantity}
          page={page + 1}
          color="primary"
          onChange={(e, page) => {
            setPage(page - 1);
          }}
        />
      </Container>
    </Box>
  );
};
