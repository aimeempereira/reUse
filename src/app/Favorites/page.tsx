"use client";
import React from "react";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import { IoConstructSharp } from "react-icons/io5";

const FavoritesPage: React.FC = () => {
  return (
    <div style={{ padding: "16px" }}>
      <HeaderPage titulo="Favoritos" destino="/perfil" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "300px", // só para centralizar
          gap: "16px",
        }}
      >
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <IoConstructSharp size={36} color="black" />
        </button>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          Página em construção
        </p>
      </div>
    </div>
  );
};

export default FavoritesPage;
