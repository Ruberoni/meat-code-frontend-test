import React from "react";
import styles from "@/styles/ArticlesSection.module.css";
import classNames from "classnames";
import { ArrowIcon } from "./icons";

const filters = ["todos", "productos", "recetas", "consejos"] as const;

const ArticlesSection = () => {
  const [activeFilter, setActiveFilter] =
    React.useState<typeof filters[keyof typeof filters]>("todos");

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter}
            className={classNames(styles.filterButton, {
              [styles.activeFilterButton]: activeFilter === filter,
            })}
            onClick={() => setActiveFilter(filter)}
          >
            {filter} {activeFilter === filter && <ArrowIcon />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
