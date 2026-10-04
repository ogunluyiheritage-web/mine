import { Link } from "react-router-dom";
import { BarChart3, Layers, Search, Sparkles, Users, Zap } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ServicesSection from "../components/ServicesSection";

const serif = { fontFamily: "'Instrument Serif', serif" };

const features = [
  {
    icon: Search,
    title: "Deep research",
    text: "Surface the insights hidden in data, culture, and human behavior.",
  },
  {
    icon: Layers,
    title: "Connected workspace",
    text: "Bring ideas, sources, and decisions together in one calm place.",
  },
  {
    icon: Sparkles,
    title: "Crafted details",
    text: "Every interaction is considered, so the work feels effortless.",
  },
  {
    icon: BarChart3,
    title: "Clear reporting",
    text: "Turn complex findings into stories your team can act on.",
  },
  {
    icon: Users,
    title: "Built for teams",
    text: "Share, review, and build together without losing the thread.",
  },
  {
    icon: Zap,
    title: "Fast by default",
    text: "From first question to launch, momentum never has to stop.",
  },
];

export default function Features() {
  return (
    <>
      <PageHeader
        label="Features"
        title={
          <>
            Everything you need to{" "}
            <em className="italic text-white/60" style={serif}>
              know it all
            </em>
          </>
        }
        subtitle="A focused set of tools that help curious teams explore, decide, and build."
      />

      <section className="bg-black pb-20 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="liquid-glass rounded-3xl p-8">
              <span className="liquid-glass rounded-full p-3 inline-flex text-white mb-6">
                <Icon size={20} />
              </span>
              <h3 className="text-white text-xl tracking-tight mb-3">{title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesSection />

      <section className="bg-black pb-28 px-6 text-center">
        <Link
          to="/pricing"
          className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors inline-block"
        >
          See pricing
        </Link>
      </section>
    </>
  );
}
