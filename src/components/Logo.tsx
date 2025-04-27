function Logo({ className, id }: { className?: string; id?: string }) {
  return (
    <img
      id={id}
      src="/images/Logo.webp"
      alt="Logo de Chepas"
      className={className}
      loading="lazy"
      style={{
        filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5))",
      }}
    />
  );
}

export default Logo;
