import Image from "next/image";
import { IArticle } from "@/types";
import styles from "@/styles/Article.module.css";

const Article = (props: IArticle) => {
  return (
    <div className={styles.article}>
      <Image
        src={props.image}
        alt="Imagen del producto"
        width={270}
        height={204}
        className={styles.image}
      />
      <div className={styles.contentContainer}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.content}>{props.content}</p>
        <a
          className={styles.url}
          href={props.url}
          referrerPolicy="no-referrer"
          target="_blank"
        >
          Ver más
        </a>
      </div>
    </div>
  );
};

export default Article;
