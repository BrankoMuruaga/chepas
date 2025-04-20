function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="w-full max-w-[1600px] flex flex-col justify-center items-center px-10">
      <section className="w-full flex flex-col gap-3 justify-center items-center mb-14">
        <h1 className="text-styled text-4xl">{title}</h1>
        {subtitle && (
          <p className="text-subtitle text-2xl text-center">{subtitle}</p>
        )}
      </section>
      {children}
    </section>
  );
}

export default Section;
