import React from "react";

function SectionDashed({
  children,
  className,
  withBackground = false,
}: {
  children: React.ReactNode;
  className?: string;
  withBackground?: boolean;
}) {
  return (
    <section
      className={`${className} ${
        withBackground ? "bg-[#FF8A4B]" : ""
      } flex flex-col justify-center items-center border-8 border-nutmeg-wood-900 border-dashed rounded-lg`}
    >
      {children}
    </section>
  );
}

export default SectionDashed;
