import React from 'react';
import MosaicImage from './MosaicImage';
import { ScatterItem } from './ScatterText';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ projects = [] }) => (
  <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-900">
    <ScatterItem>
      <h2 className="text-5xl font-bold mb-16 text-center text-white">Featured Work</h2>
    </ScatterItem>

    <div className="space-y-32">
      {projects.map((proj, idx) => (
        <div key={`${proj?.title || 'project'}-${proj?.liveUrl || proj?.githubUrl || idx}`} className={`flex flex-col gap-10 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          <div className="w-full md:w-3/5 relative group transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01]">
            <MosaicImage src={proj.image} alt={proj.title} rows={6} cols={6} className="aspect-video shadow-2xl shadow-cyan-900/20" />
          </div>

          <div className="w-full md:w-2/5 transition-transform duration-300 ease-out hover:-translate-y-1">
            <ScatterItem delay={0.3}>
              <h3 className="text-3xl font-bold mb-4 text-white">{proj.title}</h3>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {(proj.techStack || []).map((tech, i) => (
                  <span key={`${proj.title}-${tech}-${i}`} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded-md border border-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-200 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/10">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {proj.liveUrl && (
                    <a href={proj.liveUrl} className="flex items-center gap-2 bg-cyan-500 text-slate-950 px-5 py-2.5 rounded-lg font-semibold hover:bg-cyan-400 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
                {proj.githubUrl && (
                    <a href={proj.githubUrl} className="flex items-center gap-2 bg-slate-800 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-700 hover:-translate-y-0.5 transition-all duration-300 border border-slate-700">
                    <Github size={18} /> Code
                  </a>
                )}
              </div>
            </ScatterItem>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
