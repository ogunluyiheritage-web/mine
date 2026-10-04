import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PageHeader from "../components/PageHeader";

const serif = { fontFamily: "'Instrument Serif', serif" };

const plans = [
  {
    name: "Starter",
    price: "$0",
    note: "For individuals exploring",
    items: ["1 workspace", "Basic research tools", "Community support"],
    highlight: false,
  },
  {
    name: "Studio",
    price: "$29",
    note: "per month, for growing teams",
    items: ["Unlimited workspaces", "Advanced insights", "Team sharing", "Priority support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "for organizations at scale",
    items: ["Dedicated success manager", "Custom integrations", "Security reviews", "SLA"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <>
      <PageHeader
        label="Pricing"
        title={
          <>
            Simple plans,{" "}
            <em className="italic text-white/60" style={serif}>
              clear value
            </em>
          </>
        }
        subtitle="Start free and upgrade when your team is ready. These are placeholder prices you can edit."
      />

      <section className="bg-black pb-28 md:pb-40 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`liquid-glass rounded-3xl p-8 flex flex-col ${
                p.highlight ? "bg-white/5" : ""
              }`}
            >
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">{p.name}</p>
              <p className="text-white text-5xl tracking-tight mb-2" style={serif}>
                {p.price}
              </p>
              <p className="text-white/50 text-sm mb-8">{p.note}</p>
              <ul className="space-y-3 mb-10 flex-1">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-white/70 text-sm">
                    <Check size={16} className="text-white" />
                    {it}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`rounded-full px-8 py-3 text-sm font-medium text-center transition-colors ${
                  p.highlight
                    ? "bg-white text-black"
                    : "liquid-glass text-white hover:bg-white/5"
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
