import Menu from "../icons/Menu";
import { navbarItems } from "../utils/data";

function Navbar() {
  return (
    <>
      <nav className="absolute top-0 w-full z-50 md:hidden">
        <button className="absolute right-4 top-4 text-nutmeg-wood-900">
          <Menu />
        </button>
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
