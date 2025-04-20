import React from "react";

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`${className} flex flex-col justify-center items-center border-8 border-nutmeg-wood-900 border-dashed rounded-lg`}
    >
      {children}
    </section>
  );
}

export default Section;
