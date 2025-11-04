'use client'

import Image from "next/image";
import CardGrid from "./components/card-grid";
import SignupCard from "./components/signup-card";
import { motion} from "framer-motion";
import { ThemeToggle } from "./components/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans overflow-hidden bg-[linear-gradient(110deg,_#000000_60%,_#8B3DFF_90%,_#8B3DFF_100%)] dark:bg-[linear-gradient(120deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)]">
      {/* Header */}
      <div className="z-50 absolute w-full p-5 flex items-center justify-between">
        {/* Logo */}
        <Image src={"/assets/ForescribeLogo.png"} alt="Forescribe Logo" width={120} height={40} className="object-contain" />

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex list-none flex-row justify-center gap-x-8 text-white items-center">
          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.3, ease: "easeInOut" }}
            className="cursor-pointer"
          >
            <Link href={'/about'} >
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

        {/* Mobile Menu (uses native <details> for no-extra-js toggle) */}
        <div className="sm:hidden flex items-center gap-3">
          <details className="relative">
            <summary
              aria-label="Open menu"
              className="list-none flex items-center justify-center w-10 h-10 rounded-md bg-black/30 text-white hover:bg-black/40 cursor-pointer"
            >
              {/* Hamburger */}
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                <rect width="18" height="2" rx="1" fill="currentColor" />
                <rect y="6" width="18" height="2" rx="1" fill="currentColor" />
                <rect y="12" width="18" height="2" rx="1" fill="currentColor" />
              </svg>
            </summary>

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute right-0 mt-2 bg-black/70 backdrop-blur rounded-md py-2 min-w-[160px] shadow-lg z-50"
            >
              <ul className="flex flex-col text-white">
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 cursor-pointer hover:bg-white/5"
                >
                  <Link href={'/about'}>
                    About
                  </Link>
                </motion.li>

                <motion.li
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 cursor-pointer hover:bg-white/5"
                >
                  <Link href={'/contact'}>
                    Contact Us
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          </details>

          {/* Theme Toggle (stays visible on mobile) */}
          <ThemeToggle />
        </div>

        {/* Theme Toggle for desktop (kept to the right) */}
        <div className="hidden sm:flex">
          <ThemeToggle />
        </div>
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
      <div className="relative z-10 flex items-center justify-center min-h-screen flex-col mx-6 sm:mx-0">
        <SignupCard />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="text-[13px] text-white max-w-md font-medium mt-3 text-start"
        >
          By clicking “Continue with Google/Microsoft” above, you acknowledge that you have read and understood, and agree to Forescribe's <span className="text-purple-500">Terms & Conditions</span> and <span className="text-purple-500">Privacy Policy</span>.
        </motion.p>
      </div>
    </main >
  );
}
