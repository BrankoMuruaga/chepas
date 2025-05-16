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
        title="¿Como pagar tus Chepas?"
        endPage="¡Elegí la forma que más te guste y ponete unas Chepas al horno!"
      >
        <section className="w-full flex flex-col items-center md:my-10 gap-3">
          <div
            className={`grid gap-10 align-middle justify-items-center lg:w-2/3 ${
              pagos.length > 3
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {pagos.map((pago) => (
              <SectionDashed
                withBackground
                className="h-96 p-14"
                key={pago.name}
              >
                <img
                  className="h-44 hover:scale-105 transition-transform mb-3"
                  src={pago.image}
                  alt=""
                />
                <h1 className="text-title text-center text-2xl md:text-3xl">
                  {pago.name}
                </h1>
                <p className="text-subtitle text-lg md:text-2xl text-center">
                  {pago.descripcion}
                </p>
              </SectionDashed>
            ))}
          </div>
        </section>
      </Section>
    </>
  );
}

export default Pagos;
