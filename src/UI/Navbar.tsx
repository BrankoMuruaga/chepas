import { useState } from "react";
import Menu from "../icons/Menu";
import { navbarItems } from "../utils/data";
import X from "../icons/X";
import Logo from "../components/Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav id="menu-mobile" className="fixed top-0 w-full z-50 md:hidden">
        <button
          className="absolute right-4 top-4 text-nutmeg-wood-900 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
        <div className="relative w-full">
          <img
            id="wave-navbar-mobile"
            src="/images/wave-logo-navbar-mobile.png"
            className={`w-screen absolute object-cover md:hidden pointer-events-none ${
              isOpen ? "-translate-y-[100%]" : ""
            } transition-all duration-300 ease-in-out`}
          />
          {/* Área clickeable sobre el logo mobile */}
          <a
            href="#"
            aria-label="Ir al inicio"
            className="absolute left-8 top-2 w-20 h-16 z-20"
            style={{ display: "block" }}
          />
        </div>
        <section
          className="rounded-l-2xl absolute top-0 right-0 w-2/3 h-screen bg-web-orange-400 transition-transform duration-300 ease-in-out z-50"
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
            filter: "drop-shadow(0px 7px 5px rgba(0, 0, 0, 0.5))",
          }}
        >
          <button
            className=" absolute right-4 top-4 text-nutmeg-wood-900 z-10"
            onClick={() => setIsOpen(false)}
          >
            <X size={48}></X>
          </button>
          <div className="w-full h-1/3 flex relative justify-center items-center">
            <Logo className="relative h-24" />
          </div>
          <ul className="flex flex-col justify-start items-center h-2/3 gap-6 text-title text-nutmeg-wood-900">
            {navbarItems.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.href}
                  className="relative text-lg 2xl:text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </nav>
      <nav className="fixed top-0 w-full z-50 m-auto hidden md:block">
        <div className="relative w-full">
          <ul className="flex justify-center items-center p-4 gap-12 text-styled text-nutmeg-wood-900">
            {navbarItems.map((item, index) => (
              <li key={index} className="relative group">
                <a href={item.href} className="relative 2xl:text-xl">
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-nutmeg-wood-900 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </a>
              </li>
            ))}
          </ul>
          <img
            id="wave-navbar"
            src="/images/wave-logo-navbar.png"
            className="w-screen absolute object-cover -z-10 -top-0 md:block hidden pointer-events-none"
          />
          {/* Área clickeable sobre el logo desktop */}
          <a
            href="#"
            aria-label="Ir al inicio"
            className="absolute md:left-20 2xl:left-28 top-2 md:w-32 md:h-28 2xl:w-48 2xl:h-44 z-10"
            style={{ display: "block" }}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
