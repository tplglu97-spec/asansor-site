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

// Logo Bileşeni
function UluLogo() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-[#00d2c4] shadow-lg shadow-black/60 md:h-16 md:w-16">
      <img
        src="/logo.jpeg"
        alt="ULUASANSÖR Logo"
        className="absolute h-[240%] w-[240%] max-w-none object-cover object-center"
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

        {/* Sağ Üst WhatsApp Destek Butonu */}
        <a
          href={`https://wa.me/${phone1}?text=Merhaba,%20asansör%20teknik%20servis%20için%20yardım%20istiyorum.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-[#00d2c4] px-4 py-2.5 text-sm font-bold text-black shadow-lg shadow-[#00d2c4]/30 hover:bg-[#00b3a6] transition"
        >
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
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
              Hedefimiz yalnızca daha çok asansör kurmak değil, geleceğin dikey büyüyen şehirlerinde sarsılmaz bir güven standardı yaratmak. Bir binaya girildiğinde, asansördeki &apos;Ulu&apos; etiketini gören herkesin &apos;Burada güvendeyim&apos; hissini koşulsuz yaşamasını sağlamak istiyoruz. İsmimizin sektörde sıradan bir markayı aşarak; kalite, emniyet ve ileri teknoloji kelimeleriyle eş anlamlı hale gelmesi, en büyük vizyonumuzdur.
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

      {/* Contact Section with Address and Map */}
      <section id="iletisim" className="border-t border-zinc-800 bg-[#111] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm font-bold tracking-widest text-[#00d2c4] uppercase">İletişim</p>
            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">Bize Ulaşın</h2>
            <p className="mt-4 text-gray-400">Bursa ve çevresindeki tüm asansör bakım, arıza, revizyon ve montaj talepleriniz için bize ulaşın.</p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 items-stretch">
            {/* İletişim Bilgileri ve Butonlar */}
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
                
                {/* Direkt Dükkan Konumunu Açma Düğmesi */}
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

            {/* Google Haritalar Konum Entegrasyonu */}
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