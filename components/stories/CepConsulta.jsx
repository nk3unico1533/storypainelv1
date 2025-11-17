"use client";

import { useState } from "react";

export default function CepConsulta() {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const consultar = () => {
    if (!cep) return;
    setLoading(true);
    setResultado(null);

    setTimeout(() => {
      setResultado({
        rua: "Av. Paulista",
        cidade: "São Paulo",
        estado: "SP",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="story-card flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6 text-pink-400">Consulta CEP</h1>

      <input
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
        className="w-full max-w-md p-3 rounded bg-transparent border border-pink-400/40 text-white mb-4"
      />

      <button onClick={consultar} className="w-full max-w-md p-3 bg-pink-500 rounded">
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 border border-pink-400/40 rounded bg-black/30">
          <p><b>Rua:</b> {resultado.rua}</p>
          <p><b>Cidade:</b> {resultado.cidade}</p>
          <p><b>Estado:</b> {resultado.estado}</p>
        </div>
      )}
    </div>
  );
}