// Configuração do efeito Matrix no fundo
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * -100;
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#0f0';
  ctx.font = fontSize + 'px monospace';
  
  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Efeito do botão perigoso
document.getElementById('danger-btn').addEventListener('click', function() {
  // Efeito visual
  document.body.style.animation = 'glitch 0.5s infinite';
  this.style.backgroundColor = '#f00';
  this.style.color = '#fff';
  this.style.boxShadow = '0 0 30px #f00';
  this.textContent = 'SISTEMA COMPROMETIDO!';
  
  // Efeito sonoro (opcional - descomente se quiser)
  // const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
  // audio.play();
  
  // Mensagem de alerta
  setTimeout(() => {
    alert('⚠️ ALERTA DE VÍRUS DETECTADO! ⚠️\nO sistema pode ter sido comprometido.');
    
    // Restaura o botão após 3 segundos
    setTimeout(() => {
      this.style.backgroundColor = 'transparent';
      this.style.color = '#0f0';
      this.style.boxShadow = 'none';
      this.textContent = 'Não clique aqui';
      document.body.style.animation = 'none';
    }, 3000);
  }, 1000);
});

// Redimensionamento responsivo
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Inicia a animação
setInterval(drawMatrix, 33);
