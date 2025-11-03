"use client"

import { motion } from "framer-motion";
import Button from "@/app/components/button";
import Image from "next/image";

export default function WelcomeModal() {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-heading"
      aria-describedby="welcome-description"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-black/40 dark:bg-zinc-400/40 backdrop-blur-md rounded-xl p-8 w-full max-w-md border border-white/20 dark:border-white/10 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
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
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl font-semibold text-white mb-2 dark:text-black"
        >
          Welcome to Forescribe
        </motion.h1>

        <p id="welcome-description" className="text-sm text-zinc-300 mb-6 dark:text-black">
          Get started by choosing a sign-in method below.
        </p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full space-y-3"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              aria-label="Continue with Google"
              className="w-full cursor-pointer bg-purple-600 dark:bg-white dark:text-purple-600 hover:bg-purple-700 hover:text-white text-white py-2 rounded-md transition-all duration-300"
            >
              Continue with Google
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              aria-label="Continue with Email"
              variant="outline"
              className="w-full border cursor-pointer border-zinc-700 dark:border-zinc-200 text-zinc-300 py-2 rounded-md hover:bg-zinc-600 transition-all duration-300"
            >
              Continue with Email
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
