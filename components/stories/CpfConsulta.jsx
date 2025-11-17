"use client";

import { useState } from "react";

export default function CpfConsulta() {
  const [cpf, setCpf] = useState("");
  const [resultado, setResultado] = useState(null);

  const consultar = async () => {
    if (!cpf.trim()) return;

    try {
      const res = await fetch(`/api/cpf?valor=${cpf}`);
      const json = await res.json();
      setResultado(json);
    } catch (err) {
      setResultado({ erro: "Falha ao consultar" });
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-[#111] border border-white/10 rounded-2xl p-6 shadow-xl">

        <h1 className="text-center text-2xl font-bold mb-6">
          Consulta CPF
        </h1>

        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite o CPF"
          className="w-full bg-black/40 text-white p-3 rounded-xl border border-white/10 text-center mb-3 focus:outline-none"
        />

        <button
          onClick={consultar}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 py-3 rounded-xl text-white font-semibold active:scale-95 transition"
        >
          Consultar
        </button>

        {resultado && (
          <pre className="bg-black/40 border border-white/10 rounded-xl p-4 text-sm mt-4 overflow-x-auto whitespace-pre-wrap">
            {JSON.stringify(resultado, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}