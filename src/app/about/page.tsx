import type { Metadata } from 'next';
import Header from '@/components/Header';
import About from '@/components/About';
import Why from '@/components/Why';
import Network from '@/components/Network';
import Enquire from '@/components/Enquire';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { NETWORK_TILES, SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About us · G-TEC Education UK',
  description: 'G-TEC Education UK is part of a global training network spanning 23+ countries, 800+ centres and 4.3M+ alumni, with its regional headquarters in Park Royal, London.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="page">
      <Header />
      <main>
        <section className="page-intro">
          <Reveal className="wrap">
            <div className="kicker kicker--coral">About us</div>
            <h1 className="h2 page-intro__title">More than two decades of skilling, now in London.</h1>
            <p className="lead lead--light">{SITE.legalName} · Registered with the UK Register of Learning Providers (UKPRN: {SITE.ukprn})</p>
            <div className="page-intro__stats">
              {NETWORK_TILES.map(([v, l]) => <div key={l}><strong>{v}</strong><span>{l}</span></div>)}
            </div>
          </Reveal>
        </section>
        <About />
        <Why />
        <Network />
        <Enquire />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
