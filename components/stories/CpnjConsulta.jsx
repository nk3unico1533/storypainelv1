'use client';

import { useState } from 'react';

export default function CnpjConsulta() {
  const [cnpj, setCnpj] = useState('');
  const [resultado, setResultado] = useState(null);

  const consultar = async () => {
    try {
      const res = await fetch(
        `https://sua-api-aqui.com/cnpj/${cnpj}`
      );

      const data = await res.json();
      setResultado(data);
    } catch (e) {
      setResultado({ erro: 'Falha ao consultar CNPJ' });
    }
  };

  return (
    <div className="story-card flex flex-col items-center justify-center px-6">
      <h2 className="text-white text-3xl font-bold">Consulta CNPJ</h2>

      <input
        className="bg-neutral-800 text-white px-4 py-3 rounded-xl w-64 text-center"
        placeholder="Digite o CNPJ"
        value={cnpj}
        onChange={(e) => setCnpj(e.target.value)}
      />

      <button
        onClick={consultar}
        className="bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold"
      >
        Consultar
      </button>

      {resultado && (
        <pre className="text-white text-sm mt-4">
          {JSON.stringify(resultado, null, 2)}
        </pre>
      )}
    </div>
  );
}