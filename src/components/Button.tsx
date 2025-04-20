function Button({
  text,
  style = "title",
  href,
  className,
  ...props
}: {
  text: string;
  style?: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`text-${style} px-4 py-3 bg-burning-orange-400 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-orange-600 ${className}`}
      style={{
        filter: "drop-shadow(0px 7px 5px rgba(0, 0, 0, 0.5))",
      }}
      {...props}
    >
      {text}
    </a>
  );
}

export default Button;
