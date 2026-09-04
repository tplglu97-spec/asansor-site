"use client";

type IconType = "maintenance" | "alert" | "revision" | "install";

function ServiceIcon({ type }: { type: IconType }) {
  const common = "h-7 w-7 text-black";

  if (type === "maintenance") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4l-3.2 3.2-3-3 3.2-3.2Z" />
      </svg>
    );
  }

  if (type === "alert") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 2.5 20h19L12 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17h.01" />
      </svg>
    );
  }

  if (type === "revision") {
    return (
      <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3h14v18H5V3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h1M15 8h1" />
      </svg>
    );
  }

  return (
    <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 0 1 4 4v1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 21v-3a6 6 0 0 1 12 0v3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16" />
    </svg>
  );
}

export default function Home() {
  const phone = "+905388956116";
  const phoneText = "0538 895 61 16";

  const stats = [
    { title: "7/24", text: "Teknik Servis", icon: "⏱" },
    { title: "Hızlı", text: "Arıza Müdahalesi", icon: "⚡" },
    { title: "Uzman", text: "Teknik Ekip", icon: "👷" },
    { title: "Güvenli", text: "Kalıcı Çözüm", icon: "🛡" },
  ];

  const services = [
    {
      no: "01",
      icon: "maintenance" as IconType,
      title: "Asansör Bakımı",
      text: "Periyodik bakım ile asansörlerinizin güvenli, sessiz ve sorunsuz çalışmasını sağlıyoruz.",
    },
    {
      no: "02",
      icon: "alert" as IconType,
      title: "Arıza Servisi",
      text: "Acil arıza durumlarında hızlı müdahale ederek sistemi kısa sürede kullanıma hazır hale getiriyoruz.",
    },
    {
      no: "03",
      icon: "revision" as IconType,
      title: "Revizyon",
      text: "Eski asansör sistemlerini daha güvenli, modern ve konforlu hale getiriyoruz.",
    },
    {
      no: "04",
      icon: "install" as IconType,
      title: "Montaj",
      text: "Yeni bina ve projeler için profesyonel asansör montaj çözümleri sunuyoruz.",
    },
    {
      no: "05",
      icon: "install" as IconType,
      title: "Engelli Asansörü",
      text: "Engelli bireyler için güvenli, konforlu ve erişilebilir asansör çözümleri sunuyoruz.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#05070b]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <a href="#" className="flex items-center">
  <div className="flex h-14 w-36 items-center justify-center overflow-hidden md:h-20 md:w-56">
    <img
      src="/logo.png"
      alt="ULUASANSÖR Logo"
      className="h-full w-full scale-[1.9] object-contain"
    />
  </div>
</a>

          <nav className="hidden gap-10 text-sm font-black uppercase md:flex">
            <a href="#" className="border-b-2 border-yellow-400 pb-2 text-yellow-400">
              Ana Sayfa
            </a>
            <a href="#hizmetler" className="hover:text-yellow-400">
              Hizmetler
            </a>
            <a href="#hakkimizda" className="hover:text-yellow-400">
              Hakkımızda
            </a>
            <a href="#iletisim" className="hover:text-yellow-400">
              İletişim
            </a>
          </nav>

          <a
            href={`tel:${phone}`}
            className="rounded-lg bg-yellow-400 px-4 py-3 text-xs font-black text-black shadow-xl shadow-yellow-400/20 hover:bg-yellow-300 md:px-7 md:py-4 md:text-sm"
          >
            ☎ <span className="hidden sm:inline">{phoneText}</span>
            <span className="sm:hidden">Ara</span>
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 pt-20 md:pt-24">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2200&auto=format&fit=crop"
          alt="Asansör hizmetleri"
          className="absolute inset-0 h-full w-full object-cover opacity-40 md:opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#05070b]/90 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070b] via-transparent to-black/20" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 md:px-6 md:pb-24 md:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-yellow-400 md:text-sm md:tracking-[0.28em]">
              7/24 Asansör Teknik Servis
            </p>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
              Asansör <br />
              <span className="text-yellow-400">Hizmetleri</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 md:text-lg md:leading-9">
              ULUASANSÖR; bakım, arıza, revizyon ve montaj hizmetlerinde hızlı
              müdahale, kaliteli işçilik ve güvenilir teknik servis sunar.
            </p>

            <div className="mt-8 md:mt-10">
              <a
                href={`tel:${phone}`}
                className="inline-flex w-full justify-center rounded-lg bg-yellow-400 px-8 py-4 text-sm font-black uppercase text-black shadow-xl shadow-yellow-400/20 hover:bg-yellow-300 sm:w-auto"
              >
                ☎ Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#090d14] px-4 py-6 md:px-6 md:py-9">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((item) => (
            <div
              key={item.title}
              className="min-h-[110px] rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:flex md:min-h-0 md:items-center md:gap-5 md:border-0 md:border-r md:bg-transparent md:p-0 md:last:border-r-0"
            >
              <div className="text-3xl text-yellow-400 md:text-4xl">{item.icon}</div>
              <div>
                <p className="mt-2 text-xl font-black uppercase md:mt-0 md:text-2xl">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-gray-300 md:text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="hizmetler" className="bg-[#070b11] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-yellow-400 md:text-sm md:tracking-[0.35em]">
              Hizmetlerimiz
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Profesyonel Asansör Çözümleri
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 bg-yellow-400" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative min-h-[280px] overflow-hidden rounded-[24px] border border-white/10 bg-[#10151d] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/70 hover:bg-[#151c26] md:min-h-[330px]"
              >
                <div className="absolute right-6 top-6 text-3xl font-black text-white/20 transition group-hover:text-yellow-400/40">
                  {service.no}
                </div>

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black shadow-lg shadow-yellow-400/20 transition group-hover:scale-110">
                  <ServiceIcon type={service.icon} />
                </div>

                <h3 className="text-xl font-black text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {service.text}
                </p>

                <div className="absolute bottom-6 left-6 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hakkimizda" className="bg-[#05070b] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-yellow-400 md:text-sm">
              Hakkımızda
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Güvenli kullanım için profesyonel teknik servis
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-gray-300 md:text-lg">
              ULUASANSÖR; apartman, site, iş merkezi ve projelerde asansör
              sistemlerinin güvenli şekilde çalışması için bakım, arıza,
              revizyon, montaj ve engelli asansörü hizmetleri sunar.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-black text-yellow-400">Hızlı Müdahale</p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Arıza taleplerinde hızlı teknik servis desteği.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-black text-yellow-400">Kalıcı Çözüm</p>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Güvenli, düzenli ve profesyonel işçilik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="bg-yellow-400 px-4 py-16 text-black md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] md:text-sm">
            İletişim
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight md:text-6xl">
            Asansör hizmeti için hemen ulaşın
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 md:text-lg">
            Bursa ve çevresinde bakım, arıza, revizyon ve montaj talepleriniz
            için bizi doğrudan arayabilirsiniz.
          </p>

          <a
            href={`tel:${phone}`}
            className="mx-auto mt-10 inline-flex w-full justify-center rounded-xl bg-black px-8 py-5 text-base font-black text-white shadow-2xl transition hover:bg-[#111] sm:w-auto md:text-lg"
          >
            ☎ {phoneText}
          </a>
        </div>
      </section>

      <footer className="bg-black px-4 py-10 text-center text-gray-400 md:px-6">
        <img
          src="/logo.png"
          alt="ULUASANSÖR Logo"
          className="mx-auto h-20 w-auto object-contain"
        />

        <p className="mt-4 text-sm">Asansör Bakım • Arıza • Revizyon • Montaj</p>
        <p className="mt-2 text-sm">Telefon: {phoneText}</p>
        <p className="mt-6 text-xs md:text-sm">
          © 2026 ULUASANSÖR. Tüm hakları saklıdır.
        </p>
      </footer>
    </main>
  );
}