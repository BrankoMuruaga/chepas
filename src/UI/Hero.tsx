import Button from "../components/Button";
import Logo from "../components/Logo";

function Hero() {
  return (
    <header className="relative w-full min-h-screen  md:translate-y-0 h-screen flex flex-col justify-center">
      <section className="flex flex-col md:flex-row justify-center items-center gap-7 md:gap-16">
        <section className="relative z-10 w-3/4 md:w-1/2 flex justify-center items-center ">
          <Logo id="logo" className="sm:h-max " />
        </section>
        <section className="flex flex-col justify-center items-center md:items-start md:w-1/2 gap-5 md:gap-10 ">
          <div className="flex flex-col gap-5">
            <h1 className="text-title text-center md:text-left text-3xl md:text-5xl 2xl:text-6xl">
              Prendé el horno, <br /> prepará los mates...
              <br /> ¡y que no falten las Chepas!
            </h1>
            <p className="text-subtitle 2xl:text-2xl text-lg sm:text-xl text-center md:text-left">
              Congeladas, artesanales y siempre listas para acompañar tus
              mejores momentos.
            </p>
          </div>
          <Button
            href="#contacto"
            className="!text-white z-10"
            text="CONSEGUÍ LAS TUYAS"
          ></Button>
        </section>
      </section>
      <img
        src="/images/wave-hero.svg"
        className="w-screen absolute -z-10 -top-24 object-cover hidden md:block"
      />

      <img
        src="/images/wave-hero-mobile.svg"
        className="w-full h-full absolute -z-10 -top-10 object-cover md:hidden"
      />
    </header>
  );
}

export default Hero;
