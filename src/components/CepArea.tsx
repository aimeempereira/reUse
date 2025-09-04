"use client";
import { useState } from "react";

export default function CepArea() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [localInfo, setLocalInfo] = useState<string | null>(null);

  const buscarCEP = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep.replace("-", "")}/json/`);
      const data = await response.json();

      if (data.erro) {
        setLocalInfo("CEP inválido");
      } else {
        setRua(data.logradouro || "");
        setBairro(data.bairro || "");
        setCidade(data.localidade || "");
        setEstado(data.uf || "");
        setLocalInfo(`${data.localidade} - ${data.uf} | ${data.bairro}`);
        setModalVisible(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error(error)
      setLocalInfo("Erro ao buscar CEP");
    }
  };

  const handleSalvar = () => {
    const endereco = { cep, rua, numero, bairro, cidade, estado };
    console.log("Endereço salvo:", endereco);
    alert("Endereço salvo com sucesso!");
    setModalVisible(false);
  };

  return (
    <div className="flex flex-col items-center mt-4">
      {/* Botão principal */}
      {localInfo ? (
        <button
          onClick={() => setModalVisible(true)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
        >
          {localInfo}
        </button>
      ) : (
        <button
          onClick={() => setModalVisible(true)}
          className="px-10 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Adicionar endereço
        </button>
      )}

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl p-6 w-80 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Adicionar Endereço</h2>
            <input
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              placeholder="CEP"
              className="w-full border rounded p-2 mb-2"
            />
            <input
              type="text"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              placeholder="Rua"
              className="w-full border rounded p-2 mb-2"
            />
            <input
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              placeholder="Número"
              className="w-full border rounded p-2 mb-2"
            />
            <input
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              placeholder="Bairro"
              className="w-full border rounded p-2 mb-2"
            />
            <input
              type="text"
              value={cidade}
              disabled
              placeholder="Cidade"
              className="w-full border rounded p-2 mb-2 bg-gray-100"
            />
            <input
              type="text"
              value={estado}
              disabled
              placeholder="Estado"
              className="w-full border rounded p-2 mb-4 bg-gray-100"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalVisible(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleSalvar}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Salvar
              </button>
              <button
                onClick={buscarCEP}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Buscar CEP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
