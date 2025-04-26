import { envios } from "../utils/data";
import Section from "../components/Section";
import SectionDashed from "../components/SectionDashed";

function Entregas({ id }: { id: string }) {
  return (
    <>
      <Section
        id={id}
        title="¿Cómo puedes recibir tu Chepa?"
        endPage="¡Así de fácil llegan tus Chepas listas para acompañar los mejores momentos!"
      >
        <section className="w-full md:w-3/4 flex flex-col md:flex-row justify-around items-center md:m-10 gap-10">
          {envios.map((envio) => (
            <SectionDashed
              className="md:w-1/2 h-96 py-14 px-5 md:p-14"
              key={envio.name}
            >
              <img className="h-44" src={envio.image} alt="" />
              <h1 className="text-title text-3xl">{envio.name}</h1>
              <p className="text-subtitle text-lg md:text-2xl text-center">
                {envio.descripcion}
              </p>
            </SectionDashed>
          ))}
        </section>
      </Section>
      <img
        src="/images/linea-pagos.svg"
        className="bottom-7/12 -rotate-12 translate-y-24 pointer-events-none absolute -z-10 w-screen"
      />
    </>
  );
}

export default Entregas;
