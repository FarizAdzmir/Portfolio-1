"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const SkillSection = () => {
  const skills = [
    { id: 1, name: 'HTML', imageUrl: '/html.svg' },
    { id: 2, name: 'CSS', imageUrl: '/css.svg' },
    { id: 3, name: 'JavaScript', imageUrl: '/javascript.svg' },
    { id: 4, name: 'Git', imageUrl: '/git.svg' },
    { id: 5, name: 'Sass', imageUrl: '/sass.svg' },
    { id: 6, name: 'Node JS', imageUrl: '/nodejs.svg' },
    { id: 7, name: 'React', imageUrl: '/react.svg' },
    { id: 8, name: 'Next JS', imageUrl: '/nextjs.svg' },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <motion.div
        
        className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 grid grid-cols-2 md:grid-cols-8 gap-4 w-full"
      >
        {skills.map(skill => (
          <div
            key={skill.id}
            className="flex flex-col items-center justify-center"
          >
            <Image src={skill.imageUrl} alt={skill.name} width={64} height={64} className="mb-2" />
            <p className="text-xs font-semibold">{skill.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillSection;
