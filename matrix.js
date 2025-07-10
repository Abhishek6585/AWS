const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "アァイィウヴエエカガキギクグケコサザシジスズセソタチッツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン".split("");
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // background fade
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff0000"; // matrix falling char color
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i] = (drops[i] * fontSize > canvas.height || Math.random() > 0.975) ? 0 : drops[i] + 1;
  }
}

setInterval(drawMatrix, 33);
