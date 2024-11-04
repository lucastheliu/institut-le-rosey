"use client";
import Link from "next/link";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { images } from "./lib/assets";
import Scene from "@/components/earth";

function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-12">
      <div className="flex items-center h-screen">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Image
            width={240}
            height={240}
            alt="Logo"
            src={"https://static.igem.wiki/teams/5502/logo.png"}
            className="bg-zinc-800 rounded-full p-8 mb-8 animate-[spin_8s_ease-in-out_infinite]"
          />
          <h1 className="text-4xl uppercase tracking-widest">Aptagenix</h1>
          <p className="min-h-12 md:min-h-8 text-center">
            <TypeAnimation
              sequence={[
                "Our inexpensive, non-invasive solution for detecting non-small cell lung cancer.",
              ]}
              wrapper="span"
              speed={80}
            />
          </p>
          <div className="flex gap-x-2">
            <Link
              className="text-sm border rounded-md px-8 py-2"
              href={"/results"}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="relative w-full h-[80vh]">
          <Scene />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-lg tracking-wide uppercase bg-white px-16 py-4">
              <span>We are the</span>{" "}
              <b className="text-2xl px-2 tracking-normal bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                iGEM team
              </b>{" "}
              <br />
              <span>from</span>{" "}
              <b className="text-2xl px-2 tracking-normal bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Institut Le Rosey
              </b>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen">
        <FadeIn className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl uppercase tracking-widest">Our Team</h2>
          <p className="min-h-12 md:min-h-8 text-center max-w-3xl">
            Our iGEM team is composed of members from around the world,
            including Turkey, Japan, India, Great Britain, Bulgaria, Ukraine,
            Thailand and more. Each team member has taken on key roles, ranging
            from safety and human practices to finance and public engagement.
          </p>
          <Link className="text-sm border rounded-md px-8 py-2" href={"/team"}>
            About us
          </Link>
        </FadeIn>
        <FadeIn className="py-12 relative h-64">
          <div className="absolute left-0 -translate-x-1/2 overflow-x-hidden w-screen">
            <motion.ul
              animate={{
                x: [0, images.length * -(64 * 4)],
              }}
              transition={{
                x: {
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex gap-x-8"
            >
              {[...Array(2)].map((_, key) => (
                <li key={key} className="flex gap-x-4 min-w-max">
                  {images.map((url, index) => (
                    <div key={index} className="w-80 h-64 relative">
                      <Image
                        width={256}
                        height={256}
                        alt={`Picture ${index + 1}`}
                        src={url}
                        className="object-cover opacity-80 w-full h-full"
                      />
                      <div className="absolute inset-0 bg-zinc-800 opacity-50" />
                    </div>
                  ))}
                </li>
              ))}
            </motion.ul>
          </div>
        </FadeIn>
      </div>

      <div className="flex items-center h-screen">
        <FadeIn className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl uppercase tracking-widest">The Mission</h2>
          <p className="min-h-12 md:min-h-8 text-center max-w-3xl">
            Our project aims to make early lung cancer screening affordable for
            everyone. The kit will act as a preliminary test to identify
            high-risk individuals, allowing for early treatment before lung
            cancer advances to critical stages. By offering a low-cost solution,
            we hope to improve public access to cancer diagnosis, helping to
            reduce disparities in healthcare accessibility.
          </p>
          <Link
            className="text-sm border rounded-md px-8 py-2"
            href={"/results"}
          >
            Learn more
          </Link>
          <div className="hidden md:grid grid-cols-3 gap-4 max-w-4xl min-h-[60vh] py-8 text-center text-white">
            <div className="col-span-2 flex justify-center items-center bg-zinc-800 size-full p-8">
              <p>
                Lung cancer is the leading cause of cancer-related deaths
                worldwide, responsible for <b>1.8 million deaths in 2022</b>.
              </p>
            </div>
            <div className="row-span-2 flex justify-center items-center bg-zinc-800 size-full p-8">
              <p>
                The average cost for a lung cancer diagnosis is <b>$3,558</b>.
                Many patients undergo these expensive tests only to be told they
                don&apos;t have lung cancer
              </p>
            </div>
            <div className="flex justify-center items-center bg-zinc-800 size-full p-8">
              <p>
                Due to late-stage diagnoses, lung cancer treatment is{" "}
                <b>often ineffective</b>.
              </p>
            </div>
            <div className="flex justify-center items-center bg-zinc-800 size-full p-8">
              <p>
                In fact, <b>43.6% of patients</b> diagnosed turn out to be
                healthy, leading to unnecessary financial burden.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
