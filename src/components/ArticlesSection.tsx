import React from "react";
import styles from "@/styles/ArticlesSection.module.css";
import classNames from "classnames";
import { ArrowIcon } from "./icons";
import { ArticleCategory } from "@/types";
import Article, { ArticleSkeleton } from "./Article";
import { useProducts } from "@/hooks";

const filters: ArticleCategory[] = [
  "todos",
  "productos",
  "recetas",
  "consejos",
];

const ArticlesSection = () => {
  const [activeFilter, setActiveFilter] =
    React.useState<ArticleCategory>("todos");
  const { articles, loading, getProducts } = useProducts();

  const handleFilter = (filter: ArticleCategory) => {
    setActiveFilter(filter);
    getProducts(filter);
  };

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
        {loading
          ? Array.from(Array(6).keys()).map((_, i) => (
              <ArticleSkeleton key={i} />
            ))
          : articles.map((article) => (
              <Article key={article.id} {...article} />
            ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
