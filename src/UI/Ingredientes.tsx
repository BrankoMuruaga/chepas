import Section from "../components/Section";
import { ingredientes } from "../utils/data";

function Ingredientes({ id }: { id: string }) {
  return (
    <Section
      id={id}
      title="¿Qué tienen nuestras Chepas?"
      subtitle="Ingredientes de calidad premium para un sabor casero, auténtico y
          delicioso."
    >
      <section className="w-full flex justify-center items-center ">
        <span className="absolute -z-10">
          <svg
            className="w-full h-32"
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,20 Q180,0 360,20 Q540,40 720,20 Q900,0 1080,20 Q1260,40 1440,20"
              stroke="#FBBF24"
              strokeWidth="4"
              fill="none"
            />
          </svg>
        </span>
        {/* <img
          src="/images/linea-ingredientes.svg"
          className=" pointer-events-none absolute -z-10 w-screen"
        /> */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-items-center items-center w-full">
          {ingredientes.map((ingrediente) => (
            <span
              className={`transition-transform duration-200 hover:scale-125 flex flex-col justify-center items-center gap-2 ${ingrediente.position}`}
              key={ingrediente.name}
            >
              <img
                className="h-20 2xl:h-24"
                src={ingrediente.image}
                alt={ingrediente.name}
              />
              <h2 className="text-styled text-lg">{ingrediente.name}</h2>
            </span>
          ))}
        </div>
      </section>
    </Section>
  );
}

export default Ingredientes;
