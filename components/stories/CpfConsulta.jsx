"use client";

import { useState } from "react";

export default function CpfConsulta() {
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const consultar = () => {
    if (!cpf) return;
    setLoading(true);
    setResultado(null);

    setTimeout(() => {
      setResultado({
        nome: "João da Silva",
        nascimento: "1990-05-10",
        situacao: "Regular",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-6">
      <h1 className="text-3xl font-bold mb-6">Consulta CPF</h1>

      <input
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite o CPF"
        className="w-full max-w-md p-3 rounded bg-transparent border border-white/20 text-white mb-4"
      />

      <button
        onClick={consultar}
        className="w-full max-w-md p-3 bg-blue-600 rounded font-semibold"
      >
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 bg-transparent border border-white/20 rounded">
          <p><b>Nome:</b> {resultado.nome}</p>
          <p><b>Nascimento:</b> {resultado.nascimento}</p>
          <p><b>Situação:</b> {resultado.situacao}</p>
        </div>
      )}
    </div>
  );
}