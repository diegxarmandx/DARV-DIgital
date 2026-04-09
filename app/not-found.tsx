import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">404</p>
      <h1 className="mt-4 font-heading text-4xl text-white">Page not found</h1>
      <p className="mt-4 text-sm leading-relaxed text-mist-300">
        The page you requested does not exist or has moved.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Back to Home</Button>
      </div>
    </section>
  );
}
