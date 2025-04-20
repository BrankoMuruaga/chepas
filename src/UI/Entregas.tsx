import { envios } from "../utils/data";
import Section from "../components/Section";
import SectionDashed from "../components/SectionDashed";

function Entregas() {
  return (
    <Section title="¿Cómo puedes recibir tu Chepa?">
      <section className="w-3/4 flex justify-around items-center m-10 gap-10">
        {envios.map((envio) => (
          <SectionDashed className="w-1/2 h-96 p-14" key={envio.name}>
            <img className="h-44" src={envio.image} alt="" />
            <h1 className="text-title text-3xl">{envio.name}</h1>
            <p className="text-subtitle text-2xl text-center">
              {envio.descripcion}
            </p>
          </SectionDashed>
        ))}
      </section>
    </Section>
  );
}

export default Entregas;
