export default function SectionLabel({
  text,
  align = "left",
}: {
  text: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex items-center gap-4 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <div className="h-px w-8 bg-accent" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {text}
      </span>
    </div>
  );
}
