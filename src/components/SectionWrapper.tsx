interface SectionWrapperProps {
  children: React.ReactNode;
  bg?: "light" | "warm" | "dark";
  id?: string;
  className?: string;
}

const bgMap = {
  light: "bg-secondary text-primary",
  warm: "bg-warm-100 text-primary",
  dark: "bg-neutral-800 text-secondary",
};

export default function SectionWrapper({
  children,
  bg = "light",
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 md:px-8 ${bgMap[bg]} ${className}`}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}
