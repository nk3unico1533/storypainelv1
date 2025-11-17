import StoryCarousel from "@/components/stories/StoryCarousel";
import CpfConsulta from "@/components/stories/CpfConsulta";
import CnpjConsulta from "@/components/stories/CnpjConsulta";

export default function Home() {
  return (
    <StoryCarousel>
      {[
        <CpfConsulta key="cpf" />,
        <CnpjConsulta key="cnpj" />,
      ]}
    </StoryCarousel>
  );
}
