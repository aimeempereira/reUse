"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import styles from "./login.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/main");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error(error);
      alert("Erro ao fazer login com email");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      localStorage.setItem("user_token", token);
      router.push("/main");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error(error);
      alert("Erro ao fazer login com Google");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      localStorage.setItem("user_token", token);
      router.push("/main");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error(error);
      alert("Erro ao fazer login com Facebook");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Logo ReUse */}
        <Image src="/logo.png" alt="Logo ReUse" width={120} height={120} className={styles.logo} />

        {/* Seta para voltar */}
        <IoArrowBack
          size={28}
          className={styles.backArrow}
          onClick={() => router.back()}
        />

        <h1 className={styles.title}>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        <button className={styles.loginButton} onClick={handleEmailLogin}>
          Entrar
        </button>

        {/* Social Login */}
        <div className={styles.socialContainer}>
          <button className={styles.socialButton} onClick={handleGoogleLogin}>
            Google
          </button>
          <button className={styles.socialButton} onClick={handleFacebookLogin}>
            Facebook
          </button>
        </div>

        <p className={styles.signup}>
          Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
