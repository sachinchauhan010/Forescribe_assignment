'use client'

import Image from "next/image";
import CardGrid from "./components/card-grid";
import SignupCard from "./components/signup-card";
import { motion, scale } from "framer-motion";
import { ThemeToggle } from "./components/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(120deg,_#000000_35%,_#8B3DFF_90%,_#8B3DFF_100%)] dark:bg-[linear-gradient(120deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)]">
      {/* Header */}
      <div className="z-50 absolute w-full p-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative w-8 h-8">
            <Image src="/Logo.svg" alt="Logo" fill className="object-contain" />
          </div>
          <span className="text-white text-lg sm:text-xl font-semibold">forescribe</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex list-none flex-row w-1/3 justify-evenly text-white">
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.3, ease: "easeInOut" }}
              className="cursor-pointer"
            >
              <Link href={'/about'}>
                About
              </Link>
            </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.3, ease: "easeInOut" }}
            className="cursor-pointer"
          >
            <Link href={'/contact'}>
              Contact Us
            </Link>
          </motion.li>
        </ul>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      {/* Background Animation */}
      <motion.div
        className="fixed inset-0 opacity-20"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <CardGrid />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen flex-col">
        <SignupCard />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="text-xs text-white max-w-md font-medium mt-3 text-start"
        >
          By clicking “Continue with Google/Microsoft” above, you acknowledge that you have read and understood, and agree to Forescribe's <span className="text-purple-500">Terms & Conditions</span> and <span className="text-purple-500">Privacy Policy</span>.
        </motion.p>
      </div>
    </main >
  );
}
