function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

const form = document.querySelector(".formulario-fale-conosco");
const background = document.querySelector(".mascara-formulario");

function showForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  background.style.visibility = "visible";
}

function hideForm() {
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
  background.style.visibility = "hidden";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const duvida = document.getElementById("duvida").value;

  const mensagem = `Olá, meu nome é ${nome}. Meu telefone é ${telefone} Minha dúvida é: ${duvida}.`;
  const mensagemCodificada = encodeURIComponent(mensagem);
  const whatsappLink = `https://wa.me/5548991056014?text=${mensagemCodificada}`;

  document.getElementById("whatsappLink").href = whatsappLink;

  window.open(whatsappLink, "_blank");
});
