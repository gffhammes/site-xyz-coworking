export interface IBlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  status: "draft" | "publish";
  featuredImage: string;
  category: string;
  tags: string[];
}
