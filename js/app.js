/**
 * Convite de Aniversário - Isabella 19 Anos
 * Lógica de comportamento do site (Scroll Reveal e Ícones)
 */

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa os ícones do Lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
  setupScrollReveal();
  setupSmoothScroll();
});

/**
 * Cria a animação de revelação ao rolar a página (Scroll Reveal)
 * Utiliza Intersection Observer para máxima performance
 */
function setupScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  
  if (!("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("active"));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => {
    observer.observe(el);
  });
}

/**
 * Lida com o scroll suave ao clicar em links âncoras locais
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}
