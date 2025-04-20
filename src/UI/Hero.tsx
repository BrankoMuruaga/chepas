import Button from "../components/Button";
import Logo from "../components/Logo";

function Hero() {
  return (
    <header className="relative w-full min-h-screen flex flex-col justify-center">
      <section className="flex gap-5">
        <section className="relative z-10 w-1/2 flex justify-center items-center">
          <Logo className="sm:h-max absolute " />
        </section>
        <section className="flex flex-col justify-center items-start w-1/2 gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-title text-left text-5xl 2xl:text-6xl">
              Prendé el horno, <br /> prepará los mates...
              <br /> ¡y que no falten las Chepas!
            </h1>
            <p className="text-subtitle 2xl:text-2xl">
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
        className="w-screen absolute -z-10 -top-24 object-cover"
      />
    </header>
  );
}

export default Hero;
