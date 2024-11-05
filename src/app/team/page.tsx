"use client";
import Image from "next/image";
import data from "./data.json";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";

interface Member {
  name: string;
  tasks: string;
  href: string;
  linkin?: string;
}

export default function Team() {
  const { members }: { members: Member[] } = data;
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="lg:h-screen flex flex-col lg:flex-row items-center gap-x-8 max-w-5xl px-6 py-24 lg:py-0">
        <div className="flex flex-col pb-16">
          <h1 className="text-3xl uppercase tracking-widest border-b p-2 mb-4">
            Our Team
          </h1>
          <div className="prose">
            <p>
              Our iGEM team is composed of members from around the world,
              including Turkey, Japan, India, Great Britain, Bulgaria, Ukraine,
              Thailand, Greece and more.
            </p>
            <p>
              Each team member has taken on key roles, ranging from safety and
              human practices to finance and public engagement.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:max-h-[70vh] md:bg-zinc-200 rounded-md w-full md:shadow-inner">
          <ul className="w-max grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 md:p-8 lg:overflow-y-auto scrollbar-none">
            {members.map((member, index) => {
              const { name, href } = member;
              return (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="relative flex flex-col items-center rounded-md w-40 bg-white shadow-md"
                >
                  <Image
                    width={160}
                    height={208}
                    alt={`${name} Picture`}
                    src={href}
                    className="object-cover rounded-md w-40 h-52"
                  />
                  <div className="absolute bottom-0 w-full bg-zinc-800/80 p-2 rounded-b-md">
                    <p className="text-center text-white">{name}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-screen max-w-5xl gap-y-8 py-16 px-4 md:px-12">
        <FadeIn>
          <h2 className="border-b py-1 text-2xl uppercase tracking-widest">
            What We Do
          </h2>
        </FadeIn>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full">
          {[...Array(4)].map((_, index) => (
            <li key={index}>
              <FadeIn>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  className="relative flex justify-center items-center h-[80vh] w-full p-12"
                >
                  <div className="prose prose-invert">
                    <h1>Placeholder</h1>
                    <p>This is what our team did!</p>
                  </div>
                  <Image
                    width={640}
                    height={640}
                    alt="Picture"
                    src={
                      "https://static.igem.wiki/teams/5502/random/random1.webp"
                    }
                    className="absolute left-0 top-0 size-full opacity-80 object-cover -z-20"
                  />
                  <motion.div
                    variants={{
                      rest: { opacity: 0.9 },
                      hover: { opacity: 0.97 },
                    }}
                    className="absolute inset-0 bg-zinc-800 px-8 -z-10"
                  />
                </motion.div>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
