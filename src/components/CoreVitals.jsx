"use client";
import { motion } from "framer-motion";

export function CoreVitals() {
  return (
    <div className="flex justify-center items-center my-8">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.8 } }}
        className="my-2 text-2xl font-bold tracking-tight text-violet-900 dark:text-violet-400"
      >
        Web Core Vitals
      </motion.p>
    </div>
  );
}
