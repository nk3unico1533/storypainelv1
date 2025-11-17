"use client";

import { useState } from "react";

export default function StorySlide({ title, type }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const consultar = async () => {
    setLoading(true);
    setResult(null);

    // 🔥 mock — depois conectamos às suas rotas
    setTimeout(() => {
      setResult({
        status: "OK",
        consulta: type,
        entrada: value,
        resposta: `Resultado para ${value}`,
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center snap-center px-10">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="px-4 py-3 w-full max-w-md bg-neutral-800 rounded-lg outline-none"
        placeholder={`Digite o ${type.toUpperCase()}`}
      />

      <button
        onClick={consultar}
        className="mt-4 px-6 py-3 bg-blue-600 rounded-lg"
      >
        Consultar
      </button>

      <div className="mt-6 w-full max-w-md">
        {loading && <p className="opacity-70">Consultando...</p>}

        {!loading && result && (
          <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-700">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
