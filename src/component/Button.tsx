import type { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`group relative flex items-center justify-center ${className}`}
    >
      <div
        className="
          relative rounded-full bg-gradient-to-r from-orange-200 via-amber-300 to-yellow-200
          px-6 py-3 font-semibold text-black transition-all duration-500 group-hover:text-white
          group-hover:from-yellow-200 group-hover:via-amber-300 group-hover:to-orange-200
          group-hover:scale-110 group-hover:shadow-lg flex items-center pl-13 "
      >
        <Flower className=" -translate-x-8 animate-spin-slow scale-100 opacity-100" />
        {children ?? "Flowers"}
      </div>

      <Flower className="group-hover:-translate-x-14 group-hover:-translate-y-10 group-hover:animate-spin-slow delay-75" />
      <Flower className="group-hover:-translate-x-5 group-hover:translate-y-9 group-hover:animate-spin-reverse delay-100" />
      <Flower className="group-hover:-translate-y-7 group-hover:animate-spin-slow delay-150" />
      <Flower className="group-hover:translate-x-14 group-hover:-translate-y-10 group-hover:animate-spin-reverse delay-200" />
      <Flower className="group-hover:translate-x-22 group-hover:-translate-y-2 group-hover:animate-spin-slow delay-250" />
      <Flower className="group-hover:translate-x-12 group-hover:translate-y-10 group-hover:animate-spin-reverse delay-300" />
    </button>
  );
}


function Flower({ className }: { className?: string }) {
  return (
    <div
      className={`
        pointer-events-none absolute grid grid-cols-2 opacity-0 scale-0 transition-all duration-500 ease-out
        group-hover:opacity-100 group-hover:scale-100 ${className}
      `}
    >
      <Petal />
      <Petal className="rotate-90" />
      <Petal className="rotate-[270deg]" />
      <Petal className="rotate-180" />
    </div>
  );
}


function Petal({ className }: { className?: string }) {
  return (
    <div
      className={`
        h-[10px] w-[10px] rounded-[40%_70%/7%_90%] bg-gradient-to-b from-cyan-500 to-cyan-200 border border-cyan-300 transition-all duration-500 
        group-hover:h-[14px] group-hover:w-[14px] group-hover:from-blue-600 group-hover:to-blue-300 ${className} `}
    />
  );
}