"use client"

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/app/components/button";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-2 sm:px-4 py-10 md:px-8" role="main">
      {/* Floating decorative gradient (subtle) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-500 opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto">
        <nav aria-label="Back navigation">
          <Link href="/" aria-label="Go back to homepage">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ x: -6 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to Home
              </Button>
            </motion.div>
          </Link>
        </nav>

        <motion.article
          className="bg-zinc-900 rounded-2xl p-4 sm:p-6 md:p-10 shadow-2xl border border-zinc-800"
          aria-labelledby="about-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <header>
            <h1
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
            >
              About Forescribe
            </h1>
            <p className="text-zinc-400 max-w-2xl">
              A modern integrations hub built to make connecting your favorite tools fast, secure, and delightful.
              Forescribe is focused on delivering a lightweight, polished experience so teams can automate and
              collaborate with confidence.
            </p>
          </header>

          <div className="mt-6 space-y-6 text-zinc-400 leading-relaxed text-base md:text-lg">
            <section aria-labelledby="mission-heading">
              <h2
                id="mission-heading"
                className="text-xl md:text-2xl font-semibold text-white mb-2"
              >
                Our Mission
              </h2>
              <p>
                Simplify workflows by bringing integrations under one roof. We design for clarity and speed so users
                spend less time switching contexts and more time shipping work.
              </p>
            </section>

            <section aria-labelledby="philosophy-heading">
              <h2
                id="philosophy-heading"
                className="text-xl md:text-2xl font-semibold text-white mb-2"
              >
                Philosophy
              </h2>
              <p>
                Small, composable integrations matter more than a long checklist. We prioritize reliability, privacy,
                and performance. The UI is intentionally simple to reduce cognitive load for new and power users alike.
              </p>
            </section>

            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-xl md:text-2xl font-semibold text-white mb-2"
              >
                Key Features
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-zinc-300">
                <li>Fast onboarding and secure OAuth flows (placeholder flows in the assignment)</li>
                <li>Animated integration grid for visual context</li>
                <li>Theme toggle and responsive design</li>
                <li>Modular components that are ready to extend</li>
              </ul>
            </section>

            <div className="pt-6">
              <Link href="/contact" aria-label="Contact us">
                <Button className="bg-purple-600 hover:bg-purple-700 transition w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
