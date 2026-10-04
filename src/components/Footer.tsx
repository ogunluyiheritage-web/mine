import { Link } from "react-router-dom";
import { Globe, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center mb-4">
            <Globe size={24} className="text-white" />
            <span className="text-white font-semibold text-lg ml-2">Asme</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Pioneering ideas for minds that create, build, and inspire.
          </p>
        </div>

        <div>
          <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Pages</p>
          <ul className="space-y-3">
            {[
              ["/", "Home"],
              ["/features", "Features"],
              ["/pricing", "Pricing"],
              ["/about", "About"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/70 hover:text-white text-sm transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Follow</p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Globe].map((Icon, i) => (
              <button
                key={i}
                className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="max-w-6xl mx-auto mt-12 text-white/30 text-xs">
        © {new Date().getFullYear()} Asme. All rights reserved.
      </p>
    </footer>
  );
}
