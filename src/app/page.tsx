"use client";
import Link from "next/link";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { images } from "@/lib/assets";

import { FadeIn } from "@/components/animations";
import Scene from "@/components/earth";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6">
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
              href={"#scene"}
            >
              Get started
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-screen h-screen">
        <div
          id="scene"
          className="relative flex flex-col items-center w-full h-[80vh]"
        >
          <Scene />
          <p className="border-b p-1 my-4">
            This is a model of our planet: Earth.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-screen">
        <FadeIn className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl uppercase tracking-widest">Our Team</h2>
          <p className="min-h-12 md:min-h-8 text-center max-w-3xl">
            Our iGEM team is composed of members from around the world,
            including Turkey, Japan, India, Great Britain, Bulgaria, Ukraine,
            Thailand, Greece and more. Each team member has taken on key roles,
            ranging from safety and human practices to finance and public
            engagement.
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
                        className="object-cover opacity-80 size-full"
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

      <div className="flex items-center md:h-[120vh] py-24 md:py-0">
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
            href={"/description"}
          >
            Learn more
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl min-h-[60vh] py-8 text-center text-white">
            <div className="md:col-span-2 flex justify-center items-center bg-zinc-800 size-full p-8">
              <p>
                Lung cancer is the leading cause of cancer-related deaths
                worldwide, responsible for <b>1.8 million deaths in 2022</b>.
              </p>
            </div>
            <div className="md:row-span-2 flex justify-center items-center bg-zinc-800 size-full p-8">
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

      <div className="flex items-center h-screen w-screen">
        <FadeIn className="flex flex-col justify-center items-center w-full p-8">
          <div className="flex flex-col justify-center items-center gap-y-4 py-4">
            <h2 className="text-2xl uppercase tracking-widest">Video</h2>
            <p className="min-h-12 md:min-h-8 text-center max-w-3xl">
              Here, we would like to show you one of our videos. Please enjoy!
            </p>
          </div>

          <div className="w-full aspect-video max-w-5xl">
            <iframe
              title="Institut-Le-Rosey: Aptagenix: the Story of John (2024) - Project Promotion [English]"
              width={1280}
              height={720}
              src="https://video.igem.org/videos/embed/f29207f5-40a0-4979-a0e2-4065a28860cb"
              allowFullScreen={true}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              className="size-full border rounded-md"
            />
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
