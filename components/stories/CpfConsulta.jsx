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
        dataNascimento: "12/03/1990",
        mae: "Maria Silva",
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">Consulta CPF</h1>

      <input
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite o CPF"
        className="w-full max-w-md p-3 rounded bg-transparent border border-blue-400/40 text-white mb-4"
      />

      <button onClick={consultar} className="w-full max-w-md p-3 bg-blue-500 rounded">
        {loading ? "Consultando..." : "Consultar"}
      </button>

      {resultado && (
        <div className="mt-6 w-full max-w-md p-4 border border-blue-400/40 rounded bg-black/30">
          <p><b>Nome:</b> {resultado.nome}</p>
          <p><b>Nascimento:</b> {resultado.dataNascimento}</p>
          <p><b>Mãe:</b> {resultado.mae}</p>
        </div>
      )}
    </div>
  );
}