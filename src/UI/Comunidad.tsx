import ButtonIcon from "../components/ButtonIcon";
import CarrouselComunidad from "../components/Carrousel";
import Section from "../components/Section";
import { historias } from "../utils/data";

function Comunidad({ id }: { id: string }) {
  return (
    <Section id={id} title="Chepas en acción">
      <section className="w-full  md:h-1/2 pb-10">
        <CarrouselComunidad items={historias}></CarrouselComunidad>
      </section>
      <img
        src="/images/linea-comunidad.svg"
        className="bottom-1/12 pointer-events-none absolute -z-10 w-full"
      />
      <section className="flex flex-col gap-3 justify-center items-center mb-14 w-full">
        <p className="text-subtitle text-2xl text-center">
          ¿Querés ver más Chepas en acción?
        </p>
        <ButtonIcon
          icon="/images/Instagram.png"
          href="https://instagram.com/chepas.arg"
        >
          Seguinos en Instagram
        </ButtonIcon>
      </section>
    </Section>
  );
}

export default Comunidad;
