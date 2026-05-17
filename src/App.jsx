import { useEffect, useState } from 'react';

const stories = [
  'https://www.facebook.com/share/p/1BJcnNNvRm/',
  'https://www.facebook.com/share/p/1H2WfyGDjY/',
  'https://www.facebook.com/share/p/1LgrrZcYJV/',
  'https://www.facebook.com/share/p/1F1nHQRXoT/',
  'https://www.facebook.com/share/p/18Lh1k15bg/',
  'https://www.facebook.com/share/p/1JTLQcngvs/',
  'https://www.facebook.com/share/p/1ApcUghQkj/',
];

const roles = [
  'Assistant Editor-in-Chief',
  'Feature Writer',
  'Science & Technology Writer',
  'Layout Artist',
  'Student Photographer / Photojournalist',
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="paper-bg min-h-screen flex items-center justify-center">
        <div className="text-center animate-fadeInUp">
          <p className="font-display text-4xl text-ink tracking-widest">THE ARCHIVE OPENS</p>
          <p className="mt-4 text-xl text-sepia">Loading stories etched in sepia and memory...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="paper-bg min-h-screen relative grain">
      <header id="home" className="min-h-screen flex items-center justify-center px-6 py-12">
        <section className="section-card max-w-5xl w-full p-8 md:p-14 animate-fadeInUp">
          <p className="uppercase tracking-[0.25em] text-sepia text-sm">Historical Pressfolio Edition</p>
          <h1 className="font-display text-4xl md:text-7xl leading-tight mt-6">The Chronicle of a Student Journalist</h1>
          <p className="mt-5 max-w-3xl border-r-2 whitespace-nowrap overflow-hidden animate-typewriter text-lg md:text-2xl">
            Valedictorian • With High Honors • Graciano Lopez Jaena Award Recipient
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#about" className="px-5 py-2 border border-ink/60 hover:bg-ink hover:text-parchment transition">Open Archive</a>
            <a href="https://www.facebook.com/thesilhouettesillawitnhs" target="_blank" rel="noreferrer" className="px-5 py-2 border border-sepia/60 hover:bg-sepia hover:text-parchment transition">Publication Cover</a>
          </div>
        </section>
      </header>

      <div className="max-w-6xl mx-auto px-5 pb-24 space-y-10">
        <Section id="about" title="About Me">
          <p className="text-xl leading-relaxed">I preserve truths, frame voices, and design stories that breathe. As a campus journalist and media creator, I document the pulse of science, school life, and community—transforming events into enduring narratives.</p>
        </Section>

        <Section id="achievements" title="Achievements">
          <ul className="grid md:grid-cols-2 gap-4 text-lg">
            <li>🏅 Valedictorian</li><li>🎓 With High Honors</li><li>📜 Graciano Lopez Jaena Award Recipient</li><li>🧪 2nd Place DSPC Science & Technology Writing</li>
          </ul>
        </Section>

        <Section id="roles" title="Journalism Roles">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role) => (
              <article key={role} className="p-4 border border-sepia/40 bg-[#efe1c4] hover:shadow-xl transition duration-500 hover:-translate-y-1">{role}</article>
            ))}
          </div>
        </Section>

        <Section id="stories" title="Featured Articles">
          <div className="grid md:grid-cols-2 gap-4">
            {stories.map((link, i) => (
              <a key={link} href={link} target="_blank" rel="noreferrer" className="block p-4 border border-sepia/45 bg-[#f4e8d0] hover:animate-pageFlip [transform-origin:left_center] transition">
                <p className="uppercase text-xs tracking-widest text-sepia">Archive Story {i + 1}</p>
                <p className="font-display text-2xl mt-2">Read Feature #{i + 1}</p>
              </a>
            ))}
          </div>
        </Section>

        <Section id="gallery" title="Photography Gallery">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] bg-[#e7d7b6] border border-sepia/30 grid place-items-center text-center p-2 hover:scale-[1.02] transition">
                <p>Photo Plate {i + 1}<br />Add your photojournalism shot</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="layouts" title="Layout Designs">
          <div className="grid md:grid-cols-3 gap-4">
            {['Front Page Mockup', 'Editorial Spread', 'Feature Column Layout'].map((item) => (
              <div key={item} className="p-5 bg-[#ecdcbc] border border-sepia/30 hover:shadow-lg transition">
                <h3 className="font-display text-2xl">{item}</h3>
                <p className="mt-2">Showcase your newspaper layout artistry and visual hierarchy techniques here.</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact Page">
          <p className="text-lg mb-4">For collaborations, feature writing, photo coverage, and editorial projects, let's connect.</p>
          <div className="flex flex-wrap gap-4">
            <a className="px-4 py-2 border border-ink/50 hover:bg-ink hover:text-parchment transition" href="mailto:youremail@example.com">Email</a>
            <a className="px-4 py-2 border border-ink/50 hover:bg-ink hover:text-parchment transition" href="https://www.facebook.com/thesilhouettesillawitnhs" target="_blank" rel="noreferrer">Facebook Publication</a>
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section-card p-6 md:p-10 animate-fadeInUp">
      <h2 className="font-display text-3xl md:text-5xl mb-5">{title}</h2>
      {children}
    </section>
  );
}

export default App;
