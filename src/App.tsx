import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Code, 
  Mail, 
  Linkedin, 
  ChevronDown, 
  ExternalLink,
  Download,
  MapPin,
  Award,
  Cpu,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { resumeData } from './data';
import { AnimatedBackground } from './components/AnimatedBackground';

// --- Components ---

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050508]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-24 h-24 mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-full animate-ping" />
        <div className="absolute inset-0 border border-emerald-500 rounded-full flex items-center justify-center text-3xl font-bold text-emerald-500">
          {resumeData.basics.initials}
        </div>
      </motion.div>
      <motion.div 
        className="w-48 h-1 bg-white/10 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: 192 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <motion.div 
          className="h-full bg-emerald-500"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-white">
          <span className="text-emerald-500">{resumeData.basics.initials}</span>.PORTFOLIO
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
          {['Experience', 'Achievements', 'Skills', 'Education'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-emerald-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <a 
          href={`mailto:${resumeData.basics.email}`}
          className="px-4 py-2 rounded-full bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition-colors"
        >
          HIRE ME
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold mb-6 tracking-widest uppercase">
            {resumeData.basics.title}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-6">
            {resumeData.basics.name.split(' ')[0]}<br />
            <span className="text-white/40">{resumeData.basics.name.split(' ')[1]}</span>
          </h1>
          <p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed">
            {resumeData.basics.summary}
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl bg-emerald-500 text-black font-bold hover:scale-105 transition-transform flex items-center gap-2"
            >
              View Experience <ChevronDown size={18} />
            </button>
            <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
              Download Resume <Download size={18} />
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
             <Cpu size={120} className="text-emerald-500/40 group-hover:scale-110 transition-transform duration-500" />
             
             {/* Floating badges */}
             <div className="absolute top-10 right-10 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 animate-bounce">
                <Code className="text-emerald-500" size={24} />
             </div>
             <div className="absolute bottom-10 left-10 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 animate-pulse">
                <Globe className="text-emerald-500" size={24} />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ImpactStrip = () => {
  return (
    <div className="border-y border-white/5 bg-white/[0.02] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {resumeData.achievements.map((ach, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="text-emerald-500" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">{ach.title}</div>
              <div className="text-sm text-white/40">{ach.context}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Briefcase className="text-emerald-500" size={32} />
          <h2 className="text-4xl font-bold text-white tracking-tight">Professional Story</h2>
        </div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden ${expanded === idx ? 'bg-white/5 border-emerald-500/50' : 'bg-white/[0.02] border-white/10 hover:border-white/20'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full p-8 flex flex-col md:flex-row md:items-center justify-between text-left gap-4"
              >
                <div>
                  <div className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-1">{exp.dates}</div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <div className="text-white/40 flex items-center gap-2 mt-1">
                    <span>{exp.company}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${expanded === idx ? 'rotate-180 bg-emerald-500 border-emerald-500 text-black' : 'text-white/40'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {expanded === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="px-8 pb-8 pt-2 border-t border-white/5">
                      <ul className="space-y-4">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 text-white/60 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 px-6 bg-emerald-500/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Trophy className="text-emerald-500" size={32} />
          <h2 className="text-4xl font-bold text-white tracking-tight">Key Milestones</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resumeData.achievements.map((ach, idx) => (
            <motion.div 
              key={idx}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/50 transition-all duration-500 relative overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={80} className="text-emerald-500" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Trophy className="text-emerald-500" size={24} />
              </div>
              <div className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">{ach.type}</div>
              <h3 className="text-xl font-bold text-white mb-4">{ach.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{ach.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <Code className="text-emerald-500" size={32} />
          <h2 className="text-4xl font-bold text-white tracking-tight">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-bold text-white/40 uppercase tracking-widest mb-6">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.technical.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:border-emerald-500/50 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white/40 uppercase tracking-widest mb-6">Top Specializations</h3>
              <div className="flex flex-wrap gap-3">
                {resumeData.skills.top.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-8">Linguistic Proficiency</h3>
            <div className="space-y-6">
              {resumeData.skills.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between group">
                  <span className="text-white/80 group-hover:text-emerald-500 transition-colors">{lang.split(' ')[0]}</span>
                  <span className="text-xs text-white/30 uppercase tracking-widest">{lang.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <GraduationCap className="text-emerald-500" size={32} />
          <h2 className="text-4xl font-bold text-white tracking-tight">Academic Foundation</h2>
        </div>

        <div className="space-y-8">
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="relative pl-8 border-l border-white/10 group">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20 group-hover:bg-emerald-500 transition-colors" />
              <div className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-1">{edu.dates}</div>
              <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
              <p className="text-white/40">{edu.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tighter">Let's build something<br /><span className="text-emerald-500">exceptional.</span></h2>
          <div className="flex gap-6 mt-8">
            <a href={`mailto:${resumeData.basics.email}`} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all">
              <Mail size={24} />
            </a>
            {resumeData.basics.links.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-black transition-all">
                <Linkedin size={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="text-right">
          <div className="text-white/20 text-sm mb-2 uppercase tracking-widest">Current Location</div>
          <div className="text-white font-medium flex items-center justify-end gap-2">
            <MapPin size={16} className="text-emerald-500" /> {resumeData.basics.location}
          </div>
          <div className="mt-12 text-white/10 text-xs">
            © {new Date().getFullYear()} {resumeData.basics.name}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
};

const Philosophy = () => {
  return (
    <section className="py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.3em] mb-12">Philosophy & Growth</h2>
        <div className="space-y-8">
          {resumeData.extra.map((text, idx) => (
            <motion.p 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl md:text-3xl font-medium text-white/80 leading-tight tracking-tight"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-emerald-500 selection:text-black">
      <AnimatedBackground />
      
      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <ImpactStrip />
            <Experience />
            <Achievements />
            <Skills />
            <Education />
            <Philosophy />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
