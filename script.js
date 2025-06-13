const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Tamanho do canvas
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Caracteres
const letters = "アァイィウヴエェオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chars = letters.split("");

// Fonte
const fontSize = 16;
const columns = canvas.width / fontSize;

// Posição Y de cada coluna
const drops = Array(Math.floor(columns)).fill(1);

// Função de desenho
function drawMatrix() {
  // Fundo preto com leve transparência (efeito de rastro)
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // Verde Matrix
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    // Reinicia aleatoriamente no topo
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 33);
