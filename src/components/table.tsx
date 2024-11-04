"use client";
import Link from "next/link";

interface Props {
  toc: {
    level: number;
    text: string;
    id: string;
  }[];
}

function level(value: { level: number }) {
  if (value.level === 1) return "ml-0 font-bold";
  if (value.level === 2) return "ml-4";
  if (value.level === 3) return "ml-8";
  return "";
}

export default function Table({ toc }: Props) {
  return (
    <nav className="top-0 flex flex-col justify-center h-full w-full">
      <h1 className="border-b border-zinc-200 mb-4 p-2">Table of Contents</h1>
      <div className="flex flex-col gap-y-2 h-[50vh] w-full overflow-y-auto">
        {toc.map((value, index) => (
          <Link key={index} href={`#${value.id}`} className={`${level(value)}`}>
            {value.text}
          </Link>
        ))}
      </div>
    </nav>
  );
}
