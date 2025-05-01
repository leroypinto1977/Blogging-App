"use client";

import { motion } from "framer-motion";

export default function BluePage() {
  return (
    <motion.div
      className="min-h-screen bg-[#87CEEB] flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">Blue Page</h1>
    </motion.div>
  );
}
