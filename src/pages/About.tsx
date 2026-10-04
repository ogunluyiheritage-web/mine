import PageHeader from "../components/PageHeader";
import FeaturedVideoSection from "../components/FeaturedVideoSection";
import PhilosophySection from "../components/PhilosophySection";

const serif = { fontFamily: "'Instrument Serif', serif" };

const stats = [
  ["2019", "Founded"],
  ["40+", "Team members"],
  ["120", "Projects shipped"],
];

export default function About() {
  return (
    <>
      <PageHeader
        label="About Us"
        title={
          <>
            Pioneering{" "}
            <em className="italic text-white/60" style={serif}>
              ideas
            </em>{" "}
            for minds that create, build, and inspire.
          </>
        }
        subtitle="We are a team of researchers, designers, and builders who believe curiosity is the best starting point for anything worth making."
      />

      <section className="bg-black pb-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {stats.map(([n, l]) => (
            <div key={l} className="liquid-glass rounded-3xl py-8 px-4">
              <p className="text-white text-4xl md:text-5xl tracking-tight mb-2" style={serif}>
                {n}
              </p>
              <p className="text-white/40 text-xs tracking-widest uppercase">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <FeaturedVideoSection />
      <PhilosophySection />
    </>
  );
}
