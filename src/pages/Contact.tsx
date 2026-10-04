import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../components/PageHeader";

const serif = { fontFamily: "'Instrument Serif', serif" };

const fieldClass =
  "w-full bg-transparent outline-none text-white placeholder:text-white/40 px-6 py-3";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        label="Contact"
        title={
          <>
            Let's{" "}
            <em className="italic text-white/60" style={serif}>
              talk
            </em>
          </>
        }
        subtitle="Have a question or a project in mind? Send a message and we'll get back to you."
      />

      <section className="bg-black pb-28 md:pb-40 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="liquid-glass rounded-full">
              <input required className={fieldClass} placeholder="Your name" />
            </div>
            <div className="liquid-glass rounded-full">
              <input required type="email" className={fieldClass} placeholder="Email address" />
            </div>
            <div className="liquid-glass rounded-3xl">
              <textarea
                required
                rows={6}
                className={`${fieldClass} resize-none py-4`}
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black rounded-full px-8 py-3 text-sm font-medium"
            >
              Send message
            </button>
            {sent && (
              <p className="text-white/70 text-sm">
                Thanks! This demo form doesn't send anywhere yet; connect it to your backend or a
                form service.
              </p>
            )}
          </form>

          <div className="space-y-6">
            {[
              [Mail, "Email", "hello@asme.example"],
              [Phone, "Phone", "+1 (555) 010-0100"],
              [MapPin, "Studio", "123 Example Street, Your City"],
            ].map(([Icon, label, value]) => {
              const I = Icon as typeof Mail;
              return (
                <div key={label as string} className="liquid-glass rounded-3xl p-6 flex gap-4">
                  <span className="liquid-glass rounded-full p-3 text-white h-fit">
                    <I size={20} />
                  </span>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-1">
                      {label as string}
                    </p>
                    <p className="text-white text-base">{value as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
