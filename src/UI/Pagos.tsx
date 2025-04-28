import SectionDashed from "../components/SectionDashed";
import Section from "../components/Section";
import { pagos } from "../utils/data";

function Pagos({ id }: { id: string }) {
  return (
    <>
      <img
        src="/images/linea-pagos.svg"
        className="bottom-5/12 -rotate-12 pointer-events-none absolute -z-10 w-screen hidden md:block"
      />
      <img
        src="/images/linea-pagos-mobile.svg"
        className="bottom-5/12 -rotate-12 pointer-events-none absolute -z-10 w-screen md:hidden"
      />
      <Section
        id={id}
        title="¿Cómo puedes pagar tu Chepa?"
        endPage="¡Elegí la forma que más te guste y ponete unas Chepas al horno!"
      >
        <section className="w-full flex flex-col md:flex-row justify-center items-center md:my-10 gap-3">
          {pagos.map((pago) => (
            <SectionDashed
              withBackground
              className="md:w-1/3 h-96 p-14"
              key={pago.name}
            >
              <img className="h-44" src={pago.image} alt="" loading="lazy" />
              <h1 className="text-title text-center text-2xl md:text-3xl">
                {pago.name}
              </h1>
              <p className="text-subtitle text-lg md:text-2xl text-center">
                {pago.descripcion}
              </p>
            </SectionDashed>
          ))}
        </section>
      </Section>
    </>
  );
}

export default Pagos;
