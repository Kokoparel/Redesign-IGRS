import { useGames, getIgrs } from "./hooks/useGames";

const App = () => {
  const { searchQuery, setSearchQuery, yearFilter, setYearFilter, sortFilter, setSortFilter, years, filteredGames } =
    useGames();

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-[#1a1c1e] font-sans antialiased selection:bg-[#ff3b30] selection:text-white relative">
      <div
        className="absolute inset-0 bg-[radial-gradient(#e1dfda_1px,transparent_1px)] [bg-size:24px_24px] opacity-70 pointer-events-none"
        aria-hidden="true"
      />
      <div className="w-full h-2 flex" aria-hidden="true">
        <div className="flex-1 bg-[#34c759]" title="Aman / Semua Umur" />
        <div className="flex-1 bg-[#ffcc00]" title="Bimbingan Orang Tua" />
        <div className="flex-1 bg-[#ff9500]" title="Remaja" />
        <div className="flex-1 bg-[#ff3b30]" title="Dewasa" />
      </div>

      <header className="relative z-10 max-w-7xl mx-auto px-8 py-8 flex justify-between items-baseline border-b border-[#e9e7e2]">
        <div className="flex items-baseline gap-4">
          <span className="font-serif italic text-2xl tracking-tight font-semibold text-[#1a1c1e]">
            indonesia game rating system
          </span>
          <span className="text-[10px] font-mono tracking-widest uppercase bg-[#1a1c1e] text-[#fcfbf9] px-2 py-0.5">
            RE-DESIGN CHALENGE
          </span>
        </div>
        <div className="hidden md:block font-mono text-[11px] tracking-wider text-[#8a8881]">
          [ INITIAL_STAGE // ARCHI.v2 ]
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#8a8881] mb-6 flex items-center gap-2">
            <span>⚡ COMPLIANCE & CULTURE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30]" />
          </div>

          <h1 className="font-serif text-6xl md:text-8xl font-normal tracking-tight text-[#1a1c1e] leading-[0.95] mb-8">
            Menata Ulang <br />
            <span className="italic font-light text-[#ff3b30]">Batasan Digital</span> <br />
            Anak Bangsa.
          </h1>
        </div>

        <div className="lg:col-span-4 lg:pt-16 border-t-2 border-[#1a1c1e] lg:border-t-0 lg:border-l lg:pl-8 lg:border-[#e9e7e2]">
          <p className="text-base md:text-lg text-[#4a4842] font-normal leading-relaxed mb-8">
            Ini adalah langkah awal dari proyek tantangan desain interaktif untuk
            <span className="text-[#1a1c1e] font-medium underline decoration-[#ffcc00] decoration-2 underline-offset-4">
              {" "}
              IGRS (Kemkomdigi)
            </span>
            . Membentuk jembatan komunikasi yang aman antara ekosistem game modern dengan pengawasan kultural orang tua.
          </p>

          <div className="flex flex-col gap-3">
            <button className="w-full py-4 bg-[#1a1c1e] text-[#fcfbf9] font-mono text-xs uppercase tracking-widest hover:bg-[#ff3b30] transition-colors duration-300 flex justify-between items-center px-6 group">
              <span>INISIASI PROYEK</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="w-full py-4 bg-transparent text-[#1a1c1e] border border-[#1a1c1e] font-mono text-xs uppercase tracking-widest hover:bg-[#1a1c1e]/5 transition-colors duration-300">
              LIHAT DOKUMENTASI ASI
            </button>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#1a1c1e]">
          <article className="p-8 border-b md:border-b-0 md:border-r border-[#e9e7e2] hover:bg-[#34c759]/5 transition-colors group">
            <div className="font-mono text-[11px] text-[#8a8881] mb-8">01 / KLASIFIKASI ETIS</div>
            <div className="w-12 h-12 rounded-full border border-[#1a1c1e] flex items-center justify-center font-serif text-lg mb-6 group-hover:bg-[#34c759] group-hover:text-white transition-all">
              3+
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Sistem Rating Intuitif</h3>
            <p className="text-sm text-[#5a5852] leading-relaxed">
              Merancang ulang simbol klasifikasi (3+, 7+, 13+, 18+, SU) agar langsung dipahami orang tua tanpa perlu
              membaca manual yang panjang.
            </p>
          </article>

          <article className="p-8 border-b md:border-b-0 md:border-r border-[#e9e7e2] hover:bg-[#ffcc00]/5 transition-colors group">
            <div className="font-mono text-[11px] text-[#8a8881] mb-8">02 / AKULTURASI NILAI</div>
            <div className="w-12 h-12 rounded-full border border-[#1a1c1e] flex items-center justify-center font-serif text-lg mb-6 group-hover:bg-[#ffcc00] group-hover:text-black transition-all">
              ID
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Filter Budaya Lokal</h3>
            <p className="text-sm text-[#5a5852] leading-relaxed">
              Memasukkan indikator norma dan budaya Indonesia sebagai parameter penilaian utama dengan visualisasi yang
              tetap adaptif.
            </p>
          </article>

          <article className="p-8 hover:bg-[#ff3b30]/5 transition-colors group">
            <div className="font-mono text-[11px] text-[#8a8881] mb-8">03 / MONITORING IBU & AYAH</div>
            <div className="w-12 h-12 rounded-full border border-[#1a1c1e] flex items-center justify-center font-serif text-lg mb-6 group-hover:bg-[#ff3b30] group-hover:text-white transition-all">
              🔒
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">Dasbor Edukasi</h3>
            <p className="text-sm text-[#5a5852] leading-relaxed">
              Menyediakan ruang ramah pengguna bagi keluarga untuk melacak, memahami, dan menyaring game apa saja yang
              boleh dimainkan anak.
            </p>
          </article>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#8a8881] mb-3 flex items-center gap-2">
              <span>04 / GAME DIRECTORY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-[#1a1c1e]">
              Jelajahi <span className="italic text-[#ff3b30]">Game</span>
            </h2>
          </div>
          <span className="font-mono text-sm text-[#8a8881]">
            {filteredGames.length > 0 ? `${filteredGames.length} game` : ""}
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Cari nama atau kode game..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-10 pr-4 bg-white border border-[#e9e7e2] text-sm font-mono text-[#1a1c1e] placeholder:text-[#8a8881] focus:outline-none focus:border-[#1a1c1e] transition-colors"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8881] text-sm">&#128269;</span>
          </div>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="py-3 px-4 bg-white border border-[#e9e7e2] text-sm font-mono text-[#1a1c1e] focus:outline-none focus:border-[#1a1c1e] transition-colors"
          >
            <option value="all">Semua Tahun</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <select
            value={sortFilter}
            onChange={(e) => setSortFilter(e.target.value)}
            className="py-3 px-4 bg-white border border-[#e9e7e2] text-sm font-mono text-[#1a1c1e] focus:outline-none focus:border-[#1a1c1e] transition-colors"
          >
            <option value="name-asc">Nama ↑</option>
            <option value="name-desc">Nama ↓</option>
            <option value="rating-desc">Rating Tertinggi</option>
            <option value="rating-asc">Rating Terendah</option>
            <option value="year-desc">Tahun Terbaru</option>
            <option value="year-asc">Tahun Tertua</option>
          </select>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => {
              const igrs = getIgrs(game.rating);
              return (
                <article
                  key={game.id}
                  className="bg-white border border-[#e9e7e2] p-6 hover:border-[#1a1c1e] transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider bg-[#1a1c1e] text-[#fcfbf9] px-2 py-1">
                      {game.game_code}
                    </span>
                    <span className="font-mono text-xs text-[#8a8881]">{game.year}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-4 group-hover:text-[#ff3b30] transition-colors">
                    {game.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-mono font-bold text-[#1a1c1e]">{game.rating}</span>
                      <span className="text-yellow-400 text-sm">&#9733;</span>
                    </div>
                    <span
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-full"
                      style={{ background: `${igrs.color}20`, color: igrs.color }}
                    >
                      {igrs.label}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="font-serif text-3xl text-[#8a8881] mb-4">:(</div>
            <p className="font-mono text-sm text-[#8a8881]">Tidak ada game yang cocok dengan pencarianmu.</p>
          </div>
        )}
      </section>

      <footer className="relative z-10 max-w-7xl mx-auto px-8 py-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#8a8881] border-t border-[#e9e7e2]">
        <div>DEPT: KEMENTERIAN KOMUNIKASI DAN DIGITAL</div>
        <div className="mt-2 sm:mt-0">BUILD v2.0.26 // ALL RIGHTS RESERVED</div>
      </footer>
    </main>
  );
};

export default App;
