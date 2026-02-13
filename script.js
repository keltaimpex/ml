// ====== Quick customization via URL params ======
const params = new URLSearchParams(location.search);
const to = params.get("to");
const from = params.get("from");

if (to) document.getElementById("name").textContent = to;
if (from) document.getElementById("fromName").textContent = from;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const success = document.getElementById("success");
const confettiBtn = document.getElementById("confettiBtn");
const copyBtn = document.getElementById("copyBtn");
const editLink = document.getElementById("editLink");
const card = document.querySelector(".card");

// ====== Sealed letter + typewriter effect ======
const openLetterBtn = document.getElementById("openLetterBtn");
const letterClosed = document.getElementById("letterClosed");
const letterOpen = document.getElementById("letterOpen");
const typeTarget = document.getElementById("typeTarget");

function buildLetter() {
  const herName = document.getElementById("name").textContent || "My Love";
  const myName = document.getElementById("fromName").textContent || "Kelvin";

  return `My Dearest ${herName},

Happy Valentine’s Day, my love.

I don’t think I say this enough, but loving you has been one of the greatest gifts of my life. From the moment you became part of my world, everything felt lighter, warmer, more meaningful. You have this quiet magic about you — the kind that turns ordinary days into something special just by being there.

When I think about you, I think about peace. I think about comfort. I think about the way my heart settles when I hear your voice. You are not just someone I love — you are someone I treasure. The way you smile, the way you laugh, the way you care… it all stays with me long after the moment passes.

${herName}, you are my safe place and my inspiration at the same time. You make me want to be better, to love deeper, to build something beautiful and lasting. With you, love doesn’t feel complicated — it feels right. It feels like home.

On this Valentine’s Day, I want you to know that I choose you. Not just for today, not just for the sweet moments, but for the real ones too. I choose your heart, your dreams, your flaws, your strength, your softness — all of you. And I will keep choosing you.

Thank you for being my joy, my calm, my answered prayer. My heart is yours, always.

With all my love,
${myName} ❤️`;
}

let typing = false;

function typeWriter(text, speed = 16) {
  typing = true;
  typeTarget.textContent = "";
  let i = 0;

  const timer = setInterval(() => {
    typeTarget.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      typing = false;
    }
  }, speed);
}

openLetterBtn.addEventListener("click", () => {
  if (typing) return;
  letterClosed.classList.add("hidden");
  letterOpen.classList.remove("hidden");
  typeWriter(buildLetter(), 16);
});


// ====== Improved "No" button dodge (inside card only) ======
function moveNoButtonInsideCard() {
  const cardRect = card.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const padding = 20;

  const maxX = cardRect.width - btnRect.width - padding;
  const maxY = cardRect.height - btnRect.height - padding;

  const randomX = Math.max(padding, Math.random() * maxX);
  const randomY = Math.max(padding, Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseenter", moveNoButtonInsideCard);
noBtn.addEventListener("click", moveNoButtonInsideCard);


// ====== Confetti ======
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
window.addEventListener("resize", resize);
resize();

function rand(min, max) { return Math.random() * (max - min) + min; }

function burstConfetti() {
  const pieces = Array.from({ length: 140 }, () => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 3,
    vx: rand(-6, 6),
    vy: rand(-10, -3),
    g: rand(0.18, 0.32),
    s: rand(3, 6),
    r: rand(0, Math.PI * 2),
    vr: rand(-0.2, 0.2),
    life: 0,
    ttl: rand(70, 120)
  }));

  let frame = 0;
  function tick() {
    frame++;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    pieces.forEach(p => {
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.g;
      p.r += p.vr;

      const hue = (p.life * 3 + p.x) % 360;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = `hsl(${hue}, 90%, 65%)`;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s);
      ctx.restore();
    });

    if (frame < 140 && pieces.some(p => p.life < p.ttl)) {
      requestAnimationFrame(tick);
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }
  requestAnimationFrame(tick);
}

yesBtn.addEventListener("click", () => {
  success.classList.remove("hidden");
  burstConfetti();

  // Reset No button
  noBtn.style.position = "";
  noBtn.style.left = "";
  noBtn.style.top = "";
});

confettiBtn.addEventListener("click", burstConfetti);


// ====== Simple name customizer ======
editLink.addEventListener("click", (e) => {
  e.preventDefault();

  const currentTo = document.getElementById("name").textContent;
  const currentFrom = document.getElementById("fromName").textContent;

  const newTo = prompt("Her name (To):", currentTo) ?? currentTo;
  const newFrom = prompt("Your name (From):", currentFrom) ?? currentFrom;

  document.getElementById("name").textContent = newTo;
  document.getElementById("fromName").textContent = newFrom;

  const url = new URL(location.href);
  url.searchParams.set("to", newTo);
  url.searchParams.set("from", newFrom);
  history.replaceState({}, "", url);
});
