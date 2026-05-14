import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  title1: string;
  title2: string;
}

export function SectionHeading({ title1, title2 }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-[2.5rem] font-bold mb-12 text-center uppercase tracking-widest"
    >
      {title1} <span className="text-accent">{title2}</span>
    </motion.h2>
  );
}
