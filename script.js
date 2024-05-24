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

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      // Fecha todos os accordions
      accordions.forEach((item) => {
        if (item !== accordion) {
          item.classList.remove("active");
          item.querySelector(".accordion-content").style.display = "none";
        }
      });

      // Alterna o estado do accordion clicado
      const content = accordion.querySelector(".accordion-content");
      if (accordion.classList.contains("active")) {
        accordion.classList.remove("active");
        content.style.display = "none";
      } else {
        accordion.classList.add("active");
        content.style.display = "block";
      }
    });
  });
});
