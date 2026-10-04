import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

const FADE_MS = 500;
const FADE_OUT_THRESHOLD = 0.55;

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cancelFade = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const fadeTo = (target: number) => {
      cancelFade();
      const start = parseFloat(video.style.opacity || "0");
      const startTime = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - startTime) / FADE_MS, 1);
        video.style.opacity = String(start + (target - start) * t);
        rafRef.current = t < 1 ? requestAnimationFrame(step) : null;
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const onCanPlay = () => {
      video.play().catch(() => {});
      fadingOutRef.current = false;
      fadeTo(1);
    };

    const onTimeUpdate = () => {
      if (!video.duration || fadingOutRef.current) return;
      if (video.duration - video.currentTime <= FADE_OUT_THRESHOLD) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const onEnded = () => {
      cancelFade();
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended", onEnded);
      cancelFade();
    };
  }, []);

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        style={{ opacity: 0 }}
        src={HERO_VIDEO}
        muted
        autoPlay
        playsInline
        preload="auto"
      />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 pt-32 text-center -translate-y-[10%]">
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight md:whitespace-nowrap mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Know it then <em className="italic">all</em>.
        </h1>

        <form className="max-w-xl w-full mb-6" onSubmit={(e) => e.preventDefault()}>
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-white rounded-full p-3 text-black"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </form>

        <p className="text-white text-sm leading-relaxed px-4 max-w-xl mb-6">
          Stay updated with the latest news and insights. Subscribe to our newsletter today and
          never miss out on exciting updates.
        </p>

        <Link
          to="/about"
          className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          Manifesto
        </Link>
      </div>
    </section>
  );
}
