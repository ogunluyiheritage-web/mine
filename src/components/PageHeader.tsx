import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = { label: string; title: ReactNode; subtitle?: string };

export default function PageHeader({ label, title, subtitle }: Props) {
  return (
    <section className="relative bg-black pt-44 md:pt-52 pb-16 md:pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {label}
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl text-white tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-white/60 text-base md:text-lg leading-relaxed mt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
