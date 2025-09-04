"use client";

import Image from "next/image";
import styles from "./Carousel.module.css";

const Carousel: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/fotovideo.png" // imagem dentro de public/assets
        alt="Foto Vídeo"
        width={800}    // largura da imagem
        height={180}   // altura da imagem
        className={styles.image}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
    </div>
  );
};

export default Carousel;
