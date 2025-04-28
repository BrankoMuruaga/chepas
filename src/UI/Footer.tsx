import Instagram from "../icons/Instagram";
import Logo from "../components/Logo";
import Wave from "../components/Wave";
import { navbarItems } from "../utils/data";

function Footer() {
  return (
    <footer className="relative flex flex-col w-full  md:h-auto">
      <Wave
        className="transform -scale-x-100 -z-10 hidden md:block"
        fill="fill-web-orange-400"
        height="7rem"
      />

      <img
        src="/images/wave-footer-mobile.svg"
        className="md:hidden absolute -z-10 bottom-0 left-0 w-full overflow-hidden"
      />
      <section className=" w-full justify-start items-start top-32 h-20 pl-24 hidden md:flex">
        <Logo className="h-24 top-0 -translate-y-10  absolute"></Logo>
      </section>

      <section className="flex flex-col md:flex-row justify-center md:justify-between items-center px-4 pb-2 mt-24 gap-5 md:gap-0 md:mt-0">
        <a
          href="https://instagram.com/brankomuruaga"
          className="text-subtitle text-[0.8rem] font-semibold flex flex-col md:flex-row justify-center text-center gap-2 items-center"
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
