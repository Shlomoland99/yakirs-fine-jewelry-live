export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Video */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero.jpg"
        >
          <source src="/videos/homepage-speaking-model.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        
        {/* Logo overlay left side */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 max-w-md">
          <p className="text-amber-200 text-sm tracking-[0.3em] uppercase mb-4">Frost Yourself</p>
          <h1 className="font-serif text-6xl md:text-7xl text-amber-100 leading-none">
            Yakir's
          </h1>
          <p className="text-amber-200 tracking-widest uppercase text-sm mt-2">Fine Jewelry</p>
          <p className="text-amber-100/70 text-lg mt-6 font-light">Timeless Radiance</p>
        </div>
      </div>

      {/* Bottom collection strip */}
      <section className="bg-black py-16 px-8">
        <h2 className="text-center font-serif text-3xl text-amber-100 mb-12">Collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Rings", href: "/rings" },
            { name: "Bracelets", href: "/bracelets" },
            { name: "Necklaces", href: "/necklaces" },
            { name: "Earrings", href: "/earrings" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="group relative aspect-[3/4] bg-purple-950/40 border border-amber-900/30 overflow-hidden hover:border-amber-400/50 transition"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="font-serif text-xl text-amber-100 group-hover:text-amber-300">{item.name}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}