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

function UluLogo() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-[#00d2c4] shadow-lg shadow-black/60 md:h-16 md:w-16 bg-zinc-900">
      <img
        src="/logo.jpeg"
        alt="ULUASANSÖR Logo"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function Home() {
  const phone1 = "+905388956116";
  const phone1Text = "0538 895 61 16";
  
  const phone2 = "+905523036116";
  const phone2Text = "0552 303 61 16";

  const email = "info@uluasansor.com";

  const address = "Esenevler, Eylül Cd. No:1, 16300 Yıldırım/Bursa";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Esenevler+Eylul+Cd.+No:1+Yildirim+Bursa";
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2771092416!2d29.1245!3d40.1885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3fe!2sEsenevler%2C%20Eyl%C3%BCl%20Cd.%20No%3A1%2C%2016300%20Y%C4%B1ld%C4%B1r%C4%B1m%2FBursa!5e0!3m2!1str!2str!4v1700000000000";

  const stats = [
    { title: "7/24", text: "Teknik Servis", icon: "⏱" },
    { title: "Hızlı", text: "Arıza Müdahalesi", icon: "⚡" },
    { title: "Uzman", text: "Teknik Ekip", icon: "👷" },
    { title: "Güvenli", text: "Kalıcı Çözüm", icon: "🛡" },
  ];

  const services = [
    {
      no: "01",
      icon: "install" as IconType,
      title: "Asansör Montajı",
      text: "Yeni binalar ve mevcut yapılar için ihtiyaca uygun asansör sistemlerinin montajını güvenli ve uzun ömürlü şekilde gerçekleştiriyoruz.",
    },
    {
      no: "02",
      icon: "maintenance" as IconType,
      title: "Asansör Bakımı",
      text: "Periyodik bakım ile asansörlerinizin güvenli, verimli ve sessiz çalışmasını sağlıyor, sistemin genel durumunu titizlikle kontrol ediyoruz.",
    },
    {
      no: "03",
      icon: "alert" as IconType,
      title: "Teknik Servis & Arıza",
      text: "Acil arıza durumlarında hızlı ve çözüm odaklı müdahale ederek sistemin güvenli şekilde yeniden çalışmasını hedefliyoruz.",
    },
    {
      no: "04",
      icon: "revision" as IconType,
      title: "Revizyon",
      text: "Zamanla yıpranan veya eskiyen asansör sistemlerini daha güvenli, konforlu ve modern hale getiriyoruz.",
    },
    {
      no: "05",
      icon: "install" as IconType,
      title: "Modernizasyon",
      text: "Kontrol sistemleri, kapılar, motor ve diğer bileşenlerde yenileme çözümleriyle performans artışı sağlıyoruz.",
    },
  ];

  const features = [
    { 
      title: "Güvenlik Önceliğimiz", 
      desc: "Asansör sistemlerinde insan güvenliğinin ve kalıcı çözümlerin her şeyden önce geldiğine inanıyoruz." 
    },
    { 
      title: "Kaliteli İşçilik", 
      desc: "Yaptığımız her uygulamada işçilik kalitesine, detaylara ve doğru malzeme seçimine önem veriyoruz." 
    },
    { 
      title: "Şeffaf Hizmet", 
      desc: "Yapılacak işlemler ve ihtiyaç duyulan çalışmalar konusunda müşterilerimizi açık ve anlaşılır şekilde bilgilendiriyoruz." 
    },
    { 
      title: "Zamanında Hizmet", 
      desc: "Planlama ve servis süreçlerinde müşterilerimizin zamanına saygı duyarak hızlı hareket ediyoruz." 
    },
  ];

  return (
    <main className="min-h-screen bg-[#111] text-white">
      {/* Google Yerel SEO (Schema) Entegrasyonu */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ulu Asansör | Bursa Asansör Bakım, Arıza ve Montaj",
            "image": "https://www.uluasansor.com/logo.jpeg",
            "@id": "https://www.uluasansor.com",
            "url": "https://www.uluasansor.com",
            "telephone": phone1,
            "priceRange": "₺₺",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Esenevler, Eylül Cd. No:1",
              "addressLocality": "Yıldırım",
              "addressRegion": "Bursa",
              "postalCode": "16300",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.1885,
              "longitude": 29.1245
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "areaServed": ["Nilüfer", "Osmangazi", "Yıldırım", "İnegöl", "Gemlik", "Mudanya", "Kestel", "Gürsu"],
            "makesOffer": [
              "Asansör Bakım",
              "Asansör Arıza Servisi",
              "Asansör Revizyonu ve Modernizasyon",
              "Yük Asansörü Montajı",
              "Otopark Asansörü",
              "Calaskal Asansör",
              "Hidrolik Asansör Bakımı",
              "Engelli Asansör Arızası",
              "Engelli Asansör Bakımı",
              "Engelli Asansör Montajı",
              "Oto Asansörü Tamiri",
              "Yemek Asansörü Servisi",
              "Periyodik Asansör Kontrolü",
              "Asansör Bakım Sözleşmesi"
            ]
          }),
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-zinc-800 bg-[#111]/90 px-6 py-4 backdrop-blur-md md:px-12">
        <div className="flex items-center gap-3">
          <UluLogo />
          <span className="text-xl font-bold tracking-wider text-white">
            ULU <span className="text-[#00d2c4]">ASANSÖR</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
          <a href="#" className="border-b-2 border-[#00d2c4] pb-1 text-[#00d2c4]">ANA SAYFA</a>
          <a href="#hizmetler" className="hover:text-[#00d2c4] transition">HİZMETLER</a>
          <a href="#hakkimizda" className="hover:text-[#00d2c4] transition">HAKKIMIZDA</a>
          <a href="#misyon-vizyon" className="hover:text-[#00d2c4] transition">MİSYON & VİZYON</a>
          <a href="#iletisim" className="hover:text-[#00d2c4] transition">İLETİŞİM</a>
        </nav>

        <a
          href={`https://wa.me/${phone1}?text=Merhaba,%20asansör%20teknik%20servis%20için%20yardım%20istiyorum.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-[#00d2c4] px-4 py-2.5 text-sm font-bold text-black shadow-lg shadow-[#00d2c4]/30 hover:bg-[#00b3a6] transition"
        >
          <span>Destek</span>
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center px-6 pt-36 pb-24 md:px-12 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2200&auto=format&fit=crop"
            alt="Asansör Arka Plan"
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-bold tracking-widest text-[#00d2c4] uppercase">
            ULU ASANSÖR
          </p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase leading-tight md:text-6xl lg:text-7xl">
            Yüksekliğin <br />
            <span className="text-[#00d2c4]">Ulu Adresi</span>
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${phone1}?text=Merhaba,%20teklif%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00d2c4] px-8 py-4 font-bold text-black shadow-xl shadow-[#00d2c4]/20 hover:bg-[#00b3a6] transition"
            >
              📋 Teklif Al
            </a>
            <a
              href={`tel:${phone1}`}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 px-8 py-4 font-bold text-white hover:bg-zinc-800 transition"
            >
              📞 Bize Ulaşın
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-zinc-800 bg-[#161616] px-6 py-8 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <span className="text-3xl text-[#00d2c4]">{item.icon}</span>
              <div>
                <p className="text-xl font-bold text-white md:text-2xl">{item.title}</p>
                <p className="text-xs text-gray-400 md:text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="px-6 py-24 md:px-12 bg-[#111]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-sm font-bold tracking-widest text-[#00d2c4] uppercase">Hakkımızda</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Güven Üzerine Kurulu Bir Marka</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 items-start text-gray-300 leading-relaxed text-base md:text-lg">
            <p>
              Ulu Asansör olarak bizler; her gün binlerce insanı yerden metrelerce yükseğe taşırken, kabin içindeki tek düşüncenin o günkü planlara odaklanmak olmasını sağlayan kusursuz, görünmez bir mühendisliği hayata geçiriyoruz. İşimizi yalnızca katları birbirine bağlayan mekanik bir süreç olarak değil; binalara kalbi hiç durmadan atan, sessiz ve sarsıntısız bir yaşam damarı kazandırmak olarak görüyoruz.
            </p>
            <p>
              Adımızdaki &apos;Ulu&apos; kelimesi, yalnızca ulaştığımız yüksekliği değil, emanet aldığımız insan hayatına duyduğumuz saygının büyüklüğünü temsil eder. Biz sadece bir sistem kurmuyoruz; kapılar kapandığında tüm endişeleri dışarıda bırakan, mutlak bir güven alanı tasarlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="border-t border-zinc-800 bg-[#161616] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold tracking-widest text-[#00d2c4] uppercase">Hizmetlerimiz</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">İhtiyacınıza Uygun Asansör Çözümleri</h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-[#00d2c4]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative rounded-2xl border border-zinc-800 bg-[#1e1e24] p-6 transition hover:border-[#00d2c4]"
              >
                <div className="absolute right-6 top-6 text-2xl font-bold text-zinc-700 group-hover:text-[#00d2c4]/40">
                  {service.no}
                </div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#00d2c4] text-black">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="misyon-vizyon" className="border-t border-zinc-800 bg-[#111] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-[#161616] p-8">
            <p className="text-sm font-bold tracking-widest text-[#00d2c4] uppercase">Misyonumuz</p>
            <h3 className="mt-2 text-2xl font-extrabold">Ne Yapıyoruz?</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Tonlarca çeliği ve bize emanet edilen insan hayatını, kusursuz bir mühendislik ve sessiz bir akıcılıkla yukarı taşımak. Temel amacımız; asansöre binilen an ile inilen an arasındaki o kısa yolculuğu, günün en güvenli ve en konforlu deneyimine dönüştürmektir. Standartları yalnızca bir yasal zorunluluk değil, kalitemizin en alt sınırı olarak kabul ediyoruz. Müdahaleyi arıza anına bırakan değil, riskleri önceden öngören akıllı ve sürdürülebilir sistemlerle dikey ulaşımda &apos;sıfır hata, mutlak konfor&apos; standardını uyguluyoruz.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-[#161616] p-8">
            <p className="text-sm font-bold tracking-widest text-[#00d2c4] uppercase">Vizyonumuz</p>
            <h3 className="mt-2 text-2xl font-extrabold">Nereye Ulaşmak İstiyoruz?</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Hedefimiz yalnızca daha çok asansör kurmak değil, geleceğin dikey büyüyen şehirlerinde sarsılmaz bir güven standardı yaratmaktır. Bir binaya girildiğinde, asansördeki &apos;Ulu&apos; etiketini gören herkesin &apos;Burada güvendeyim&apos; hissini koşulsuz yaşamasını sağlamak istiyoruz. İsmimizin sektörde sıradan bir markayı aşarak; kalite, emniyet ve ileri teknoloji kelimeleriyle eş anlamlı hale gelmesi, en büyük vizyonumuzdur.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="border-t border-zinc-800 bg-[#161616] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold tracking-widest text-[#00d2c4] uppercase">Neden Ulu Asansör?</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Sadece Asansör Değil, Güven Sunuyoruz</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <div key={index} className="rounded-xl border border-zinc-800 bg-[#111] p-6">
                <div className="text-lg font-bold text-[#00d2c4] mb-2">0{index + 1}.</div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="border-t border-zinc-800 bg-[#111] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold tracking-widest text-[#00d2c4] uppercase">İletişim</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Bize Ulaşın</h2>
            <p className="mt-4 text-gray-400">Bursa ve çevresindeki tüm asansör bakım, arıza, revizyon ve montaj talepleriniz için bize ulaşın.</p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 items-stretch">
            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#161616] p-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">İletişim Bilgileri</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-[#00d2c4] text-xl">📍</span>
                    <div>
                      <p className="font-semibold text-white">Adres:</p>
                      <p className="text-sm text-gray-400">{address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00d2c4] text-xl">📞</span>
                    <div>
                      <p className="font-semibold text-white">Telefonlar:</p>
                      <p className="text-sm text-gray-400">
                        <a href={`tel:${phone1}`} className="hover:text-[#00d2c4] transition underline">{phone1Text}</a> / <a href={`tel:${phone2}`} className="hover:text-[#00d2c4] transition underline">{phone2Text}</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#00d2c4] text-xl">✉️</span>
                    <div>
                      <p className="font-semibold text-white">E-posta:</p>
                      <p className="text-sm text-gray-400">
                        <a href={`mailto:${email}`} className="hover:text-[#00d2c4] transition underline">{email}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${phone1}`}
                    className="flex-1 text-center rounded-xl bg-[#00d2c4] px-4 py-3.5 font-bold text-black shadow-lg hover:bg-[#00b3a6] transition text-sm"
                  >
                    📞 1. Numarayı Ara
                  </a>
                  <a
                    href={`tel:${phone2}`}
                    className="flex-1 text-center rounded-xl border border-[#00d2c4] px-4 py-3.5 font-bold text-[#00d2c4] shadow-lg hover:bg-[#00d2c4]/10 transition text-sm"
                  >
                    📞 2. Numarayı Ara
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${phone1}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-xl bg-[#00d2c4] text-black px-4 py-3.5 font-bold shadow-lg hover:bg-[#00b3a6] transition flex items-center justify-center gap-2 text-sm"
                  >
                    💬 WhatsApp (1)
                  </a>
                  <a
                    href={`https://wa.me/${phone2}?text=Merhaba,%20bilgi%20almak%20istiyorum.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-xl bg-[#00d2c4] text-black px-4 py-3.5 font-bold shadow-lg hover:bg-[#00b3a6] transition flex items-center justify-center gap-2 text-sm"
                  >
                    💬 WhatsApp (2)
                  </a>
                </div>
                
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-[#00d2c4]/40 bg-zinc-900 px-6 py-3.5 font-bold text-[#00d2c4] hover:bg-[#00d2c4]/10 transition"
                >
                  📍 Haritada Aç / Yol Tarifi Al
                </a>
              </div>
            </div>

            <div className="relative h-[350px] md:h-full min-h-[300px] w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
              <iframe
                title="ULU ASANSÖR Konum"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-85 hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#0a0a0a] px-6 py-10 text-center text-gray-400 md:px-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <UluLogo />
          <span className="text-lg font-bold text-white tracking-wider">
            ULU <span className="text-[#00d2c4]">ASANSÖR</span>
          </span>
        </div>
        <p className="text-sm italic text-[#00d2c4]">“Yüksekliğin Ulu Adresi.”</p>
        <p className="mt-2 text-sm">Adres: {address} | E-posta: {email}</p>
        <p className="mt-1 text-sm">Telefonlar: {phone1Text} - {phone2Text}</p>
        <p className="mt-2 text-sm">Asansör Bakım • Arıza • Revizyon • Montaj • Modernizasyon</p>
        <p className="mt-6 text-xs text-gray-500">
          © 2026 ULUASANSÖR. Tüm hakları saklıdır.
        </p>
      </footer>
    </main>
  );
}