"use client";

import { IBlogPost } from "@/data/blog-articles";
import {
  Box,
  Chip,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { BlogArticleCard } from "./BlogArticleCard";
import { CustomSelect } from "../Forms/CustomSelect";
import { decodeHtmlEntities } from "@/utils/utils";
import { TSortOptions, useArticlesList } from "./useArticlesList";

export interface IBlogArticlesListProps {
  posts: IBlogPost[];
}

export const BlogArticlesList = ({ posts }: IBlogArticlesListProps) => {
  const {
    blogCategories,
    currentPageArticles,
    pagesQuantity,
    sort,
    selectedCategories,
    filteredArticles,
    page,
    changeSelectedPage,
    changeSorting,
    handleCategoryFilterClick,
  } = useArticlesList({ posts });

  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <Stack gap={2} sx={{ pb: 4 }}>
          <Box sx={{ pt: 1 }}>
            <CustomSelect
              options={[
                {
                  label: "Do mais novo ao mais antigo",
                  value: "newest-to-oldest",
                },
                {
                  label: "Do mais antigo ao mais novo",
                  value: "oldest-to-newest",
                },
              ]}
              currentValue={sort}
              displayKey="label"
              valueKey="value"
              label="Ordenar"
              onChange={(value) => changeSorting(value as TSortOptions)}
            />
          </Box>

          <Stack
            direction="row"
            flexWrap="wrap"
            width="100%"
            overflow="hidden"
            gap={1}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {blogCategories.map((category) => {
              const isSelected = selectedCategories.includes(category);
              return (
                <Chip
                  key={decodeHtmlEntities(category)}
                  label={decodeHtmlEntities(category)}
                  color={isSelected ? "primary" : "default"}
                  onClick={() => handleCategoryFilterClick(category)}
                />
              );
            })}
          </Stack>

          <Typography>{`${filteredArticles.length} artigo(s) encontrado(s)`}</Typography>
        </Stack>
      </Container>

      <Container id="blog-content">
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
          gap={4}
        >
          {currentPageArticles.map((article) => (
            <BlogArticleCard key={article.id} article={article} />
          ))}
        </Box>
      </Container>

      <Container sx={{ mx: "auto", width: "fit-content", mt: 8 }}>
        <Pagination
          count={pagesQuantity}
          page={page + 1}
          color="primary"
          onChange={(e, page) => changeSelectedPage(page - 1)}
        />
      </Container>
    </Box>
  );
};
