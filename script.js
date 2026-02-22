// Pequeno efeito de glitch nas manchetes
const titulos = document.querySelectorAll(".noticia h2");

setInterval(() => {
  titulos.forEach(t => {
    if (Math.random() < 0.1) {
      const original = t.textContent;
      t.textContent = "█".repeat(original.length);
      setTimeout(() => {
        t.textContent = original;
      }, 100);
    }
  });
}, 3000);
