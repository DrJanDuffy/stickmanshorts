import { site } from "@/site.config";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-950 px-6 py-24 text-center text-zinc-50">
      <main className="flex max-w-2xl flex-col items-center gap-6">
        <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
          {site.domain}
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {site.title}
        </h1>
        <p className="text-lg leading-relaxed text-zinc-300">
          {site.description}
        </p>
        <p className="text-sm text-zinc-500">
          Site is live on Vercel. Content coming soon.
        </p>
      </main>
    </div>
  );
}

