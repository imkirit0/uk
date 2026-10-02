'use client';
import { useRef, useEffect, MouseEvent } from 'react';
import { Sparkles, Brain, Bot, Cloud, Layers, ArrowUpRight } from 'lucide-react';
import { FOCUS_COURSES } from '@/lib/content';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Reveal from './Reveal';

gsap.registerPlugin(ScrollTrigger);

const ICONS = [Sparkles, Brain, Bot, Cloud, Layers];

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

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
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
            Five AI programmes, from first prompts to production agents. Each one is built around real projects, not just lectures.
          </p>
        </Reveal>

        <div className="strat-std-grid">
          {FOCUS_COURSES.map((c, i) => {
            const Icon = ICONS[i];
            return (
            <a
              key={c.slug}
              href={`/courses/${c.slug}`}
              className="strat-std-card"
              onMouseMove={handleMouseMove}
            >
              {/* Mouse Spotlight */}
              <div className="strat-std-card__spotlight" />
              
              <Image src={`/media/${c.img}.jpg`} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px" className="strat-std-card__img" />
              <div className="strat-std-card__bg" />
              
              <div className="strat-std-card__content">
                <div className="strat-std-card__top">
                  <div className="strat-std-card__icon-box">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="strat-std-card__num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                
                <div className="strat-std-card__bottom">
                  <span className="strat-std-card__hours">{c.level} · {c.duration}</span>
                  <h3 className="strat-std-card__title">{c.title}</h3>
                  <p className="strat-std-card__desc">{c.blurb}</p>
                  
                  <div className="strat-std-card__action">
                    <span>See the course</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
