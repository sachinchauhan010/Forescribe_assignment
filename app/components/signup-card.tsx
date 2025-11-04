"use client"

import { motion, easeInOut } from "framer-motion";
import Button from "@/app/components/button";
import Image from "next/image";
import { FaGoogle, FaWindows } from "react-icons/fa";

export default function SignupCard() {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-heading"
      aria-describedby="welcome-description"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-black/40 dark:bg-zinc-400/40 backdrop-blur-md rounded-xl p-8 w-[459px] max-w-md h-80 border border-white/20 dark:border-white/10 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center" aria-hidden="true">
            <Image src="/Logo.svg" alt="Forescribe Logo" width={25} height={25} />
          </div>
        </motion.div>

        <motion.h1
          id="welcome-heading"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-xl font-semibold text-white mb-7 dark:text-black"
        >
          Welcome to Forescribe
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="w-full space-y-6"
        >
          <motion.div
            whileHover={{ rotateX: 25, rotateY: 10, y: -5 }}
            whileTap={{ y: 0 }}
            style={{
              translateZ: 100,
              boxShadow: "0px 20px 50px rgba(8,112,184, 0.7)"
            }}
            transition={{
              duration: 0.3,
              ease: easeInOut
            }}
            className="flex justify-center items-center gap-x-4 w-full h-11 cursor-pointer bg-purple-600 dark:bg-white dark:text-purple-600 hover:bg-purple-700 hover:text-white text-white py-2 rounded-md transition-all duration-300"
          >
            <FaGoogle className="w-5.5 h-5.5" />
            <button
              aria-label="Continue with Google"
              className="border-none"
            >
              Continue with Google
            </button>
          </motion.div>

          <motion.div whileHover={{ rotateX: 15, rotateY: 10, y: -5 }}
            whileTap={{ y: 0 }}
            style={{
              translateZ: 100,
              boxShadow: "0px 20px 50px rgba(8,112,184, 0.7)"
            }}
            transition={{
              duration: 0.3,
              ease: easeInOut
            }}
            className="flex justify-center items-center gap-x-4 w-full h-11 border cursor-pointer border-zinc-700 dark:border-zinc-200 text-zinc-300 py-2 rounded-md hover:bg-zinc-800 transition-all duration-300 bg-zinc-700"
          >
            <FaWindows className="w-5.5 h-5.5 text-white" />
            <button
              aria-label="Continue with Email"
              className="border-none"
            >
              Continue with Microsoft
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
