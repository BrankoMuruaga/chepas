import Instagram from "../icons/Instagram";
import Logo from "../components/Logo";
import Wave from "../components/Wave";

function Footer() {
  return (
    <footer className="relative flex flex-col w-full">
      <Wave
        className="transform -scale-x-100 -z-10"
        fill="fill-web-orange-400"
        height="7rem"
      />
      <section className="flex w-full justify-start items-start top-32 h-20 pl-24">
        <Logo className="h-24 top-0 -translate-y-10 absolute"></Logo>
      </section>
      <section className="flex justify-between items-center px-4 pb-2">
        <a
          href="https://instagram.com/brankomuruaga"
          className="text-subtitle text-[0.8rem] font-semibold flex gap-2 items-center"
          target="_blank"
        >
          ¿Te gustó esta página? ¡Consultame por diseños web personalizados!
          <span className="w-6 h-6 flex justify-center items-center">
            <Instagram />
          </span>
        </a>
        <p className="text-subtitle text-[0.8rem]">
          © 2025 Chepas. Todos los derechos reservados
        </p>
      </section>
    </footer>
  );
}

export default Footer;
