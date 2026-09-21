export function Kraft() {
  // Kraft paper — coarse fibers via turbulence + subtle cross-hatch
  const crosshatch = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0L40 40M40 0L0 40' stroke='rgba(100,50,10,0.06)' stroke-width='0.6'/%3E%3Cpath d='M20 0L20 40M0 20L40 20' stroke='rgba(100,50,10,0.04)' stroke-width='0.4'/%3E%3C/svg%3E")`;
  const crosshatchDark = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0L40 40M40 0L0 40' stroke='rgba(255,200,150,0.06)' stroke-width='0.6'/%3E%3Cpath d='M20 0L20 40M0 20L40 20' stroke='rgba(255,200,150,0.04)' stroke-width='0.4'/%3E%3C/svg%3E")`;

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", backgroundColor: "#e8dcc8" }}>
      {/* Kraft paper background on page */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: crosshatch,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Hero */}
      <div style={{ position: "relative", height: 320, overflow: "hidden", zIndex: 1 }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #2a1406 0%, #5a2810 100%)" }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: crosshatchDark,
          backgroundSize: "40px 40px"
        }} />
        {/* Torn edge effect at bottom */}
        <svg style={{ position: "absolute", bottom: -1, left: 0, width: "100%", zIndex: 2 }} viewBox="0 0 1280 30" preserveAspectRatio="none" height={30}>
          <path d="M0,0 Q64,20 128,8 Q192,0 256,18 Q320,28 384,12 Q448,0 512,22 Q576,30 640,14 Q704,0 768,20 Q832,28 896,10 Q960,0 1024,18 Q1088,28 1152,12 Q1216,0 1280,20 L1280,30 L0,30 Z" fill="#e8dcc8" />
        </svg>
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "#fff", textAlign: "center", padding: "0 32px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#d4a96a", marginBottom: 14 }}>г. Аксай</div>
          <h1 style={{ fontSize: 44, fontWeight: 700, margin: 0 }}>Аксай Гриль</h1>
          <p style={{ marginTop: 12, fontSize: 15, opacity: 0.7 }}>Мясо на мангале · Доставка · Банкеты</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 32px 48px", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: 28, color: "#3d1f0e", marginBottom: 24 }}>Меню</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {["Шашлык из свинины", "Люля-кебаб", "Стейк из говядины"].map((item, i) => (
            <div key={i} style={{
              backgroundColor: "#f5ebe0",
              backgroundImage: crosshatch,
              backgroundSize: "40px 40px",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 14px rgba(0,0,0,0.1)",
              border: "1px solid rgba(120,70,20,0.15)"
            }}>
              <div style={{ padding: "20px 16px" }}>
                <div style={{ fontWeight: 700, color: "#3d1f0e", marginBottom: 6 }}>{item}</div>
                <div style={{ fontSize: 13, color: "#7a6055" }}>Свежее мясо на живом огне</div>
                <div style={{ marginTop: 12, fontWeight: 700, color: "#9b3f1c" }}>от 450₽</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "8px 0 24px", fontSize: 11, color: "#8a7060", letterSpacing: "0.12em", textTransform: "uppercase", position: "relative", zIndex: 1 }}>
        Вариант 5 — Крафтовая бумага
      </div>
    </div>
  );
}
