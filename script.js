document.addEventListener('DOMContentLoaded', function() {
  // Efeito Matrix Rain
  const container = document.querySelector('.matrix-rain');
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  
  canvas.style.position = 'absolute';
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  
  const ctx = canvas.getContext('2d');
  const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '0123456789';
  const alphabet = katakana + latin + nums;
  
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);
  
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  // Botão de interação
  const matrixBtn = document.getElementById('matrix-btn');
  
  matrixBtn.addEventListener('click', function() {
    // Efeito especial ao clicar
    container.style.height = '400px';
    canvas.height = 400;
    container.style.border = '2px solid #f00';
    container.style.boxShadow = '0 0 20px #f00';
    
    // Alerta personalizado
    setTimeout(() => {
      alert('⚠️ SISTEMA COMPROMETIDO ⚠️\nVocê ativou o protocolo Matrix!');
      container.style.height = '200px';
      canvas.height = 200;
      container.style.border = '1px solid lime';
      container.style.boxShadow = 'none';
    }, 1000);
  });
  
  // Inicia a animação
  setInterval(draw, 33);
  
  // Ajusta o canvas quando a janela é redimensionada
  window.addEventListener('resize', function() {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  });
});
