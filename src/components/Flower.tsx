import Petal from "@/components/Petal";

export default function Flower({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute grid scale-0 grid-cols-2 opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 ${className} `}
    >
      <Petal />
      <Petal className="rotate-90" />
      <Petal className="rotate-270" />
      <Petal className="rotate-180" />
    </div>
  );
}
