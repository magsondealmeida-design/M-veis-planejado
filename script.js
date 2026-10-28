const WHATSAPP_NUMBER = "5565996852876";
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  menuToggle.textContent = open ? "×" : "☰";
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
  if (menuToggle) { menuToggle.textContent = "☰"; menuToggle.setAttribute("aria-label", "Abrir menu"); }
}));
document.querySelectorAll("[data-space]").forEach(link => link.addEventListener("click", () => {
  const select = document.querySelector("#space");
  const requested = link.dataset.space;
  const option = [...(select?.options || [])].find(item => item.text.toLowerCase() === requested.toLowerCase());
  if (option) select.value = option.value;
}));
document.querySelector("#quoteForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const space = String(form.get("space") || "").trim();
  const city = String(form.get("city") || "").trim();
  const details = String(form.get("details") || "").trim();
  const message = ["Olá! Vim pelo site da Agape Móveis Planejados e gostaria de solicitar um orçamento.", "", `Nome: ${name}`, `Ambiente: ${space}`, `Cidade: ${city}`, details ? `Detalhes do projeto: ${details}` : ""].filter(Boolean).join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
document.querySelector("#year").textContent = new Date().getFullYear();