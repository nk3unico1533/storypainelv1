"use client";
import { useState } from "react";
import StorySlide from "./StorySlide";

export default function CnpjConsulta() {
  const [value, setValue] = useState("");
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);

  const consultar = async () => {
    setLoading(true);
    setRes(null);
    setTimeout(() => {
      setRes({ tipo: "cnpj", entrada: value, razao: "ACME Ltda" });
      setLoading(false);
    }, 900);
  };

  return (
    <div className="card-container">
    <StorySlide title="Consulta CNPJ">
      <div className="flex flex-col items-center gap-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Digite o CNPJ"
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