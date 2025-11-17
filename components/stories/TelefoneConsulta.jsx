"use client";
import { useState } from "react";
import StorySlide from "./StorySlide";

export default function TelefoneConsulta() {
  const [value, setValue] = useState("");
  const [res, setRes] = useState(null);

  const consultar = () => setRes({ tipo: "telefone", entrada: value, owner: "Contato Exemplo" });

  return (
    <div className="card-container">
    <StorySlide title="Consulta Telefone">
      <div className="flex flex-col items-center gap-4">
        <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Digite o Telefone" className="osint-input w-full max-w-md text-center" />
        <button onClick={consultar} className="btn-primary w-48">Consultar</button>
        {res && <pre className="mt-6 bg-black/40 p-4 rounded-lg w-full max-w-md">{JSON.stringify(res,null,2)}</pre>}
      </div>
    </StorySlide>
    </div>
  );
}
