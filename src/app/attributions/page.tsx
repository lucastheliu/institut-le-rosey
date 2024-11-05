import Image from "next/image";
import data from "./data.json";
import { getImage } from "../lib/assets";

interface Member {
  name: string;
  role: string;
  tasks: string;
  specificTasks: string;
}

export default function Attributions() {
  const {
    members,
    contributors,
  }: { members: Member[]; contributors: Member[] } = data;

  return (
    <main className="flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-y-8 max-w-5xl">
        <div className="h-screen flex items-center gap-x-12">
          <div className="hidden sm:block w-full h-[60vh]">
            <Image
              width={640}
              height={640}
              alt="Picture"
              src={getImage()}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="w-full">
            <h1 className="text-3xl uppercase tracking-widest border-b p-2 mb-4">
              Attributions
            </h1>
            <div className="prose">
              <p>
                Our iGEM team is composed of members from around the world,
                including Turkey, Japan, India, Great Britain, Bulgaria,
                Ukraine, Thailand, Greece and more.
              </p>
              <p>
                Each team member has taken on key roles, ranging from safety and
                human practices to finance and public engagement.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-24 py-16">
          <div className="flex flex-col gap-y-8">
            <h1 className="border-b py-2 text-3xl">Team Members</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              {members.map(({ name, role, tasks, specificTasks }, index) => (
                <li key={index} className="border p-8">
                  <div className="pb-4">
                    <h2 className="text-2xl">{name}</h2>
                    <h3>{role}</h3>
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <p>{tasks}</p>
                    <p>{specificTasks}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-y-8">
            <h1 className="border-b py-2 text-3xl">External Contributors</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              {contributors.map(
                ({ name, role, tasks, specificTasks }, index) => (
                  <li key={index} className="border p-8">
                    <div className="pb-4">
                      <h2 className="text-2xl">{name}</h2>
                      <h3>{role}</h3>
                    </div>
                    <div className="flex flex-col gap-y-4">
                      <p>{tasks}</p>
                      <p>{specificTasks}</p>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
