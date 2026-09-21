export function Smoke() {
  const smokeSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60'%3E%3Cpath d='M0 40 Q30 10 60 35 Q90 60 120 30' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1.5'/%3E%3Cpath d='M0 50 Q40 20 80 45 Q100 55 120 40' fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='1'/%3E%3C/svg%3E")`;
  const smokeSvgLight = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='60'%3E%3Cpath d='M0 40 Q30 10 60 35 Q90 60 120 30' fill='none' stroke='rgba(120,60,20,0.09)' stroke-width='1.5'/%3E%3Cpath d='M0 50 Q40 20 80 45 Q100 55 120 40' fill='none' stroke='rgba(120,60,20,0.06)' stroke-width='1'/%3E%3C/svg%3E")`;

  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh", backgroundColor: "#f5f1e8" }}>
      {/* Hero with smoke waves */}
      <div style={{ position: "relative", height: 320, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, #1a0906 0%, #4a1e0a 55%, #7a3215 100%)" }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: smokeSvg,
          backgroundSize: "120px 60px",
        }} />
        {/* Ember glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 30% 85%, rgba(200,90,20,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 90%, rgba(180,60,10,0.25) 0%, transparent 40%)"
        }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "#fff", textAlign: "center", padding: "0 32px" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#d4a96a", marginBottom: 14 }}>г. Аксай</div>
          <h1 style={{ fontSize: 44, fontWeight: 700, margin: 0 }}>Аксай Гриль</h1>
          <p style={{ marginTop: 12, fontSize: 15, opacity: 0.7 }}>Мясо на мангале · Доставка · Банкеты</p>
        </div>
      </div>

      {/* Smoke transition — wavy divider */}
      <div style={{
        height: 40,
        background: "linear-gradient(to bottom, #4a1e0a 0%, #f5f1e8 100%)",
        backgroundImage: smokeSvgLight,
        backgroundSize: "120px 40px"
      }} />

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 32px 48px" }}>
        <h2 style={{ fontSize: 28, color: "#3d1f0e", marginBottom: 24 }}>Меню</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {["Шашлык из свинины", "Люля-кебаб", "Стейк из говядины"].map((item, i) => (
            <div key={i} style={{
              backgroundColor: "#fff",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 14px rgba(0,0,0,0.08)"
            }}>
              <div style={{
                height: 40,
                backgroundImage: smokeSvgLight,
                backgroundSize: "120px 40px",
                backgroundColor: "#faf5ec"
              }} />
              <div style={{ padding: "16px 16px 20px" }}>
                <div style={{ fontWeight: 700, color: "#3d1f0e", marginBottom: 6 }}>{item}</div>
                <div style={{ fontSize: 13, color: "#7a6055" }}>Свежее мясо на живом огне</div>
                <div style={{ marginTop: 12, fontWeight: 700, color: "#9b3f1c" }}>от 450₽</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "8px 0 24px", fontSize: 11, color: "#a0897e", letterSpacing: "0.12em", textTransform: "uppercase" }}>
        Вариант 4 — Дым / волнистые линии
      </div>
    </div>
  );
}
