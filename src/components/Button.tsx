import type { ReactNode } from "react";
import Flower from "@/components/Flower";

interface ButtonProps {
  children?: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className={`group relative flex w-full items-center justify-center`}
    >
      <div className="rounded-full bg-linear-to-r from-orange-200 via-amber-300 to-yellow-200 p-[2px]">
        <div className="relative flex items-center rounded-full bg-linear-to-r from-blue-200 via-sky-300 to-blue-200 px-6 py-3 pl-13 font-semibold text-black transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg hover:text-white">
          <Flower className="-translate-x-8 scale-100 animate-spin-slow opacity-100" />
          {children ?? "Flowers"}
        </div>
      </div>

      <Flower className="delay-75 group-hover:-translate-x-14 group-hover:-translate-y-10 group-hover:animate-spin-slow" />
      <Flower className="delay-100 group-hover:-translate-x-5 group-hover:translate-y-9 group-hover:animate-spin-reverse" />
      <Flower className="delay-150 group-hover:-translate-y-7 group-hover:animate-spin-slow" />
      <Flower className="delay-200 group-hover:translate-x-14 group-hover:-translate-y-10 group-hover:animate-spin-reverse" />
      <Flower className="delay-250 group-hover:translate-x-22 group-hover:-translate-y-2 group-hover:animate-spin-slow" />
      <Flower className="delay-300 group-hover:translate-x-12 group-hover:translate-y-10 group-hover:animate-spin-reverse" />
    </button>
  );
}
