function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/images/Logo.png"
      alt="Logo de Chepas"
      className={className}
      style={{
        filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.5))",
      }}
    />
  );
}

export default Logo;
