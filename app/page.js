import StoryCarousel from "@/components/stories/StoryCarousel";
import CpfConsulta from "@/components/stories/CpfConsulta";
import CnpjConsulta from "@/components/stories/CnpjConsulta";
import RgConsulta from "@/components/stories/RgConsulta";
import TelefoneConsulta from "@/components/stories/TelefoneConsulta";
import PlacaConsulta from "@/components/stories/PlacaConsulta";
import NomeConsulta from "@/components/stories/NomeConsulta";
import EmailConsulta from "@/components/stories/EmailConsulta";
import CepConsulta from "@/components/stories/CepConsulta";

export default function Home() {
  const slides = [
    <CpfConsulta key="cpf" />,
    <CnpjConsulta key="cnpj" />,
    <RgConsulta key="rg" />,
    <TelefoneConsulta key="tel" />,
    <PlacaConsulta key="placa" />,
    <NomeConsulta key="nome" />,
    <EmailConsulta key="email" />,
    <CepConsulta key="cep" />,
  ];

  return (
    <main className="w-full h-screen bg-black text-white">
      <StoryCarousel slides={slides} />
    </main>
  );
}