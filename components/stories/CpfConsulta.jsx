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
    <div className="w-full flex justify-center mt-10">
      {/* CARD PRINCIPAL */}
      <div
        className="
          w-[700px] 
          bg-yellow-400/10 
          backdrop-blur-xl 
          border 
          border-yellow-400/40 
          shadow-[0_0_25px_rgba(255,255,0,0.3)]
          rounded-2xl 
          p-8
        "
      >
        {/* TÍTULO */}
        <h1 className="text-3xl font-bold mb-8 text-center text-yellow-300 drop-shadow-lg">
          Consulta CPF
        </h1>

        {/* INPUT */}
        <input
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite o CPF"
          className="
            w-full 
            p-3 
            rounded-xl 
            bg-black/40 
            border border-yellow-300/30 
            text-white 
            placeholder-white/50
            focus:border-yellow-300/60
            outline-none
            mb-4
          "
        />

        {/* BOTÃO */}
        <button
          onClick={consultar}
          className="
            w-full 
            p-3 
            rounded-xl  
            bg-yellow-500 
            text-black 
            font-bold 
            shadow-[0_0_20px_rgba(255,255,0,0.4)]
            active:scale-95 
            transition
          "
        >
          {loading ? "Consultando..." : "Consultar"}
        </button>

        {/* RESULTADO */}
        {resultado && (
          <div
            className="
              mt-6 
              p-4 
              rounded-xl 
              bg-black/30 
              border border-yellow-300/20 
            "
          >
            <p><b>Nome:</b> {resultado.nome}</p>
            <p><b>Nascimento:</b> {resultado.nascimento}</p>
            <p><b>Situação:</b> {resultado.situacao}</p>
          </div>
        )}
      </div>
    </div>
  );
}