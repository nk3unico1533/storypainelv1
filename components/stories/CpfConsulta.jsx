"use client";

import { useState } from "react";

export default function CnpjConsulta() {
  const [cnpj, setCnpj] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const consultar = () => {
    setLoading(true);
    setResultado(null);

    setTimeout(() => {
      setResultado({
        empresa: "Tech Solutions LTDA",
        abertura: "2015-02-13",
        status: "Ativa",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-6">
      <h1 className="text-3xl font-bold mb-6">Consulta CNPJ</h1>

      <input
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
        placeholder="Digite o CNPJ"
        className="w-full max-w-md p-3 rounded bg-zinc-900 border border-zinc-700 mb-4"
      />

      <button
        onClick={consultar}
        className="w-full max-w-md p-3 bg-green-600 rounded font-semibold"
      >
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 bg-zinc-900 border border-zinc-700 rounded">
          <p><b>Empresa:</b> {resultado.empresa}</p>
          <p><b>Abertura:</b> {resultado.abertura}</p>
          <p><b>Status:</b> {resultado.status}</p>
        </div>
      )}
    </div>
  );
}