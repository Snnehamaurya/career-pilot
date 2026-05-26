import React from 'react';
import { ScatterItem } from './ScatterText';

const Experience = ({ experience = [] }) => (
  <section className="py-24 px-6 max-w-4xl mx-auto border-t border-slate-900">
    <ScatterItem>
      <h2 className="text-4xl font-bold mb-16 text-center text-white">Journey</h2>
    </ScatterItem>
    <div className="space-y-6">
      {experience.map((exp, i) => (
        <ScatterItem key={`${exp?.role || 'role'}-${exp?.company || 'company'}-${i}`} delay={i * 0.1}>
          <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="absolute left-0 top-0 w-1 h-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
              <span className="text-cyan-300 font-mono mt-2 md:mt-0">{exp.period}</span>
            </div>
            <h4 className="text-xl text-slate-300 mb-4">{exp.company}</h4>
            <p className="text-slate-400 leading-relaxed">{exp.description}</p>
          </div>
        </ScatterItem>
      ))}
    </div>
  </section>
);

export default Experience;
