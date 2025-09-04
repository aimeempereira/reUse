"use client";
import React from "react";
import { FaGoogle, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import styles from "./SocialLogin.module.css";

const SocialLogin: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Ou faça login com:</p>
      <div className={styles.iconsContainer}>
        <button className={styles.iconButton}>
          <FaGoogle size={24} color="#DB4437" />
        </button>
        <button className={styles.iconButton}>
          <FaFacebookF size={24} color="#1877F2" />
        </button>
        <button className={styles.iconButton}>
          <FaWhatsapp size={24} color="#25D366" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
