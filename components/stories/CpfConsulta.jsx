"use client";
import { useState } from "react";
import StorySlide from "./StorySlide";

export default function CpfConsulta() {
  const [value, setValue] = useState("");
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);

  const consultar = async () => {
    setLoading(true);
    setRes(null);
    // mock, trocar para sua API
    setTimeout(() => {
      setRes({ tipo: "cpf", entrada: value, nome: "Fulano da Silva" });
      setLoading(false);
    }, 900);
  };

  return (
    <div className="card-container">
    <StorySlide title="Consulta CPF">
      <div className="flex flex-col items-center gap-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite o CPF"
          className="osint-input w-full max-w-md text-center"
        />
        <button onClick={consultar} className="btn-primary w-48">
          {loading ? "Consultando..." : "Consultar"}
        </button>

        {res && (
          <pre className="mt-6 bg-black/40 p-4 rounded-lg w-full max-w-md">
            {JSON.stringify(res, null, 2)}
          </pre>
        )}
      </div>
    </StorySlide>
    </div>
  );
}