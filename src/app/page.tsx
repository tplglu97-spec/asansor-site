export default function Home() {
  const phone1 = "+905388956116";
  const phone1Text = "0538 895 61 16";
  const phone2 = "+905523036116";
  const phone2Text = "0552 303 61 16";
  const address = "Esenevler, Eylül Cd. No:1, 16300 Yıldırım/Bursa";

  return (
    <main style={{ backgroundColor: "#111111", color: "#ffffff", minHeight: "100vh", fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      {/* Header */}
      <header style={{ position: "fixed", top: 0, left: 0, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px", backgroundColor: "rgba(17, 17, 17, 0.95)", borderBottom: "1px solid #27272a", boxSizing: "border-box", zIndex: 1000 }}>
        <div style={{ fontSize: "1.25rem", fontWeight: "bold", letterSpacing: "1px" }}>
          ULU <span style={{ color: "#00d2c4" }}>ASANSÖR</span>
        </div>
        <a
          href={`https://wa.me/${phone1}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#00d2c4", color: "#000000", padding: "8px 16px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none", fontSize: "0.9rem" }}
        >
          Destek
        </a>
      </header>

      {/* Hero Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 20px 80px 20px" }}>
        <p style={{ color: "#00d2c4", fontWeight: "bold", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
          ULU ASANSÖR
        </p>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", textTransform: "uppercase", lineHeight: "1.2", margin: "0 0 20px 0" }}>
          Yüksekliğin <span style={{ color: "#00d2c4" }}>Ulu Adresi</span>
        </h1>
        <p style={{ color: "#a1a1aa", fontSize: "1.1rem", marginBottom: "30px", maxWidth: "600px" }}>
          Bursa ve çevresinde profesyonel asansör bakım, montaj, arıza ve revizyon hizmetleri. Güvenliğiniz bizim önceliğimizdir.
        </p>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/${phone1}`}
            style={{ backgroundColor: "#00d2c4", color: "#000000", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}
          >
            📋 Teklif Al
          </a>
          <a
            href={`tel:${phone1}`}
            style={{ backgroundColor: "#18181b", color: "#ffffff", border: "1px solid #3f3f46", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}
          >
            📞 Bize Ulaşın
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ borderTop: "1px solid #27272a", backgroundColor: "#161616", padding: "80px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>İletişim</h2>
          <p style={{ color: "#a1a1aa", marginBottom: "30px", fontSize: "1rem" }}>{address}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a
              href={`tel:${phone1}`}
              style={{ backgroundColor: "#00d2c4", color: "#000000", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}
            >
              {phone1Text}
            </a>
            <a
              href={`tel:${phone2}`}
              style={{ backgroundColor: "transparent", color: "#00d2c4", border: "2px solid #00d2c4", padding: "12px 24px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}
            >
              {phone2Text}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}