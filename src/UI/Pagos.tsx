import SectionDashed from "../components/SectionDashed";
import Section from "../components/Section";
import { pagos } from "../utils/data";

function Pagos({ id }: { id: string }) {
  return (
    <Section
      id={id}
      title="¿Cómo puedes pagar tu Chepa?"
      endPage="¡Elegí la forma que más te guste y ponete unas Chepas al horno!"
    >
      <section className="w-full flex justify-center items-center my-10 gap-3">
        {pagos.map((pago) => (
          <SectionDashed
            withBackground
            className="w-1/3 h-96 p-14"
            key={pago.name}
          >
            <img className="h-44" src={pago.image} alt="" />
            <h1 className="text-title text-3xl">{pago.name}</h1>
            <p className="text-subtitle text-2xl text-center">
              {pago.descripcion}
            </p>
          </SectionDashed>
        ))}
      </section>
    </Section>
  );
}

export default Pagos;
