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
  const className =
    "text-title cursor-pointer flex items-center gap-2 rounded-xl bg-web-orange-400 p-4 text-nutmeg-wood-900 hover:bg-web-orange-500 transition duration-300 ease-in-out";
  const style = { filter: "drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.5))" };

  if (href) {
    return (
      <a
        className={className}
        style={style}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={icon} alt="Icon" className="w-6 h-6" loading="lazy" />
        {children}
      </a>
    );
  }

  return (
    <button
      className={className}
      style={style}
      type={typeSubmit ? "submit" : undefined}
    >
      <img src={icon} alt="Icon" className="w-6 h-6" loading="lazy" />
      {children}
    </button>
  );
}

export default ButtonIcon;
