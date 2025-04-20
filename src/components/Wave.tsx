function Wave({
  fill,
  height,
  className,
  ...props
}: {
  fill?: string;
  height?: string;
  className?: string;
}) {
  const containerClasses =
    "absolute bottom-0 left-0 w-full overflow-hidden -scale-x-100" + className;
  const svgClasses = "relative block w-[150%] h-[13rem] -translate-x-[5%]";

  return (
    <div className={containerClasses} {...props}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={svgClasses}
        style={{ height: height }}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className={`shape-fill ${fill}`}
          fill={fill}
        ></path>
      </svg>
    </div>
  );
}

/*
.custom-shape-divider-top-1745016309 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    transform: scaleX(-1);
}

.custom-shape-divider-top-1745016309 svg {
    position: relative;
    display: block;
    width: 150%;
    height: 13rem;
    transform: translateX(-5%);
}
*/

export default Wave;
