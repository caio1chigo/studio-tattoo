// ===== LOADER =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("saindo");
    loader.addEventListener(
      "transitionend",
      () => loader.remove(),
      { once: true }
    );
  }, 800);
});

// ===== MENU MOBILE =====
const menuBtn = document.getElementById("menu-btn");
const menuMobile = document.getElementById("menu-mobile");

if (menuBtn && menuMobile) {
  menuBtn.addEventListener("click", () => {
    const aberto = menuMobile.classList.toggle("aberto");
    menuBtn.setAttribute("aria-expanded", String(aberto));
  });

  // Fecha o menu ao clicar em qualquer link
  menuMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuMobile.classList.remove("aberto");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== FORMULÁRIO DE CONTATO (placeholder) =====
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = form.nome.value.trim();
    const whats = form.whats.value.trim();
    const msg = form.msg.value.trim();

    const texto = encodeURIComponent(
      `Olá! Meu nome é ${nome}.\n\n${msg}\n\nMeu WhatsApp: ${whats}`
    );

    // Troque o número abaixo pelo WhatsApp real do estúdio.
    window.open(`https://wa.me/5561900000000?text=${texto}`, "_blank");
  });
}