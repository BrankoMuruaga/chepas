import Logo from "../components/Logo";
import Wave from "../components/Wave";

function Footer() {
  return (
    <footer className="relative w-full h-30">
      <Wave fill="fill-web-orange-400" height="7rem" />
      <section className="flex w-full justify-start items-center top-28 py-10 pl-24">
        <Logo className="h-20 absolute"></Logo>
      </section>
    </footer>
  );
}

export default Footer;
