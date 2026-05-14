import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '../contexts/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'website',
      title: t('projects.p1.t'),
      description: t('projects.p1.d'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=500'
    },
    {
      id: 'design',
      title: t('projects.p2.t'),
      description: t('projects.p2.d'),
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=60&w=500'
    },
    {
      id: 'soap',
      title: t('projects.p3.t'),
      description: t('projects.p3.d'),
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=60&w=500'
    }
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 px-5 max-w-6xl mx-auto"
    >
      <SectionHeading title1={t('projects.title1')} title2={t('projects.title2')} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link key={index} to={`/project/${project.id}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer h-full group"
            >
              <div 
                className="h-[200px] bg-[#333] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-muted">{project.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
