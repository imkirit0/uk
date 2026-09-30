import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="wrap about">
      <Reveal className="about__grid">
        <div>
          <div className="kicker">About G-TEC UK</div>
          <h2 className="h2">Welcome to G-TEC Education UK.</h2>
        </div>
        <div className="about__copy">
          <p className="lead">A premier global training network dedicated to empowering individuals and businesses through industry-aligned technical and professional education. Part of an internationally recognised network spanning 23+ countries, with over 800 centres worldwide and 4.3+ million alumni, G-TEC brings more than two decades of proven excellence in skilling to the United Kingdom.</p>
          <p className="lead">Located in the Wembley–Harrow Corridor with our regional headquarters in Park Royal, London, G-TEC UK operates at the heart of London&apos;s dynamic commercial hub. Under the leadership of Mr. Shammas Kamal, our UK operations bridge local industry demand with high-quality education, university collaborations and strategic corporate alliances.</p>
        </div>
      </Reveal>
    </section>
  );
}
