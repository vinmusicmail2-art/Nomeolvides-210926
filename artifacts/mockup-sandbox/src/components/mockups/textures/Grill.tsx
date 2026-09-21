export function Grill() {
  return (
    <div style={{ fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      {/* Тёмный hero без текстуры */}
      <div style={{ height: 220, background: "linear-gradient(160deg,#1a0906 0%,#5c2a10 100%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", color:"#fff", textAlign:"center" }}>
        <div style={{ fontSize:11, letterSpacing:"0.3em", textTransform:"uppercase", color:"#d4a96a", marginBottom:10 }}>г. Аксай</div>
        <h1 style={{ fontSize:38, fontWeight:700, margin:0 }}>Аксай Гриль</h1>
      </div>

      {/* ▼ ТЕКСТУРА НА БЕЖЕВОМ ФОНЕ — решётка-гриль */}
      <div style={{
        backgroundColor: "#f5f1e8",
        backgroundImage: `
          repeating-linear-gradient(0deg,   transparent, transparent 31px, rgba(120,60,20,0.07) 31px, rgba(120,60,20,0.07) 32px),
          repeating-linear-gradient(90deg,  transparent, transparent 31px, rgba(120,60,20,0.07) 31px, rgba(120,60,20,0.07) 32px)
        `,
        backgroundSize: "32px 32px",
        padding: "48px 40px",
      }}>
        <h2 style={{ fontSize:22, color:"#3d1f0e", marginBottom:24, fontWeight:700 }}>Наше меню</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20 }}>
          {["Шашлык из свинины", "Люля-кебаб", "Стейк из говядины"].map((item,i) => (
            <div key={i} style={{ background:"rgba(255,255,255,0.82)", borderRadius:10, padding:"18px 16px", boxShadow:"0 2px 10px rgba(0,0,0,0.07)" }}>
              <div style={{ fontWeight:700, color:"#3d1f0e", marginBottom:5 }}>{item}</div>
              <div style={{ fontSize:13, color:"#7a6055" }}>На живом огне</div>
              <div style={{ marginTop:10, fontWeight:700, color:"#9b3f1c" }}>от 450₽</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop:32, padding:"20px 24px", background:"rgba(255,255,255,0.7)", borderRadius:10, boxShadow:"0 2px 10px rgba(0,0,0,0.06)" }}>
          <div style={{ fontWeight:700, color:"#3d1f0e", marginBottom:6 }}>О нас</div>
          <div style={{ fontSize:14, color:"#56423a", lineHeight:1.7 }}>
            Ресторан Аксай Гриль — живой огонь и настоящий вкус с 2010 года. Работаем ежедневно 10:00–22:00.
          </div>
        </div>
      </div>

      <div style={{ textAlign:"center", padding:"10px 0 18px", fontSize:10, color:"#b0998e", letterSpacing:"0.15em", textTransform:"uppercase", backgroundColor:"#f5f1e8", backgroundImage:`repeating-linear-gradient(0deg,transparent,transparent 31px,rgba(120,60,20,0.07) 31px,rgba(120,60,20,0.07) 32px),repeating-linear-gradient(90deg,transparent,transparent 31px,rgba(120,60,20,0.07) 31px,rgba(120,60,20,0.07) 32px)`, backgroundSize:"32px 32px" }}>
        Вариант 1 — решётка-гриль на бежевом фоне
      </div>
    </div>
  );
}
