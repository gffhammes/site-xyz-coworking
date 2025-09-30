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
import { useEffect, useMemo, useState } from "react";
import { BlogArticleCard } from "./BlogArticleCard";
import { CustomSelect } from "../Forms/CustomSelect";

export interface IBlogTestProps {
  posts: IBlogPost[];
}

export const BlogTest = ({ posts }: IBlogTestProps) => {
  const [page, setPage] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState<TSortOptions>("newest-to-oldest");
  const pageSize = 9;

  // Extrai categorias únicas
  const blogCategories = useMemo(() => {
    const cats = posts.map((p) => p.category);
    return Array.from(new Set(cats));
  }, [posts]);

  // Filtra por categoria
  const filteredArticles = useMemo(() => {
    if (selectedCategories.length === 0) return posts;
    return posts.filter((article) =>
      selectedCategories.includes(article.category)
    );
  }, [posts, selectedCategories]);

  // Ordena
  const sortedArticles = useMemo(() => {
    return [...filteredArticles].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sort === "oldest-to-newest" ? dateA - dateB : dateB - dateA;
    });
  }, [filteredArticles, sort]);

  // Paginação
  const currentPageArticles = useMemo(() => {
    const start = page * pageSize;
    return sortedArticles.slice(start, start + pageSize);
  }, [sortedArticles, page]);

  const pagesQuantity = useMemo(
    () => Math.ceil(filteredArticles.length / pageSize),
    [filteredArticles]
  );

  useEffect(() => setPage(0), [selectedCategories]);

  return (
    <Box sx={{ width: "100%" }}>
      <Container>
        <CustomSelect
          options={[
            { label: "Do mais novo ao mais antigo", value: "newest-to-oldest" },
            { label: "Do mais antigo ao mais novo", value: "oldest-to-newest" },
          ]}
          currentValue={sort}
          displayKey="label"
          valueKey="value"
          label="Ordenar"
          onChange={(value) => setSort(value as TSortOptions)}
        />

        <Stack
          direction="row"
          flexWrap="wrap"
          width="100%"
          overflow="hidden"
          gap={1}
        >
          {blogCategories.map((category) => {
            const isSelected = selectedCategories.includes(category);
            return (
              <Chip
                key={category}
                label={category}
                color={isSelected ? "primary" : "default"}
                onClick={() =>
                  setSelectedCategories((current) =>
                    current.includes(category)
                      ? current.filter((c) => c !== category)
                      : [...current, category]
                  )
                }
              />
            );
          })}
        </Stack>

        <Typography>{`${filteredArticles.length} artigo(s) encontrado(s)`}</Typography>
      </Container>

      <Container id="blog-content">
        <Box display="grid" gridTemplateColumns={{ xs: "1fr 1fr 1fr" }} gap={4}>
          {currentPageArticles.map((article) => (
            <BlogArticleCard key={article.id} article={article} />
          ))}
        </Box>
      </Container>

      <Container>
        <Pagination
          count={pagesQuantity}
          page={page + 1}
          color="primary"
          onChange={(e, page) => setPage(page - 1)}
        />
      </Container>
    </Box>
  );
};

type TSortOptions = "oldest-to-newest" | "newest-to-oldest";

const sortPostsByDate = (
  posts: IBlogPost[],
  order: TSortOptions = "newest-to-oldest"
): IBlogPost[] => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return order === "oldest-to-newest" ? dateA - dateB : dateB - dateA;
  });
};

async function fetchBlogPosts(): Promise<IBlogPost[]> {
  const res = await fetch(
    "https://xyzcoworking.com/wp-json/wp/v2/posts?per_page=100&_embed"
  );
  if (!res.ok) return [];

  const data = await res.json();

  return data.map((post: any) => ({
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
}
