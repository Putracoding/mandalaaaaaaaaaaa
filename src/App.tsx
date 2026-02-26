/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  Mail, 
  Youtube, 
  Cpu, 
  Network, 
  Terminal, 
  ArrowUpRight,
  ChevronRight,
  Globe,
  Shield,
  Server
} from "lucide-react";
import { useRef, useState, useEffect, ReactNode } from "react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

// Text Reveal Component for Luxury Feel
const RevealText = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: <Instagram className="w-5 h-5" />, 
      url: "https://www.instagram.com/mandalaputrafirmansyahh?igsh=MWxhdWowenpsYWh1OQ==",
      color: "hover:text-pink-500"
    },
    { 
      name: "TikTok", 
      icon: <TikTokIcon className="w-5 h-5" />, 
      url: "https://www.tiktok.com/@mandalaput8?_r=1&_t=ZS-94FT4UYXBKu",
      color: "hover:text-cyan-400"
    },
    { 
      name: "YouTube", 
      icon: <Youtube className="w-5 h-5" />, 
      url: "https://youtube.com/@mandalaputrafirmansyah?si=j1KqaUsioxY_6qvT",
      color: "hover:text-red-600"
    },
    { 
      name: "Email", 
      icon: <Mail className="w-5 h-5" />, 
      url: "mailto:mandalafirmansyah5@gmail.com",
      color: "hover:text-emerald-400"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen font-sans selection:bg-white selection:text-black bg-[#050505] text-white">
      {/* Background Noise */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Custom Cursor Glow */}
      <motion.div 
        className="fixed w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none z-0 hidden lg:block"
        animate={{
          x: mousePos.x - 192,
          y: mousePos.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-white/30 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-6 md:p-10 flex justify-between items-center z-[60] mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Mandala Putra</span>
          <span className="font-mono text-[8px] tracking-[0.2em] uppercase opacity-50">Portfolio v2.0</span>
        </motion.div>
        
        <div className="flex gap-6 md:gap-12">
          {['About', 'Education', 'Connect'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              className="group relative font-mono text-[9px] tracking-[0.3em] uppercase hover:text-white/60 transition-colors"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="text-center z-10"
        >
          <RevealText delay={0.2}>
            <span className="font-mono text-[10px] tracking-[0.5em] uppercase opacity-40 mb-8 block">
              Architecting Digital Connectivity
            </span>
          </RevealText>
          
          <h1 className="text-[14vw] md:text-[10vw] font-serif font-black leading-[0.8] tracking-tighter uppercase mb-12">
            <RevealText delay={0.4}>
              Mandala
            </RevealText>
            <RevealText delay={0.5} className="italic font-light text-white/80">
              Putra
            </RevealText>
            <RevealText delay={0.6}>
              Firmansyah
            </RevealText>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16"
          >
            {socialLinks.map((link, i) => (
              <motion.a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + (i * 0.1) }}
                className={`group flex items-center gap-3 font-mono text-[9px] tracking-[0.2em] uppercase transition-all ${link.color}`}
              >
                <span className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-full group-hover:border-white/40 group-hover:bg-white/5 transition-all">
                  {link.icon}
                </span>
                <span className="hidden sm:inline opacity-40 group-hover:opacity-100">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Background Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[10%] opacity-[0.05]"
          >
            <Server size={200} strokeWidth={0.5} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[15%] right-[10%] opacity-[0.05]"
          >
            <Globe size={240} strokeWidth={0.5} />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="font-mono text-[8px] tracking-[0.4em] uppercase">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" 
          />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-10">
            <RevealText>
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/30">01 / Philosophy</span>
            </RevealText>
            <h2 className="text-5xl md:text-8xl font-serif font-light leading-[1.1] tracking-tight">
              Bridging the <span className="italic text-white/60">gap</span> between <span className="font-bold">hardware</span> and <span className="italic font-serif">humanity</span>.
            </h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 lg:pt-20"
          >
            <p className="text-2xl md:text-3xl text-white/50 leading-relaxed font-light">
              Saya adalah seorang pelajar yang berdedikasi di bidang <span className="text-white font-medium">Teknik Komputer dan Jaringan</span>. 
              Fokus saya adalah membangun infrastruktur digital yang <span className="text-white italic">aman, cepat, dan efisien</span>.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <div className="space-y-4">
                <span className="block font-mono text-[9px] tracking-[0.3em] uppercase text-white/30">Expertise</span>
                <ul className="space-y-2 font-mono text-xs tracking-wider">
                  <li className="flex items-center gap-2"><ChevronRight size={12} className="text-white/40" /> Network Administration</li>
                  <li className="flex items-center gap-2"><ChevronRight size={12} className="text-white/40" /> Server Management</li>
                  <li className="flex items-center gap-2"><ChevronRight size={12} className="text-white/40" /> Cyber Security Basics</li>
                </ul>
              </div>
              <div className="space-y-4">
                <span className="block font-mono text-[9px] tracking-[0.3em] uppercase text-white/30">Current Base</span>
                <p className="text-lg font-serif italic">Bekasi, West Java, ID</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-40 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-10">
            <div>
              <RevealText>
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6 block">02 / Journey</span>
              </RevealText>
              <h2 className="text-7xl md:text-9xl font-serif font-bold tracking-tighter">Education</h2>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-mono text-5xl md:text-7xl font-black text-white/[0.03] select-none"
            >
              TKJ 1 / XI
            </motion.div>
          </div>

          <div className="space-y-0">
            {[
              {
                period: "2024 — Present",
                title: "SMK Karya Guna 2 Bekasi",
                subtitle: "Teknik Komputer dan Jaringan",
                desc: "Mendalami arsitektur jaringan, konfigurasi router, dan manajemen sistem operasi server dengan standar industri.",
                icon: <Shield className="w-5 h-5" />
              },
              {
                period: "Academic Status",
                title: "Kelas 11 TKJ 1",
                subtitle: "Advanced Networking Student",
                desc: "Aktif dalam pengembangan proyek laboratorium jaringan dan simulasi infrastruktur enterprise.",
                icon: <Cpu className="w-5 h-5" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 py-16 border-b border-white/5 hover:bg-white/[0.01] transition-all px-6 -mx-6"
              >
                <div className="lg:col-span-2 font-mono text-[10px] tracking-[0.3em] text-white/30 pt-2">
                  {item.period}
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-4xl md:text-5xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-white/40 font-mono text-[10px] tracking-[0.4em] uppercase">{item.subtitle}</p>
                </div>
                <div className="lg:col-span-4 text-white/40 text-sm leading-relaxed font-light flex items-center">
                  {item.desc}
                </div>
                <div className="lg:col-span-1 flex justify-end items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500"
                  >
                    {item.icon}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white text-black rounded-[3rem] p-12 md:p-24 overflow-hidden"
          >
            {/* Background Text */}
            <div className="absolute -bottom-10 -right-10 font-serif text-[30vw] font-black opacity-[0.02] leading-none pointer-events-none select-none">
              MPF
            </div>

            <div className="relative z-10">
              <RevealText>
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-40 mb-10 block">03 / Contact</span>
              </RevealText>
              
              <h2 className="text-6xl md:text-9xl font-serif font-bold leading-[0.85] tracking-tighter mb-20">
                Let's start a <br />
                <span className="italic font-light">conversation</span>.
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                <div className="space-y-12">
                  <div className="space-y-4">
                    <p className="font-mono text-[9px] tracking-[0.4em] uppercase opacity-40">Email Address</p>
                    <a 
                      href="mailto:mandalafirmansyah5@gmail.com" 
                      className="text-3xl md:text-4xl font-serif hover:italic transition-all block break-words"
                    >
                      mandalafirmansyah5@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-start lg:justify-end">
                  {socialLinks.map((link) => (
                    <motion.a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="w-16 h-16 border border-black/10 rounded-3xl flex items-center justify-center hover:bg-black hover:text-white transition-all group"
                    >
                      <div className="relative">
                        {link.icon}
                        <ArrowUpRight className="absolute -top-4 -right-4 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/40">
                Status: Exploring New Horizons
              </span>
            </div>
          </div>
          
          <div className="text-center">
            <span className="font-mono text-[9px] tracking-[0.5em] uppercase text-white/20">
              © 2026 Mandala Putra Firmansyah — Built with Passion
            </span>
          </div>
          
          <motion.button 
            whileHover={{ y: -5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-4 font-mono text-[9px] tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors"
          >
            Top
            <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center group-hover:border-white/40">
              <ArrowUpRight className="-rotate-45 w-3 h-3" />
            </div>
          </motion.button>
        </div>
      </footer>
    </div>
  );
}
