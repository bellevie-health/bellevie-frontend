export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-6xl leading-[1.1]">
          About <span className="text-[#33c2df]">Bellevie</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 font-medium">
          We are a team of dedicated medical professionals and technology experts 
          committed to delivering accessible, world-class healthcare solutions.
        </p>
      </div>
    </section>
  );
}
