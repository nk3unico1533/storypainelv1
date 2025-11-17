"use client";

import { useState } from "react";

export default function TelefoneConsulta() {
  const [tel, setTel] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const consultar = () => {
    if (!tel) return;
    setLoading(true);
    setResultado(null);

    setTimeout(() => {
      setResultado({
        dono: "Carlos Mendes",
        operadora: "Vivo",
        cidade: "São Paulo",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center h-full w-full px-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-400">Consulta Telefone</h1>

      <input
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        placeholder="Digite o telefone"
        className="w-full max-w-md p-3 rounded bg-transparent border border-purple-400/40 text-white mb-4"
      />

      <button onClick={consultar} className="w-full max-w-md p-3 bg-purple-600 rounded">
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 border border-purple-400/40 rounded bg-black/30">
          <p><b>Dono:</b> {resultado.dono}</p>
          <p><b>Operadora:</b> {resultado.operadora}</p>
          <p><b>Cidade:</b> {resultado.cidade}</p>
        </div>
      )}
    </div>
  );
}