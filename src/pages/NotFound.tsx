import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader label="404" title="Page not found" subtitle="That page doesn't exist." />
      <section className="bg-black pb-28 px-6 text-center">
        <Link
          to="/"
          className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors inline-block"
        >
          Back home
        </Link>
      </section>
    </>
  );
}
