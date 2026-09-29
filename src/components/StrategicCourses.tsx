'use client';
import { useRef, useEffect, MouseEvent } from 'react';
import { Brain, Code2, Bot, Shield, BarChart3, Building2, ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Reveal from './Reveal';

gsap.registerPlugin(ScrollTrigger);

const COURSES = [
  { id: 'ai', title: 'AI & Machine Learning', icon: Brain, num: '01', desc: 'Learn how modern AI actually works, from neural networks to generative models, and build things with it.' },
  { id: 'fs', title: 'Full Stack Development', icon: Code2, num: '02', desc: 'Build complete web apps, front to back, and put them live in the cloud.' },
  { id: 'ag', title: 'Agentic AI (FutureX)', icon: Bot, num: '03', desc: 'Build AI agents that take on real tasks, and automate the repetitive parts of everyday work.' },
  { id: 'cs', title: 'Cyber Security', icon: Shield, num: '04', desc: 'Find weaknesses before attackers do. Hands-on ethical hacking, threat detection and defence.' },
  { id: 'ds', title: 'Data Analytics & BI', icon: BarChart3, num: '05', desc: 'Turn messy data into clear answers, with dashboards and forecasts people can act on.' },
  { id: 'ar', title: 'AutoCAD & Revit', icon: Building2, num: '06', desc: 'Draw, model and plan buildings with the tools architects and engineers use every day.' },
];

export default function StrategicCourses() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.strat-std-card',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.strat-std-grid',
            start: 'top 85%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    
    // Update the spotlight variable
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  };

  return (
    <section id="strategic" className="strategic-std" ref={containerRef}>
      <div className="wrap">
        
        <Reveal className="strat-std-head">
          <div className="kicker kicker--coral">The Frontier</div>
          <h2 className="h2 strat-std-title">Where we&apos;re focusing</h2>
          <p className="lead lead--light strat-std-lead">
            Six courses in the skills London employers keep asking us for. Each one is built around real projects, not just lectures.
          </p>
        </Reveal>

        <div className="strat-std-grid">
          {COURSES.map((c) => (
            <div 
              key={c.id} 
              className="strat-std-card"
              onMouseMove={handleMouseMove}
            >
              {/* Mouse Spotlight */}
              <div className="strat-std-card__spotlight" />
              
              <Image src={`/media/${c.id}.jpg`} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" className="strat-std-card__img" />
              <div className="strat-std-card__bg" />
              
              <div className="strat-std-card__content">
                <div className="strat-std-card__top">
                  <div className="strat-std-card__icon-box">
                    <c.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="strat-std-card__num">{c.num}</span>
                </div>
                
                <div className="strat-std-card__bottom">
                  <h3 className="strat-std-card__title">{c.title}</h3>
                  <p className="strat-std-card__desc">{c.desc}</p>
                  
                  <div className="strat-std-card__action">
                    <span>See the course</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
