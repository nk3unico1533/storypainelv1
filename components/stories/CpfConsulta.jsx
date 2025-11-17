"use client";

import { useState } from "react";

export default function CpfConsulta() {
  const [cpf, setCpf] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState(null);

  const consultar = async () => {
    if (!cpf) return;

    setLoading(true);
    setResultado(null);

    // simulação
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
    <div className="flex flex-col items-center justify-center h-full px-6">
      <h1 className="text-3xl font-bold mb-6">Consulta CPF</h1>

      <input
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite o CPF"
        className="w-full max-w-md p-3 rounded bg-zinc-900 border border-zinc-700 mb-4"
      />

      <button
        onClick={consultar}
        className="w-full max-w-md p-3 bg-blue-600 rounded font-semibold"
      >
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 bg-zinc-900 border border-zinc-700 rounded">
          <p><b>Nome:</b> {resultado.nome}</p>
          <p><b>Nascimento:</b> {resultado.nascimento}</p>
          <p><b>Situação:</b> {resultado.situacao}</p>
        </div>
      )}
    </div>
  );
}