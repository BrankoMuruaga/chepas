function ButtonIcon({
  icon,
  href,
  typeSubmit,
  children,
}: {
  icon: string;
  href?: string;
  typeSubmit?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      className="text-title cursor-pointer flex items-center gap-2 rounded-xl bg-web-orange-400 p-4 text-nutmeg-wood-900 hover:bg-web-orange-500 transition duration-300 ease-in-out"
      style={{ filter: "drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.5))" }}
      type={typeSubmit ? "submit" : undefined}
      onClick={(e) => {
        if (href && !typeSubmit) {
          e.preventDefault();
          window.open(href, "_blank", "noopener,noreferrer");
        }
      }}
    >
      <img src={icon} alt="Icon" className="w-6 h-6" loading="lazy" />
      {children}
    </button>
  );
}

export default ButtonIcon;
