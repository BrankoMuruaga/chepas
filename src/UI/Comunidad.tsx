import Section from "../components/Section";

function Comunidad({ id }: { id: string }) {
  return (
    <Section id={id} title="Chepas en acción">
      Comunidad
      <section className="flex flex-col gap-3 justify-center items-center mb-14 w-full">
        <p className="text-subtitle text-2xl text-center">
          ¿Querés ver más Chepas en acción?
        </p>
        <a
          className="text-title cursor-pointer flex items-center gap-2 rounded-xl bg-web-orange-400 p-4 text-nutmeg-wood-900 hover:bg-web-orange-500 transition duration-300 ease-in-out"
          style={{ filter: "drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.5))" }}
          href="https://instagram.com/chepas.arg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/Instagram.png"
            alt="Instagram"
            className="w-6 h-6"
            loading="lazy"
          />
          Seguinos en Instagram
        </a>
      </section>
    </Section>
  );
}

export default Comunidad;
