export default function CnpjConsulta() {
  return (
    <div className="bg-neutral-900 p-6 rounded-3xl text-white w-80 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Consulta CPF</h1>

      <input
        className="bg-neutral-800 p-3 rounded-xl"
        placeholder="Digite o Cnpj"
      />

      <button className="bg-blue-500 p-3 rounded-xl active:scale-95">
        Consultar
      </button>
    </div>
  );
}