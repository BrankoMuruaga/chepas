import { useState } from "react";
import Menu from "../icons/Menu";
import { navbarItems } from "../utils/data";
import X from "../icons/X";
import Logo from "../components/Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 md:hidden">
        <button
          className="absolute right-4 top-4 text-nutmeg-wood-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
        <section
          className="rounded-l-2xl absolute top-0 right-0 w-2/3 h-screen bg-web-orange-400 transition-transform duration-300 ease-in-out"
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)",
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
      <nav className="absolute top-0 w-2/4 z-50 m-auto hidden md:block">
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
      </nav>
    </>
  );
}

export default Navbar;
