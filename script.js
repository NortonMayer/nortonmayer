// ============== EFEITO MATRIX RAIN ==============
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

// Configuração do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caracteres para o efeito Matrix
const chars = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 18;
const columns = canvas.width / fontSize;

// Posição inicial das colunas
const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * -100);
}

// Função principal de animação
function drawMatrix() {
  // Fundo semi-transparente para criar rastro
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Cor e estilo do texto
  ctx.fillStyle = '#0f0';
  ctx.font = `${fontSize}px monospace`;
  
  // Desenha os caracteres
  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    // Reinicia a coluna no topo aleatoriamente
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// ============== INTERAÇÃO DO BOTÃO ==============
document.getElementById('matrix-btn').addEventListener('click', function() {
  // Ativa efeito glitch
  document.body.classList.add('glitch-effect');
  this.style.backgroundColor = '#f00';
  this.style.borderColor = '#f00';
  this.style.boxShadow = '0 0 30px #f00';
  this.textContent = 'SISTEMA COMPROMETIDO!';
  
  // Alerta após 1 segundo
  setTimeout(() => {
    alert('⚠️ VÍRUS DETECTADO! ⚠️\nSeu sistema está sendo invadido!');
  }, 1000);
  
  // Restaura após 3 segundos
  setTimeout(() => {
    document.body.classList.remove('glitch-effect');
    this.style.backgroundColor = 'transparent';
    this.style.borderColor = '#0f0';
    this.style.boxShadow = 'none';
    this.textContent = 'NÃO CLIQUE AQUI';
  }, 3000);
});

// ============== INICIALIZAÇÃO ==============
// Ajusta o canvas no redimensionamento
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Inicia a animação (33ms = ~30fps)
setInterval(drawMatrix, 33);
