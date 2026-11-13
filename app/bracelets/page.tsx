export default function BraceletsPage() {
  return (
    <main className="min-h-screen bg-black pt-24 px-8 pb-16">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-amber-200 tracking-[0.3em] uppercase text-sm mb-4">Frost Yourself</p>
        <h1 className="font-serif text-5xl md:text-6xl text-amber-100 mb-6">Bracelets</h1>
        <p className="text-amber-100/70 text-lg max-w-2xl mx-auto mb-12">
          Diamond tennis and eternity bracelets. Crafted for elegance and lasting brilliance.
        </p>
        <div className="aspect-video bg-purple-950/30 border border-amber-900/40 rounded-lg flex items-center justify-center">
          <p className="text-amber-200/60 font-serif text-2xl">Bracelets Collection</p>
        </div>
        <a href="/" target="_blank" className="inline-block mt-12 text-amber-300 hover:text-amber-100 tracking-widest uppercase text-sm">
          ← Back to Home
        </a>
      </div>
    </main>
  );
}