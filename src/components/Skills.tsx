import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

export function Skills() {
  const { t } = useLanguage();

  const hardSkills = [
    { name: t('skills.h1'), level: '70%' },
    { name: t('skills.h2'), level: '65%' },
    { name: t('skills.h3'), level: '70%' },
    { name: t('skills.h4'), level: '85%' },
  ];

  const softSkills = [
    t('skills.s1'),
    t('skills.s2'),
    t('skills.s3'),
    t('skills.s4'),
    t('skills.s5'),
    t('skills.s6')
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-5 max-w-6xl mx-auto"
    >
      <SectionHeading title1={t('skills.title1')} title2={t('skills.title2')} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Hard Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-[#333]">{t('skills.hard')}</h3>
          <div className="space-y-6">
            {hardSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>{skill.name}</span>
                  <span className="text-muted">{skill.level}</span>
                </div>
                <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 pb-2 border-b border-[#333]">{t('skills.soft')}</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-5 py-2 bg-card rounded-full text-sm border border-[#444] text-white"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
