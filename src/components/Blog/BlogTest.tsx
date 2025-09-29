"use client";

import { blogArticles, blogCategories, IBlogPost } from "@/data/blog-articles";
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

export interface IBlogTestProps {}

export const BlogTest = (props: IBlogTestProps) => {
  const [page, setPage] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState<TSortOptions>("newest-to-oldest");

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

  const sortedArticles = useMemo(() => {
    const articles = sortPostsByDate(filteredArticles, sort);

    return articles;
  }, [filteredArticles, sort]);

  const currentPageArticles = useMemo(() => {
    let articlesToShow = sortedArticles;

    const initialIndex = page * pageSize;
    const finalIndex = (page + 1) * pageSize;

    return articlesToShow.slice(initialIndex, finalIndex);
  }, [sortedArticles, page]);

  const pagesQuantity = useMemo(
    () => Math.ceil(filteredArticles.length / pageSize),
    [filteredArticles]
  );

  useEffect(() => {
    setPage(0);
  }, [selectedCategories]);

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
          onChange={(value) => {
            setSort(value as TSortOptions);
          }}
        />

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

        <Typography>{`${filteredArticles.length} artigo(s) encontrado(s)`}</Typography>
      </Container>

      <Container id="blog-content">
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr 1fr 1fr" }}
          gridAutoRows="1fr"
          gap={4}
        >
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
          onChange={(e, page) => {
            setPage(page - 1);
          }}
        />
      </Container>
    </Box>
  );
};

function parseWpDateToTs(d?: string | Date | number): number {
  if (!d) return 0;
  if (typeof d === "number") return d;
  if (d instanceof Date) return d.getTime();

  const s = d.trim();

  // regex que aceita "YYYY-MM-DD HH:MM:SS" ou "YYYY-MM-DDTHH:MM:SS" ou só "YYYY-MM-DD"
  const m = s.match(
    /^(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2}))?$/
  );
  if (m) {
    const year = Number(m[1]);
    const month = Number(m[2]) - 1; // JS month 0-11
    const day = Number(m[3]);
    const hour = Number(m[4] ?? "0");
    const minute = Number(m[5] ?? "0");
    const second = Number(m[6] ?? "0");
    // Usamos Date.UTC para gerar um timestamp consistente (ms since epoch)
    return Date.UTC(year, month, day, hour, minute, second);
  }

  // fallback: tenta um parse mais permissivo (substitui espaço por T)
  const isoLike = s.replace(" ", "T");
  const parsed = Date.parse(isoLike);
  return isNaN(parsed) ? 0 : parsed;
}

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
