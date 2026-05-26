import React from 'react';
import MosaicImage from './MosaicImage';
import { ScatterItem } from './ScatterText';

const About = ({ data = {} }) => (
  <section className="py-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
    <div className="w-full md:w-1/3 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01]">
      <MosaicImage src={data.avatar} alt="Profile" rows={4} cols={4} className="aspect-square rounded-full md:rounded-2xl" />
    </div>
    <div className="w-full md:w-2/3 transition-transform duration-300 ease-out hover:-translate-y-1">
      <ScatterItem>
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
      </ScatterItem>
      <ScatterItem delay={0.2}>
        <p className="text-lg text-slate-300 leading-relaxed mb-6">{data.bio}</p>
      </ScatterItem>
      <ScatterItem delay={0.4}>
        <div className="inline-flex items-center px-4 py-2 bg-slate-900 rounded-full border border-slate-800 text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/10">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse" />
          Based in {data.location}
        </div>
      </ScatterItem>
    </div>
  </section>
);

export default About;
