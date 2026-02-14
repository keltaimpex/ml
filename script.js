:root{
  --bg0:#070812;
  --bg1:#0f1020;
  --bg2:#1a0b1f;

  --card: rgba(255,255,255,.06);
  --card2: rgba(255,255,255,.08);
  --border: rgba(255,255,255,.12);

  --text:#f7f4ff;
  --muted: rgba(247,244,255,.70);

  --pink:#ff4fa3;
  --pink2:#ff89c7;
  --shadow: 0 20px 70px rgba(0,0,0,.35);
}

*{ box-sizing:border-box; }
html,body{ height:100%; }

body{
  margin:0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji","Segoe UI Emoji";
  color:var(--text);

  /* ✅ richer background */
  background:
    radial-gradient(1200px 900px at 12% 10%, rgba(255,79,163,.22), transparent 60%),
    radial-gradient(1000px 800px at 85% 18%, rgba(255,137,199,.16), transparent 62%),
    radial-gradient(900px 700px at 50% 85%, rgba(255,79,163,.10), transparent 65%),
    linear-gradient(180deg, var(--bg0), var(--bg2));

  min-height:100vh;
  overflow-x:hidden;
}

.container{
  width:min(1100px, 100%);
  margin:0 auto;
  padding:0 18px;
}

.topbar{
  position:sticky;
  top:0;
  z-index:50;
  backdrop-filter: blur(10px);
  background: rgba(7,8,18,.55);
  border-bottom:1px solid rgba(255,255,255,.10);
}

.topbar-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 0;
}

.brand{
  display:flex;
  gap:10px;
  align-items:center;
}
.logo{
  width:34px;
  height:34px;
  display:grid;
  place-items:center;
  border-radius:12px;
  background: rgba(255,79,163,.16);
  border:1px solid rgba(255,79,163,.25);
}
.brand-text{
  font-weight:800;
  letter-spacing:.2px;
  opacity:.95;
}

.top-actions{
  display:flex;
  gap:10px;
  align-items:center;
}

.hero{
  padding:34px 0 20px;
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap:22px;
  align-items:start;
}

.eyebrow{
  margin:0 0 10px 0;
  font-size:13px;
  color: rgba(247,244,255,.65);
  letter-spacing:.12em;
  text-transform:uppercase;
}

.headline{
  margin:0;
  font-size: clamp(32px, 3.6vw, 52px);
  letter-spacing: -0.02em;
  line-height:1.05;
}

.lead{
  margin:12px 0 18px 0;
  color: var(--muted);
  line-height:1.6;
  font-size:16px;
}

.cta-row{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin: 14px 0 18px;
}

.mini-stats{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
  margin-top: 10px;
}
.stat{
  background: var(--card);
  border:1px solid var(--border);
  border-radius:16px;
  padding:12px;
}
.stat-title{
  font-size:12px;
  color: rgba(247,244,255,.58);
}
.stat-value{
  margin-top:6px;
  font-weight:800;
}

.showcase{
  border-radius:20px;
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.05));
  border:1px solid rgba(255,255,255,.14);
  box-shadow: var(--shadow);
  overflow:hidden;
}
.showcase-header{
  padding:14px 14px 0 14px;
}
.pill{
  display:inline-block;
  font-size:12px;
  padding:8px 10px;
  border-radius:999px;
  background: rgba(255,79,163,.14);
  border:1px solid rgba(255,79,163,.22);
  color: rgba(247,244,255,.82);
}
.showcase-body{
  padding:14px;
}
.preview-title{
  margin:10px 0 6px 0;
  font-weight:900;
}
.preview-text{
  margin:0 0 12px 0;
  color: rgba(247,244,255,.72);
  line-height:1.6;
}
.preview-actions{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

.feature-grid{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
  margin-top:12px;
}
.feature{
  background: var(--card);
  border:1px solid var(--border);
  border-radius:16px;
  padding:12px;
}
.feature-icon{
  font-size:18px;
  opacity:.95;
}
.feature-title{
  margin-top:8px;
  font-weight:900;
}
.feature-text{
  margin-top:6px;
  color: rgba(247,244,255,.70);
  font-size:13px;
  line-height:1.5;
}

.panel{
  margin: 18px 0 26px;
  background: var(--card2);
  border:1px solid var(--border);
  border-radius:22px;
  overflow:hidden;
  box-shadow: var(--shadow);
}

.panel-head{
  padding:18px 18px 0 18px;
}
.panel-head h2{
  margin:0;
  font-size:22px;
}
.panel-head p{
  margin:8px 0 0 0;
  color: rgba(247,244,255,.66);
}

.panel-body{
  padding:18px;
}

.question-box{
  background: rgba(0,0,0,.18);
  border:1px solid rgba(255,255,255,.10);
  border-radius:18px;
  padding:16px;
  position:relative;
}

.question-box h3{
  margin:0 0 10px 0;
}

/* ✅ FIXED: No button stays inside this area and won't create extra scroll */
.buttons{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  position:relative;
  min-height: 56px;

  overflow:hidden;   /* prevents escape expanding the page */
  height:64px;       /* defines the play zone */
  align-items:center;
}

.hint{
  margin:10px 0 0 0;
  color: rgba(247,244,255,.60);
  font-size:14px;
}

.success{
  margin-top:14px;
}
.success-box{
  border-radius:18px;
  padding:16px;
  border:1px solid rgba(255,79,163,.22);
  background: rgba(255,79,163,.10);
}
.success-box h3{
  margin:0 0 6px 0;
}
.success-box p{
  margin:0;
  color: rgba(247,244,255,.86);
  line-height:1.5;
}
.tiny-actions{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:12px;
}

.footer{
  padding: 10px 0 34px;
}
.footer-inner{
  display:flex;
  gap:10px;
  align-items:center;
  justify-content:center;
  color: rgba(247,244,255,.58);
  font-size:13px;
}
.footer a{
  color: rgba(255,137,199,.92);
  text-decoration:none;
}
.footer a:hover{ text-decoration:underline; }
.dot{ opacity:.6; }

.hidden{ display:none; }

/* Buttons */
.btn{
  border:none;
  border-radius:14px;
  padding:12px 16px;
  font-weight:800;
  cursor:pointer;
  user-select:none;
  transition: transform .12s ease, filter .12s ease, background .12s ease;
}
.btn:hover{ filter: brightness(1.06); }
.btn:active{ transform: translateY(1px); }

.btn-sm{
  padding:10px 12px;
  border-radius:12px;
  font-size:14px;
  font-weight:800;
}

.btn-primary{
  background: linear-gradient(135deg, var(--pink), var(--pink2));
  color:#1a0920;
}

.btn-ghost{
  background: rgba(255,255,255,.06);
  color: rgba(255,255,255,.92);
  border:1px solid rgba(255,255,255,.16);
}

.icon-btn{
  border:none;
  background: rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.14);
  color: rgba(255,255,255,.92);
  width:38px;
  height:38px;
  border-radius:12px;
  cursor:pointer;
}

/* Modal */
.modal{
  position:fixed;
  inset:0;
  z-index:80;
  display:grid;
  place-items:center;
  padding:18px;
}
.modal-backdrop{
  position:absolute;
  inset:0;
  background: rgba(0,0,0,.55);
  backdrop-filter: blur(6px);
}
.modal-card{
  position:relative;
  width:min(760px, 100%);
  background: rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.14);
  border-radius:22px;
  box-shadow: var(--shadow);
  overflow:hidden;
}
.modal-head{
  display:flex;
  justify-content:space-between;
  gap:12px;
  align-items:flex-start;
  padding:16px 16px 0 16px;
}
.modal-head h3{
  margin:0;
}
.modal-sub{
  margin:6px 0 0 0;
  color: rgba(247,244,255,.62);
  font-size:13px;
}
.modal-body{
  padding:16px;
}

/* Letter UI */
.letter-closed{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding:14px;
  border-radius:18px;
  border:1px dashed rgba(255,255,255,.22);
  background: rgba(0,0,0,.12);
}
.seal{
  display:flex;
  gap:12px;
  align-items:center;
}
.seal-icon{
  width:46px;
  height:46px;
  border-radius:16px;
  display:grid;
  place-items:center;
  background: rgba(255,79,163,.14);
  border:1px solid rgba(255,79,163,.22);
  font-size:20px;
}
.seal-title{
  font-weight:900;
}
.seal-sub{
  margin-top:4px;
  color: rgba(247,244,255,.70);
  font-size:13px;
}

.letter-open{
  background: rgba(0,0,0,.12);
  border:1px solid rgba(255,255,255,.12);
  border-radius:18px;
  padding:14px;
}

.type-text{
  margin:0;
  color: rgba(247,244,255,.92);
  line-height:1.8;
  white-space: pre-wrap;
  min-height: 220px;
}

.type-text::after{
  content:"";
  display:inline-block;
  width:10px;
  height:18px;
  margin-left:6px;
  border-right:2px solid rgba(255,255,255,.75);
  transform: translateY(3px);
  animation: blink .8s steps(1) infinite;
}
@keyframes blink{ 50%{ opacity:0; } }

.signature{
  margin-top:12px;
  color: rgba(247,244,255,.70);
  font-weight:700;
}

/* Confetti canvas */
.confetti{
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:90;
}

/* ✅ Premium background layers */
body::before{
  content:"";
  position:fixed;
  inset:-120px;
  pointer-events:none;
  background:
    radial-gradient(500px 420px at 20% 25%, rgba(255,79,163,.18), transparent 65%),
    radial-gradient(520px 460px at 78% 20%, rgba(255,137,199,.14), transparent 68%),
    radial-gradient(520px 520px at 50% 85%, rgba(255,79,163,.10), transparent 70%);
  filter: blur(18px);
  opacity: .9;
  animation: drift 14s ease-in-out infinite alternate;
  z-index:-2;
}

body::after{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  background-image:
    repeating-radial-gradient(circle at 20% 30%, rgba(255,255,255,.035) 0 1px, transparent 1px 6px),
    repeating-radial-gradient(circle at 70% 60%, rgba(255,255,255,.02) 0 1px, transparent 1px 7px);
  opacity:.25;
  mix-blend-mode: overlay;
  z-index:-1;
}

@keyframes drift{
  0%   { transform: translate3d(-10px, -8px, 0) scale(1.02); }
  100% { transform: translate3d(12px, 10px, 0) scale(1.05); }
}

/* Mobile */
@media (max-width: 860px){
  .hero{
    grid-template-columns: 1fr;
  }
  .feature-grid{
    grid-template-columns: 1fr;
  }
  .mini-stats{
    grid-template-columns: 1fr;
  }
}

/* ✅ on phones give "No" more room to move (still contained) */
@media (max-width: 520px){
  .buttons{
    height: 120px;
  }
}