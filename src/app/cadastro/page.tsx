"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../src/services/firebaseConfig";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import styles from "./Cadastro.module.css";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function CadastroPage() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const router = useRouter();

  const handleCadastro = async () => {
    if (!nome || !sobrenome || !email || !senha || !confirmarSenha) {
      alert("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

      await updateProfile(userCredential.user, {
        displayName: `${nome} ${sobrenome}`,
      });

      alert("Conta criada com sucesso!");
      router.push("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error.code);
      if (error.code === "auth/email-already-in-use") {
        alert("Este e-mail já está cadastrado. Tente fazer login.");
      } else if (error.code === "auth/weak-password") {
        alert("A senha deve ter no mínimo 6 caracteres.");
      } else if (error.code === "auth/invalid-email") {
        alert("O e-mail digitado não é válido.");
      } else {
        alert("Erro ao criar conta. Tente novamente.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Seta para voltar dentro do inner */}
        <div className={styles.backIcon} onClick={() => router.back()}>
          <FaArrowLeft size={24} color="#2A2B67" />
        </div>

        <Image
          src="/logo.png"
          alt="Logo"
          width={180}
          height={180}
          className={styles.logo}
        />

        <h1 className={styles.title}>Cadastro</h1>

        <input
          className={styles.input}
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="Sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <input
          className={styles.input}
          placeholder="Confirmar Senha"
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        <button className={styles.button} onClick={handleCadastro}>
          Cadastrar
        </button>

        <SocialLogin />

        <button
          className={styles.signupLink}
          onClick={() => router.push("/login")}
        >
          Já possui conta? Voltar ao login
        </button>
      </div>
    </div>
  );
}
