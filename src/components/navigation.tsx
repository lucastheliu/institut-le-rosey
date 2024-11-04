"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Link {
  name: string;
  href: string;
}

const links: Link[] = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "Description", href: "/description" },
  { name: "Experiments", href: "/experiments" },
  { name: "Results", href: "/results" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute flex justify-center items-center w-screen px-16 z-50">
      <ul className="hidden sm:flex px-6 py-2">
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

      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 space-y-2 focus:outline-none"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-8 h-0.5 bg-zinc-800"
          ></motion.span>
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-8 h-0.5 bg-zinc-800"
          ></motion.span>
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-8 h-0.5 bg-zinc-800"
          ></motion.span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-white shadow-lg"
            >
              <ul className="flex flex-col py-2">
                {links.map(({ name, href }, index) => (
                  <li key={index}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-2 text-sm ${
                        pathname === href ? "bg-zinc-100" : ""
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
