interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  textClassName?: string;
}

export default function Logo({
  size = 40,
  showText = true,
  className = "",
  textClassName = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-label="PPMI 로고"
      >
        <circle cx="50" cy="50" r="48" fill="#C8102E" />
        <circle cx="50" cy="50" r="36" fill="#FFFFFF" />
        <circle cx="50" cy="50" r="28" fill="#C8102E" />
        <circle cx="62" cy="54" r="9" fill="#FFFFFF" />
      </svg>

      {showText && (
        <span
          className={`font-black tracking-tight leading-none ${textClassName}`}
          style={{
            fontSize: `${size * 0.55}px`,
            letterSpacing: "-0.02em",
          }}
        >
          PPMI
        </span>
      )}
    </div>
  );
}
