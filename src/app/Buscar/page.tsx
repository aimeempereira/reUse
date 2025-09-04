"use client";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Carousel from "../../components/Carousel/Carousel";
import CepArea from "../../components/CepArea";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleSearch = (value: string) => {
    console.log("Pesquisou por:", value);
  };

  return (
    <div>
      {/* Header atualizado sem props */}
      <Header />

      {/* Carousel logo abaixo do Header */}
      <Carousel />

      {/* Barra de busca abaixo do Carousel */}
      <SearchBar placeholder="Busque itens..." onSearch={handleSearch} />

      {/* Área do CEP */}
      <CepArea />
    </div>
  );
}
