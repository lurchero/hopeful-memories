export default function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px w-8 bg-accent" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {text}
      </span>
    </div>
  );
}
