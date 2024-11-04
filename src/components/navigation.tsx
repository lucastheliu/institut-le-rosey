"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Team",
    href: "/team",
  },
  {
    name: "Results",
    href: "/results",
  },
  {
    name: "Notebook",
    href: "/notebook",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="absolute flex justify-center items-center w-screen px-16">
      <ul className="flex px-6 py-2">
        {links.map(({ name, href }, index) => (
          <li key={index}>
            <Link href={href} className="text-sm hover:cursor-pointer">
              <motion.div
                whileHover={"hover"}
                whileTap={{ scale: 1.1 }}
                className="px-4 py-2 relative"
              >
                {name}
                <motion.div
                  className="absolute bottom-1 left-4 right-4 h-px bg-zinc-800 origin-left"
                  initial={{ scaleX: pathname === href ? 1 : 0 }}
                  animate={{ scaleX: pathname === href ? 1 : 0 }}
                  variants={{ hover: { scaleX: 1 } }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
