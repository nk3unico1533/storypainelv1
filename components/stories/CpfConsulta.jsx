"use client";

import { useState } from "react";

export default function CpfConsulta() {
  const [cpf, setCpf] = useState("");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Consulta CPF</h1>

      <input
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        placeholder="Digite o CPF"
        className="w-64 px-4 py-3 rounded-lg bg-neutral-800 text-white mb-4"
      />

      <button className="w-64 py-3 bg-blue-600 rounded-lg text-white font-bold">
        Consultar
      </button>
    </div>
  );
}