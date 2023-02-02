export type ArticleCategory = "todos" | "productos" | "recetas" | "consejos";

export interface IArticle {
  id: number;
  createdAt: Date;
  title: string;
  category: ArticleCategory;
  image: string;
  content: string;
  url: string;
}

export interface NewsletterBody {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}
