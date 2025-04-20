import { ingredientes } from "../utils/data";

function Ingredientes() {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-28">
      <div className="flex flex-col justify-center items-center mt-10 mb-10 gap-4">
        <h1 className="text-styled text-4xl">¿Qué tienen nuestras Chepas?</h1>
        <p className="text-subtitle">
          Ingredientes de calidad premium para un sabor casero, auténtico y
          delicioso.
        </p>
      </div>
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
        <div className="grid grid-cols-4 grid-rows-2 gap-4 justify-items-center items-center w-full">
          {ingredientes.map((ingrediente) => (
            <span
              className={`transition-transform duration-200 hover:scale-125 flex flex-col justify-center items-center gap-2 ${ingrediente.position}`}
              key={ingrediente.name}
            >
              <img
                className="h-20"
                src={ingrediente.image}
                alt={ingrediente.name}
              />
              <h2 className="text-styled text-lg">{ingrediente.name}</h2>
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Ingredientes;
