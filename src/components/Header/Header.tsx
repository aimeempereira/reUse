"use client";

import Link from "next/link";
import Image from "next/image";
import { IoMenuOutline, IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={styles.container}>
        {/* Botão menu */}
        <button className={styles.iconButton} onClick={toggleMenu}>
          <IoMenuOutline size={24} />
        </button>

        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Image
            src="/logo.png"
            alt="ReUse"
            width={120}
            height={40}
            className={styles.logo}
          />
        </div>

        {/* Ícone de carrinho permanece */}
        <div className={styles.rightIcons}>
          <Link href="/cart" className={styles.iconButton}>
            <IoCartOutline size={24} />
          </Link>
        </div>
      </header>

      {/* Overlay de fundo */}
      {isOpen && <div className={styles.menuOverlay} onClick={closeMenu}></div>}

      {/* Sidebar do menu */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="/cadastro" onClick={closeMenu}>Cadastro</Link>
          </li>
          <li>
            <Link href="/login" onClick={closeMenu}>Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
