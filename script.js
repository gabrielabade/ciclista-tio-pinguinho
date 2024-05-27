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
//* CATALOGO*/document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.getElementById("carouselPrev");
    const nextButton = document.getElementById("carouselNext");
    const whatsappButton = document.getElementById("whatsappButton");
    let currentIndex = 0;

    const bicycles = [
      {
        modelo: "Bicicleta Slim 2023",
        descricao:
          "A South Slim 2023 combina estilo minimalista, desempenho eficiente e durabilidade em uma bicicleta leve. Com componentes de qualidade, oferece ótimo custo-benefício, perfeita para ciclistas que valorizam economia sem abrir mão da qualidade.",
        cores: {
          vermelha: "./assets/bicicleta1-vermelha.png",
          azul: "./assets/bicicleta1-azul.png",
          branca: "./assets/bicicleta1-branca.png",
        },
        whatsappLink:
          "https://api.whatsapp.com/send?text=Gostaria+de+saber+sobre+bicicleta+modelo+1+quanto+custa",
      },
      {
        modelo: "Bicicleta Voltz 2023<",
        descricao:
          "A South Voltz 2023 une estilo e desempenho, equipada com componentes Shimano de alta qualidade, garantindo uma pedalada suave e confiável para entusiastas apaixonados por ciclismo.",
        cores: {
          preta: "./assets/bicicleta2-preta.png",
          branca: "./assets/bicicleta2-branca.png",
        },
        whatsappLink:
          "https://api.whatsapp.com/send?text=Gostaria+de+saber+sobre+bicicleta+modelo+2+quanto+custa",
      },
      {
        modelo: "Bicicleta Legend 2023<",
        descricao:
          "A South Legend 2023 é a escolha definitiva para entusiastas do MTB. Com um quadro resistente, suspensão dianteira e câmbios Shimano, oferece desempenho superior em trilhas desafiadoras.",
        cores: {
          branca: "./assets/bicicleta3-branca.png",
        },
        whatsappLink:
          "https://api.whatsapp.com/send?text=Gostaria+de+saber+sobre+bicicleta+modelo+3+quanto+custa",
      },
    ];

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      whatsappButton.href = bicycles[currentIndex].whatsappLink;
    }

    function updateBikeImage(bikeIndex, color) {
      const bikeImg = carousel.children[bikeIndex].querySelector(".bike-img");
      bikeImg.src = bicycles[bikeIndex].cores[color];
    }

    // Initialize
    updateCarousel();

    // Support touch events for mobile devices
    let startX, endX;
    carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) {
        // Swiped left, go to next slide
        currentIndex = (currentIndex + 1) % bicycles.length;
      } else if (endX - startX > 50) {
        // Swiped right, go to previous slide
        currentIndex = (currentIndex - 1 + bicycles.length) % bicycles.length;
      }
      updateCarousel();
    });

    // Add event listeners for arrow buttons
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + bicycles.length) % bicycles.length;
      updateCarousel();
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % bicycles.length;
      updateCarousel();
    });

    whatsappButton.addEventListener("click", () => {
      window.open(whatsappButton.href, "_blank");
    });

    // Add event listeners for color options
    document.querySelectorAll(".color-circle").forEach((circle) => {
      circle.addEventListener("click", (e) => {
        const color = e.target.getAttribute("data-color");
        const bikeIndex = Array.from(carousel.children).indexOf(
          e.target.closest(".carousel-item")
        );

        // Remove 'selected' class from all circles in the current item
        const circles = e.target
          .closest(".color-options")
          .querySelectorAll(".color-circle");
        circles.forEach((c) => c.classList.remove("selected"));
        // Add 'selected' class to the clicked circle
        e.target.classList.add("selected");

        updateBikeImage(bikeIndex, color);
      });
    });
    // Adiciona evento de clique para a seta anterior
    prevButton.addEventListener("click", (event) => {
      event.preventDefault(); // Previne o comportamento padrão do clique (rolagem)
      currentIndex = (currentIndex - 1 + bicycles.length) % bicycles.length;
      updateCarousel();
    });

    // Adiciona evento de clique para a seta seguinte
    nextButton.addEventListener("click", (event) => {
      event.preventDefault(); // Previne o comportamento padrão do clique (rolagem)
      currentIndex = (currentIndex + 1) % bicycles.length;
      updateCarousel();
    });
  });
