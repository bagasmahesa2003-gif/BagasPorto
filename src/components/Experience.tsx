import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('exp.jobs.j1.t'),
      role: t('exp.jobs.j1.r'),
      description: t('exp.jobs.j1.d')
    },
    {
      title: t('exp.jobs.j2.t'),
      role: t('exp.jobs.j2.r'),
      description: t('exp.jobs.j2.d')
    },
    {
      title: t('exp.jobs.j3.t'),
      role: t('exp.jobs.j3.r'),
      description: t('exp.jobs.j3.d')
    },
    {
      title: t('exp.jobs.j4.t'),
      role: t('exp.jobs.j4.r'),
      description: t('exp.jobs.j4.d')
    },
    {
      title: t('exp.jobs.j5.t'),
      role: t('exp.jobs.j5.r'),
      description: t('exp.jobs.j5.d')
    },
    {
      title: t('exp.jobs.j6.t'),
      role: t('exp.jobs.j6.r'),
      description: t('exp.jobs.j6.d')
    }
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-5 max-w-6xl mx-auto"
    >
      <SectionHeading title1={t('exp.title1')} title2={t('exp.title2')} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card p-8 border-l-4 border-accent hover:-translate-y-1 hover:bg-[#2a2a2a] transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-accent mb-1">{exp.title}</h3>
            <span className="block text-white font-semibold text-sm mb-3">{exp.role}</span>
            <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
