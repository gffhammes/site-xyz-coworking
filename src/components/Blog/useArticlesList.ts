import { IBlogPost } from "@/data/blog-articles";
import { decodeHtmlEntities } from "@/utils/utils";
import { useEffect, useMemo, useState } from "react";

export interface IUseArticlesListArgs {
  posts: IBlogPost[];
}

export const useArticlesList = ({ posts }: IUseArticlesListArgs) => {
  const [page, setPage] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sort, setSort] = useState<TSortOptions>("newest-to-oldest");
  const pageSize = 9;

  // Extrai categorias únicas
  const blogCategories = useMemo(() => {
    const categories = posts.map((p) => decodeHtmlEntities(p.category));
    return Array.from(new Set(categories));
  }, [posts]);

  // Filtra por categoria
  const filteredArticles = useMemo(() => {
    if (selectedCategories.length === 0) return posts;
    return posts.filter((article) =>
      selectedCategories.includes(decodeHtmlEntities(article.category)),
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
    [filteredArticles],
  );

  const changeSelectedPage = (newPage: number) => {
    setPage(newPage);
  };

  const changeSorting = (newSorting: TSortOptions) => {
    setSort(newSorting);
  };

  const handleCategoryFilterClick = (category: string) => {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((c) => c !== category)
        : [...current, category],
    );
  };

  useEffect(() => setPage(0), [selectedCategories]);

  return {
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
  };
};

export type TSortOptions = "oldest-to-newest" | "newest-to-oldest";
