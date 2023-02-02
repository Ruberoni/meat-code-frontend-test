import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import heroImage from "../../public/images/hero.png";
import brushPaintImage from "../../public/images/BRUSH-3 2.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>El secreto de tu cocina</title>
        <meta name="description" content="El secreto de tu cocina" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <Image src={heroImage} alt="Especias" className={styles.heroImage} />
          <div className={styles.heroImageBlur}></div>
        </div>
        <h1 className={styles.logo}>Logo</h1>
        <div className={styles.heroTitleContainer}>
          <h2 className={styles.heroTitle}>El secreto de tu cocina</h2>
          <Image
            src={brushPaintImage}
            alt="Pintada de brocha decorativa"
            className={styles.heroBrushPaintImage}
          />
        </div>
      </div>
      <section>
        <div className={styles.sectionTitleContainer}>
          <Image
            src={brushPaintImage}
            alt="Pintada de brocha decorativa"
            className={styles.sectionTitleBrushPaintImage}
          />
          <h3 className={styles.sectionTitle}>Nuestros artículos</h3>
        </div>
      </section>
    </>
  );
}
