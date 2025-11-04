'use client'

import Image from "next/image";
import CardGrid from "./components/card-grid";
import SignupCard from "./components/signup-card";
import { motion, scale } from "framer-motion";
import { ThemeToggle } from "./components/theme-toggle";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans overflow-hidden bg-[linear-gradient(110deg,_#000000_60%,_#8B3DFF_90%,_#8B3DFF_100%)] dark:bg-[linear-gradient(120deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)]">
      {/* Header */}
      <Header/>

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
