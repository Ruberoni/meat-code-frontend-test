import React from "react";
import styles from "@/styles/ArticlesSection.module.css";
import classNames from "classnames";
import { ArrowIcon } from "./icons";
import { IArticle, ArticleCategory } from "@/types";
import * as http from "@/lib/http";
import Article from "./Article";

const filters: ArticleCategory[] = [
  "todos",
  "productos",
  "recetas",
  "consejos",
];

const cards = [];

const ArticlesSection = () => {
  const [activeFilter, setActiveFilter] =
    React.useState<ArticleCategory>("todos");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [articles, setArticles] = React.useState<IArticle[]>([]);

  const handleFilter = async (filter: ArticleCategory) => {
    setActiveFilter(filter);
    try {
      setLoading(true);
      const articles = await http.getArticles(
        filter === "todos" ? undefined : filter
      );
      setArticles(articles);
      console.log("[handleFilter] articles", articles);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  async function a() {
    try {
      setLoading(true);
      const articles = await http.getArticles();
      console.log("[useEffect] articles", articles);
      setArticles(articles);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    a();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={classNames(styles.filterButton, {
              [styles.activeFilterButton]: activeFilter === filter,
            })}
            onClick={() => handleFilter(filter)}
          >
            {filter} {activeFilter === filter && <ArrowIcon />}
          </button>
        ))}
      </div>
      <div className={styles.articles}>
        {articles.map((article) => (
          <Article {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
