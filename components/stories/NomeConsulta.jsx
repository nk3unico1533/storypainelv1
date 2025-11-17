"use client";

import { useState } from "react";

export default function NomeConsulta() {
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const consultar = () => {
    if (!nome) return;
    setLoading(true);

    setTimeout(() => {
      setResultado({
        pessoas: 12,
        ocorrencias: 3,
        estados: ["SP", "RJ", "MG"],
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="story-card flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6 text-red-400">Consulta Nome</h1>

      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite o nome"
        className="w-full max-w-md p-3 rounded bg-transparent border border-red-400/40 text-white mb-4"
      />

      <button onClick={consultar} className="w-full max-w-md p-3 bg-red-500 rounded">
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 border border-red-400/40 rounded bg-black/30">
          <p><b>Pessoas encontradas:</b> {resultado.pessoas}</p>
          <p><b>Ocorrências:</b> {resultado.ocorrencias}</p>
          <p><b>Estados:</b> {resultado.estados.join(", ")}</p>
        </div>
      )}
    </div>
  );
}