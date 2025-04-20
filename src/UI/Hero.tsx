import Logo from "../components/Logo";
import Button from "../components/Button";

function Hero() {
  return (
    <header className="relative bg-web-orange-400 size-full pt-32">
      <section className="flex w-full gap-5">
        <section className="pt-20 z-10 w-1/2">
          <Logo />
        </section>
        <section className="flex flex-col justify-center items-start w-1/2 gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-title text-left text-5xl">
              Prendé el horno, <br /> prepará los mates...
              <br /> ¡y que no falten las Chepas!
            </h1>
            <p className="text-subtitle">
              Congeladas, artesanales y siempre listas para acompañar tus
              mejores momentos.
            </p>
          </div>
          <div className="">
            <Button
              href="#contacto"
              className="!text-white"
              text="CONSEGUÍ LAS TUYAS"
            ></Button>
          </div>
        </section>
      </section>
      <div className="custom-shape-divider-top-1745016309">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  );
}

export default Hero;
