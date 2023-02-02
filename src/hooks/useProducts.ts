import React from "react";
import * as http from "@/lib/http";
import { IArticle, ArticleCategory } from "@/types";

const useProducts = () => {
  const [articles, setArticles] = React.useState<IArticle[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const getProducts = async (filter: ArticleCategory) => {
    try {
      setLoading(true);
      const articles = await http.getArticles(
        filter === "todos" ? undefined : filter
      );
      setArticles(articles);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getProducts("todos");
  }, []);
  return { articles, loading, error, getProducts };
};

export default useProducts;
