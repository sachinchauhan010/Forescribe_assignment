'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/app/components/button';

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen p-2 md:p-4 lg:p-8 bg-[linear-gradient(135deg,_#000000_33%,_#8B3DFF_89%,_#8B3DFF_100%)]"
    >
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-start">
        {/* Left: Form card */}
        <motion.section
          aria-labelledby="contact-heading"
          className="rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl bg-white/8 backdrop-blur-md border border-zinc-800"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h1 id="contact-heading" className="text-2xl font-bold text-white">
              Contact Us
            </h1>

            <motion.div whileHover={{ x: -6 }} whileTap={{ scale: 0.98 }}>
              <Link href="/" aria-label="Go back to home">
                <Button variant="ghost" className="flex items-center gap-2 text-zinc-300">
                  <ArrowLeft size={16} />
                  Home
                </Button>
              </Link>
            </motion.div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm text-zinc-300 mb-1">
                Full name
              </label>
              <input
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full rounded-md px-4 py-2 bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Jane Doe"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className="text-xs text-red-400 mt-1">{String(errors.name.message)}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-zinc-300 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full rounded-md px-4 py-2 bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="you@example.com"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="text-xs text-red-400 mt-1">{String(errors.email.message)}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-zinc-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                {...register('message', { required: 'Message is required' })}
                className="w-full rounded-md px-4 py-3 bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="How can we help?"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <p id="message-error" className="text-xs text-red-400 mt-1">{String(errors.message.message)}</p>}
            </div>

            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </div>
          </form>
        </motion.section>

        {/* Right: Info / illustration panel */}
        <motion.aside
          className="rounded-2xl p-8 shadow-2xl bg-gradient-to-b from-purple-700/30 via-pink-500/10 to-indigo-700/10 border border-zinc-800"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">Get in touch</h2>
              <p className="text-zinc-200 mb-6">
                Prefer a direct message? Drop a line and we'll reply within 1-2 business days.
              </p>

              <ul className="space-y-3 text-zinc-200">
                <li>
                  <strong>Email:</strong> <a className="text-white/90" href="mailto:support@forescribe.app">support@forescribe.app</a>
                </li>
                <li>
                  <strong>Twitter:</strong> <a className="text-white/90" href="https://twitter.com/forescribe">@forescribe</a>
                </li>
                <li>
                  <strong>Office:</strong> Remote — distributed team
                </li>
              </ul>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-black/30 border border-white/5">
              <p className="text-sm text-zinc-300">Small note</p>
              <p className="text-xs text-zinc-400">This page is part of an assignment demo — contact flows are placeholders.</p>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.main>
  );
}
