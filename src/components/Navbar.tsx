import { navbarItems } from "../utils/data";

function Navbar() {
  return (
    <nav className="absolute top-0 w-2/4 z-50 m-auto">
      <ul className="flex justify-center items-center p-4 gap-12 text-styled text-nutmeg-wood-900">
        {navbarItems.map((item, index) => (
          <li key={index} className="relative group">
            <a href={item.href} className="relative">
              {item.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-nutmeg-wood-900 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
