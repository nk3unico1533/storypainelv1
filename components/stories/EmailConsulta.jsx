"use client";
import { useState } from "react";
import StorySlide from "./StorySlide";

export default function EmailConsulta() {
  const [value, setValue] = useState("");
  const [res, setRes] = useState(null);

  const consultar = () => setRes({ tipo: "email", entrada: value, gravatar: "hash" });

  return (
    <div className="card-container">
    <StorySlide title="Consulta Email">
      <div className="flex flex-col items-center gap-4">
        <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Digite o Email" className="osint-input w-full max-w-md text-center" />
        <button onClick={consultar} className="btn-primary w-48">Consultar</button>
        {res && <pre className="mt-6 bg-black/40 p-4 rounded-lg w-full max-w-md">{JSON.stringify(res,null,2)}</pre>}
      </div>
    </StorySlide>
    <div className="card-container">
  );
}
