import { createFileRoute } from '@tanstack/react-router';
import { personalInfo, education, experience, certificates, softwareSkills, languages, personalSkills, services, technicalSkills } from '@/data/personal';
import { projects, Project } from '@/data/projects';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { Section } from '@/components/Section';
import { SEO } from '@/components/SEO';
import { SkillBar } from '@/components/SkillBar';
import { SocialIcons } from '@/components/SocialIcons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectModal } from '@/components/ProjectModal';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Resume Download filename
  const resumeUrl = "/Mohamed Darwish Resume.pdf";

  return (
    <>
      <SEO />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">

        {/* Background is now Global in __root.tsx */}

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-light text-navy-600 dark:text-gray-400 tracking-wider mb-2">
                MOHAMED
              </span>
              <span className="text-7xl md:text-9xl lg:text-[10rem] font-black text-navy-900 dark:text-white tracking-tighter leading-[0.85] drop-shadow-2xl">
                DARWISH
              </span>
            </div>

            <p className="text-xl md:text-3xl text-brand-red dark:text-gold-400 mt-6 font-light tracking-wide uppercase border-l-4 border-brand-red dark:border-gold-500 pl-6">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-12">
              <a href="#projects" className="btn-apple-glass group flex items-center gap-3">
                Portfolio
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href={resumeUrl}
                download="Mohamed_Darwish_Resume.pdf"
                className="btn-apple-glass group flex items-center gap-3"
              >
                Resume PDF
                <svg className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            <div className="mt-10">
              <SocialIcons />
            </div>
          </div>

          {/* Right Column - Animated Logo */}
          <div className="flex justify-center lg:justify-end items-center relative h-full min-h-[300px] md:min-h-[500px] lg:pr-4">
            <div className="relative flex items-center justify-center"
              style={{ height: "184px", width: "398px" }}>
              {/* Animation Container */}
              <div className="relative w-full h-full flex items-center justify-center">

                {/* Stage 1: Small Logo scales up and fades out */}
                <motion.img
                  src="/images/logo-small.svg"
                  className="absolute"
                  style={{ width: "164px", height: "184px" }}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: [1, 0, 0, 0, 1], scale: [1, 1.5, 1.5, 1, 1] }}
                  transition={{
                    duration: 8, // Total cycle
                    times: [0, 0.2, 0.4, 0.8, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />


                {/* Stage 2: Extended Logo fades in and settles */}
                <motion.img
                  src="/images/logo-extended.svg"
                  className="absolute"
                  style={{ height: "184px" }}
                  initial={{ opacity: 0, width: "398px" }}
                  animate={{
                    opacity: [0, 1, 1, 0, 0],
                    width: ["164px", "398px", "398px", "164px", "164px"]
                  }}
                  transition={{
                    duration: 8,
                    times: [0, 0.3, 0.7, 0.9, 1],
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-8 rounded-3xl bg-white/20 dark:bg-navy-900/10 border border-white/30 dark:border-navy-800/30 backdrop-blur-xl shadow-lg relative overflow-hidden group hover:border-brand-red/30 transition-all duration-500">
              {/* Decorative Gradient Blob inside card */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl transition-all duration-500"></div>

              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">ABOUT</h2>
              <a href={`mailto:${personalInfo.email}`} className="text-brand-red dark:text-accent-peach hover:text-navy-900 dark:hover:text-white mb-6 block font-medium transition-colors text-xl">
                {personalInfo.email}
              </a>
              <p className="text-navy-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                {personalInfo.bio}
              </p>
              <div className="space-y-2 text-navy-600 dark:text-gray-400">
                <p className="font-semibold text-navy-900 dark:text-white">Location</p>
                <p>{personalInfo.location}</p>
                {/* Phone number text removed */}
              </div>
            </div>

            <div className="flex justify-center md:justify-end relative">
              {/* Professional Portrait */}
              <div className="w-full max-w-md relative group">
                <img
                  src="/brain/d21e4952-e91f-40f8-91d7-de26ca4bb6a1/portrait_final.png"
                  alt="Mohamed Darwish - Professional Portrait"
                  className="w-full h-auto object-contain group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Resume Section */}
      <Section id="resume" className="bg-navy-50/50 dark:bg-navy-900/20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Skills Column */}
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/40 border border-navy-100 dark:border-navy-800 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-red dark:text-accent-peach mb-6 uppercase tracking-wider">Software Skills</h3>
                {softwareSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/40 border border-navy-100 dark:border-navy-800 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-red dark:text-accent-peach mb-6 uppercase tracking-wider">Languages</h3>
                {languages.map((lang) => (
                  <SkillBar key={lang.name} name={lang.name} level={lang.level} />
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/40 border border-navy-100 dark:border-navy-800 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-red dark:text-accent-peach mb-6 uppercase tracking-wider">Personal Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {personalSkills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-navy-50 dark:bg-navy-800 text-navy-700 dark:text-navy-100 rounded border border-navy-200 dark:border-navy-700 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Column */}
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/40 border border-navy-100 dark:border-navy-800 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-red dark:text-accent-peach mb-6 uppercase tracking-wider">Experience</h3>
                <div className="space-y-8">
                  {experience.map((exp, index) => {
                    return (
                      <div key={index} className="relative pl-8 border-l border-brand-red/30 dark:border-accent-peach/30">
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-brand-red dark:bg-accent-peach rounded-full ring-4 ring-white dark:ring-navy-900"></div>
                        <span className="text-xs font-mono text-navy-500 dark:text-navy-400 mb-1 block">{exp.period}</span>
                        <h4 className="font-bold text-navy-900 dark:text-white text-lg">{exp.title}</h4>
                        <p className="text-navy-600 dark:text-gray-400 font-medium mb-2">{exp.company}</p>
                        <ul className="list-disc list-outside ml-4 space-y-1">
                          {exp.description.map((desc, i) => (
                            <li key={i} className="text-sm text-navy-600 dark:text-gray-400 leading-snug">{desc}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/40 border border-navy-100 dark:border-navy-800 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-red dark:text-accent-peach mb-6 uppercase tracking-wider">Education</h3>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h4 className="font-bold text-navy-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-navy-600 dark:text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-navy-400 dark:text-gray-500 mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities Column */}
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/40 border border-navy-100 dark:border-navy-800 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-red dark:text-accent-peach mb-6 uppercase tracking-wider">Services</h3>
                <ul className="space-y-3">
                  {services.map((service, idx) => (
                    <li key={idx} className="text-navy-700 dark:text-gray-300 flex items-start">
                      <span className="text-brand-red dark:text-accent-peach mr-2">›</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/40 border border-navy-100 dark:border-navy-800 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-red dark:text-accent-peach mb-6 uppercase tracking-wider">Tech Stack</h3>
                <ul className="space-y-3">
                  {technicalSkills.map((skill, idx) => (
                    <li key={idx} className="text-navy-700 dark:text-gray-300 flex items-start">
                      <span className="text-brand-red dark:text-accent-peach mr-2">›</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/40 border border-navy-100 dark:border-navy-800 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-red dark:text-accent-peach mb-6 uppercase tracking-wider">Certifications</h3>
                <div className="space-y-4">
                  {certificates.slice(0, 5).map((cert, idx) => (
                    <div key={idx} className="text-sm border-b border-navy-50 dark:border-navy-700 pb-2 last:border-0 last:pb-0">
                      <p className="font-medium text-navy-900 dark:text-white">{cert.name}</p>
                      <p className="text-navy-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="max-w-7xl mx-auto">
          <ul className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <li key={project.id}>
                <ProjectShowcase
                  project={project}
                  index={index}
                  onOpenModal={setSelectedProject}
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
