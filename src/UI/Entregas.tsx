import Section from "../components/Section";

function Entregas() {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-28 p-10">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-styled text-4xl">¿Cómo recibís tus Chepas?</h1>
      </div>
      <section className="w-3/4 flex justify-around items-center m-10 gap-10">
        <Section className="w-1/2 h-96 p-14">
          <img className="h-44" src="/images/pin-ubicacion.png" alt="" />
          <h1 className="text-title text-3xl">Retiro</h1>
          <p className="text-subtitle text-2xl text-center">
            De lunes a sábado en Villa Club, Hurlingham (a coordinar)
          </p>
        </Section>
        <Section className="w-1/2 h-96 p-14">
          <img className="h-44" src="/images/envio.png" alt="" />
          <h1 className="text-title text-3xl">Envío</h1>
          <p className="text-subtitle text-2xl text-center">
            De lunes a sábado por la tarde (a coordinar)
          </p>
        </Section>
      </section>
    </section>
  );
}

export default Entregas;
