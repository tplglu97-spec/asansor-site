export default function Home() {
  const phone1 = "+905388956116";
  const phone1Text = "0538 895 61 16";
  const phone2 = "+905523036116";
  const phone2Text = "0552 303 61 16";
  const email = "info@uluasansor.com";
  const address = "Esenevler, Eylül Cd. No:1, 16300 Yıldırım/Bursa";

  return (
    <main className="min-h-screen bg-[#111] text-white">
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-zinc-800 bg-[#111]/90 px-6 py-4 backdrop-blur-md md:px-12">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-wider text-white">
            ULU <span className="text-[#00d2c4]">ASANSÖR</span>
          </span>
        </div>
        <a
          href={`https://wa.me/${phone1}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[#00d2c4] px-4 py-2 text-sm font-bold text-black hover:bg-[#00b3a6] transition"
        >
          Destek
        </a>
      </header>

      <section className="px-6 pt-36 pb-24 md:px-12 md:pt-44 max-w-7xl mx-auto">
        <p className="text-sm font-bold tracking-widest text-[#00d2c4] uppercase">ULU ASANSÖR</p>
        <h1 className="mt-4 text-4xl font-extrabold uppercase leading-tight md:text-6xl">
          Yüksekliğin <span className="text-[#00d2c4]">Ulu Adresi</span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`https://wa.me/${phone1}`}
            className="rounded-xl bg-[#00d2c4] px-6 py-3 font-bold text-black hover:bg-[#00b3a6] transition"
          >
            📋 Teklif Al
          </a>
          <a
            href={`tel:${phone1}`}
            className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-bold text-white hover:bg-zinc-800 transition"
          >
            📞 Bize Ulaşın
          </a>
        </div>
      </section>

      <section className="border-t border-zinc-800 bg-[#161616] px-6 py-20 md:px-12 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">İletişim</h2>
          <p className="text-gray-400 mb-8">{address}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone1}`} className="rounded-xl bg-[#00d2c4] px-6 py-3 font-bold text-black">
              {phone1Text}
            </a>
            <a href={`tel:${phone2}`} className="rounded-xl border border-[#00d2c4] px-6 py-3 font-bold text-[#00d2c4]">
              {phone2Text}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}