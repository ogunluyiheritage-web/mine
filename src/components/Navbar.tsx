import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Globe, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-white" : "text-white/70 hover:text-white"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <nav className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Globe size={24} className="text-white" />
            <span className="text-white font-semibold text-lg ml-2">Asme</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 ml-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block text-white text-sm font-medium">
            Sign Up
          </Link>
          <Link
            to="/contact"
            className="hidden sm:block liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium"
          >
            Login
          </Link>
          <button
            className="md:hidden text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden liquid-glass rounded-3xl max-w-5xl mx-auto mt-3 px-6 py-4 flex flex-col gap-4 bg-black/60">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
