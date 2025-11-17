"use client";

import { useState } from "react";

export default function PlacaConsulta() {
  const [placa, setPlaca] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const consultar = () => {
    if (!placa) return;
    setLoading(true);

    setTimeout(() => {
      setResultado({
        modelo: "Honda Civic 2020",
        cidade: "Curitiba",
        cor: "Preto",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="story-card flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Consulta Placa</h1>

      <input
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
        placeholder="Digite a placa"
        className="w-full max-w-md p-3 rounded bg-transparent border border-cyan-400/40 text-white mb-4"
      />

      <button onClick={consultar} className="w-full max-w-md p-3 bg-cyan-600 rounded">
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 border border-cyan-400/40 rounded bg-black/30">
          <p><b>Modelo:</b> {resultado.modelo}</p>
          <p><b>Cidade:</b> {resultado.cidade}</p>
          <p><b>Cor:</b> {resultado.cor}</p>
        </div>
      )}
    </div>
  );
}