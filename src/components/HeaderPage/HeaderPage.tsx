"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import styles from "./HeaderPage.module.css";

interface HeaderPageProps {
  titulo: string;
  destino?: string; 
}

const HeaderPage: React.FC<HeaderPageProps> = ({ titulo, destino }) => {
  const router = useRouter();

  const handlePress = () => {
    if (destino) {
      router.push(destino);
    } else {
      router.back();
    }
  };

  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={handlePress}>
        <IoArrowBack size={24} color="#016DAD" />
      </button>
      <h1 className={styles.headerTitle}>{titulo}</h1>
      <div style={{ width: 24 }} /> {/* para alinhar o título no centro */}
    </div>
  );
};

export default HeaderPage;
