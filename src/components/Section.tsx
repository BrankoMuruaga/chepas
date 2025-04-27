function Section({
  id,
  title,
  subtitle,
  endPage,
  children,
  className,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  endPage?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="w-full max-w-[1600px] flex flex-col justify-center items-center px-3 md:px-10 scroll-mt-28"
    >
      <section className="w-full flex flex-col gap-3 justify-center items-center mb-14">
        <h1 className="text-styled text-3xl !text-center md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-subtitle text-lg md:text-2xl text-center">
            {subtitle}
          </p>
        )}
      </section>
      {children}
      {endPage && (
        <p className="text-subtitle text-xl md:text-2xl text-center mt-5 md:mt-0">
          {endPage}
        </p>
      )}
    </section>
  );
}

export default Section;
