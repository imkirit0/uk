'use client';
import Reveal from './Reveal';
import { useReducedMotion } from '@/lib/motion';

export default function Campus() {
  const rm = useReducedMotion();
  return (
    <section className="campus" aria-labelledby="campus-title">
      <video className="campus__video" src="/media/learning.mp4" autoPlay={!rm} muted loop playsInline preload="metadata" aria-hidden />
      <div className="campus__shade" />
      <div className="wrap campus__inner">
        <Reveal>
          <div className="kicker kicker--coral">Inside the classroom</div>
          <h2 id="campus-title" className="h2 campus__title">Learn beside people who do the work.</h2>
          <p className="lead lead--light campus__lead">Small cohorts, practising instructors and real codebases. You leave with projects an employer can open, not just notes.</p>
          <a href="#enquire" className="btn btn--primary">Book a free consultation</a>
        </Reveal>
      </div>
    </section>
  );
}
