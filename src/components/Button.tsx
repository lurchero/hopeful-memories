interface ButtonProps {
  text: string;
  variant?: "filled" | "outline" | "outline-light" | "ghost";
  href?: string;
  type?: "button" | "submit";
}

const variants = {
  filled:
    "bg-accent text-secondary hover:bg-accent/90 px-8 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-secondary px-8 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary",
  "outline-light":
    "border border-secondary text-secondary hover:bg-secondary hover:text-primary px-8 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800",
  ghost:
    "text-accent underline-offset-4 hover:underline text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
};

export default function Button({
  text,
  variant = "filled",
  href,
  type = "button",
}: ButtonProps) {
  const className = variants[variant];

  if (href) {
    return (
      <a href={href} className={`inline-block ${className}`}>
        {text}
      </a>
    );
  }

  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
}
