"use client";

import { useState } from "react";

export default function EmailConsulta() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const consultar = () => {
    if (!email) return;
    setLoading(true);

    setTimeout(() => {
      setResultado({
        dono: "Roberto Lima",
        data: "2017",
        vazamentos: 4,
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center h-full w-full px-6">
      <h1 className="text-3xl font-bold mb-6 text-orange-400">Consulta E-mail</h1>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite o e-mail"
        className="w-full max-w-md p-3 rounded bg-transparent border border-orange-400/40 text-white mb-4"
      />

      <button onClick={consultar} className="w-full max-w-md p-3 bg-orange-500 rounded">
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 border border-orange-400/40 rounded bg-black/30">
          <p><b>Dono:</b> {resultado.dono}</p>
          <p><b>Desde:</b> {resultado.data}</p>
          <p><b>Vazamentos:</b> {resultado.vazamentos}</p>
        </div>
      )}
    </div>
  );
}