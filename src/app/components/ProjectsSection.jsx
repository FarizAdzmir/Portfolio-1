"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "The Crate Online Store",
    description: "E-Commerce Website",
    image: "/images/projects/The-Crate.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FarizAdzmir/The-Crate",
    previewUrl: "https://the-crate.payloadcms.app/",
  },
  {
    id: 2,
    title: "IQLAS Online Store",
    description: "Responsive E-Commerce Design",
    image: "/images/projects/IQLAS.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FarizAdzmir/IQLAS",
    previewUrl: "https://iqlas.vercel.app/",
  },
  {
    id: 3,
    title: "Kembara Landing Page",
    description: "Travel Website",
    image: "/images/projects/Kembara.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FarizAdzmir/Kembara",
    previewUrl: "https://kembara.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;