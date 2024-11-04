import Image from "next/image";
import data from "./data.json";

interface Member {
  name: string;
  tasks: string;
  href: string;
  linkin?: string;
}

export default function Team() {
  const { members }: { members: Member[] } = data;
  return (
    <main className="flex flex-col items-center justify-center lg:h-screen px-12 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-x-8 max-w-5xl">
        <div className="flex flex-col pb-16">
          <h1 className="text-3xl uppercase tracking-widest border-b p-2 mb-4">
            Our Team
          </h1>
          <div className="prose">
            <p>
              Our iGEM team is composed of members from around the world,
              including Turkey, Japan, India, Great Britain, Bulgaria, Ukraine,
              Thailand and more.
            </p>
            <p>
              Each team member has taken on key roles, ranging from safety and
              human practices to finance and public engagement.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:max-h-[70vh] bg-zinc-200 rounded-md w-full shadow-inner">
          <ul className="w-max grid grid-cols-2 md:grid-cols-3 gap-8 p-8 lg:overflow-y-auto scrollbar-none">
            {members.map((member, index) => {
              const { name, href } = member;
              return (
                <li
                  key={index}
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
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
