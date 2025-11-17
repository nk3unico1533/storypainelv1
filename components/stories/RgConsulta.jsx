"use client";

import { useState } from "react";

export default function RgConsulta() {
  const [rg, setRg] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const consultar = () => {
    if (!rg) return;
    setLoading(true);
    setResultado(null);

    setTimeout(() => {
      setResultado({
        nome: "Maria Oliveira",
        emissao: "2018",
        orgao: "SSP",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="story-card flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Consulta RG</h1>

      <input
        value={rg}
        onChange={(e) => setRg(e.target.value)}
        placeholder="Digite o RG"
        className="w-full max-w-md p-3 rounded bg-transparent border border-blue-400/40 text-white mb-4"
      />

      <button onClick={consultar} className="w-full max-w-md p-3 bg-blue-500 rounded">
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 border border-blue-400/40 rounded bg-black/30">
          <p><b>Nome:</b> {resultado.nome}</p>
          <p><b>Emissão:</b> {resultado.emissao}</p>
          <p><b>Órgão:</b> {resultado.orgao}</p>
        </div>
      )}
    </div>
  );
}