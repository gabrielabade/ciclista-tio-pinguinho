// Toggle Menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// Form Handling
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

  const mensagem = `Olá, venho através do seu site. Meu nome é ${nome}. Meu telefone é ${telefone}. Gostaria de saber sobre ${duvida}.`;
  const mensagemCodificada = encodeURIComponent(mensagem);
  const whatsappLink = `https://wa.me/5551998393149?text=${mensagemCodificada}`;

  document.getElementById("whatsappLink").href = whatsappLink;
  window.open(whatsappLink, "_blank");
});
//accordions session sobre
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

document.addEventListener("DOMContentLoaded", function () {
  // Carousel Functionality
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
        pretaVermelha: "./assets/bicicleta1-vermelha.png",
        pretaAmarela: "./assets/bicicleta1-pretaAmarela.png",
        pretaAzul: "./assets/bicicleta1-pretaAzul.png",
        pretaChumbo: "./assets/bicicleta1-pretaChumbo.png",
        pretaLaranja: "./assets/bicicleta1-pretaLaranja.png",
        pretaRosa: "./assets/bicicleta1-pretaRosa.png",
        pretaVerde: "./assets/bicicleta1-pretaVerde.png",
        azul: "./assets/bicicleta1-azul.png",
        branca: "./assets/bicicleta1-branca.png",
        chumbo: "./assets/bicicleta1-chumbo.png",
        laranja: "./assets/bicicleta1-laranja.png",
        rosa: "./assets/bicicleta1-rosa.png",
        verdeClaro: "./assets/bicicleta1-verdeClaro.png",
        verde: "./assets/bicicleta1-verde.png",
        laranjaNeon: "./assets/bicicleta1-laranjaNeon.png",
      },
      whatsappLink:
        "https://api.whatsapp.com/send?phone=5551998393149&text=Olá+,+venho+através+do+seu+site+.+Tenho+interesse+em+saber+sobre+bicicleta+Slim+da+South+.+Quanto+custa+?",
    },
    {
      modelo: "Bicicleta Voltz 2023",
      descricao:
        "A South Voltz 2023 une estilo e desempenho, equipada com componentes Shimano de alta qualidade, garantindo uma pedalada suave e confiável para entusiastas apaixonados por ciclismo.",
      cores: {
        pretaVermelha: "./assets/bicicleta2-pretaVermelha.png",
        pretaAmarela: "./assets/bicicleta2-pretaAmarela.png",
        pretaAzul: "./assets/bicicleta2-pretaAzul.png",
        pretaChumbo: "./assets/bicicleta2-pretaChumbo.png",
        pretaLaranja: "./assets/bicicleta2-pretaLaranja.png",
        pretaRosa: "./assets/bicicleta2-pretaRosa.png",
        pretaVerde: "./assets/bicicleta2-pretaVerde.png",
        azul: "./assets/bicicleta2-azul.png",
        branca: "./assets/bicicleta2-branca.png",
        chumbo: "./assets/bicicleta2-chumbo.png",
        laranja: "./assets/bicicleta2-laranja.png",
        rosa: "./assets/bicicleta2-rosa.png",
        verdeClaro: "./assets/bicicleta2-verdeClaro.png",
        verde: "./assets/bicicleta2-verde.png",
        laranjaNeon: "./assets/bicicleta2-laranjaNeon.png",
      },
      whatsappLink:
        "https://api.whatsapp.com/send?phone=5551998393149&text=Olá+,+venho+atraves+do+seu+site+.+Tenho+interesse+em+saber+sobre+bicicleta+Voltz+da+South+.+Quanto+custa+?",
    },
    {
      modelo: "Bicicleta Legend 2023",
      descricao:
        "A South Legend 2023 é a escolha definitiva para entusiastas do MTB. Com um quadro resistente, suspensão dianteira e câmbios Shimano, oferece desempenho superior em trilhas desafiadoras.",
      cores: {
        pretaVermelha: "./assets/bicicleta3-pretVermelha.png",
        pretaAmarela: "./assets/bicicleta3-pretaAmarela.png",
        pretaAzul: "./assets/bicicleta3-pretaAzul.png",
        pretaChumbo: "./assets/bicicleta3-pretaChumbo.png",
        pretaLaranja: "./assets/bicicleta3-pretaLaranja.png",
        pretaRosa: "./assets/bicicleta3-pretaRosa.png",
        pretaVerde: "./assets/bicicleta3-pretaVerde.png",
        azul: "./assets/bicicleta3-azul.png",
        branca: "./assets/bicicleta3-branca.png",

        laranja: "./assets/bicicleta3-laranja.png",
        rosa: "./assets/bicicleta3-rosa.png",
        verdeClaro: "./assets/bicicleta3-verdeClaro.png",
        verde: "./assets/bicicleta3-verde.png",
        laranjaNeon: "./assets/bicicleta3-laranjaNeon.png",
      },
      whatsappLink:
        "https://api.whatsapp.com/send?phone=5551998393149&text=Olá+,+venho+através+do+seu+site+.+Tenho+interesse+em+saber+sobre+bicicleta+Legend+da+South+,+Quanto+custa+?",
    },
  ];

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    whatsappButton.href = bicycles[currentIndex].whatsappLink;

    // Atualiza a imagem com base na cor selecionada
    const currentBike = bicycles[currentIndex];
    const colorOptions = document
      .querySelectorAll(".carousel-item")[currentIndex].querySelectorAll(".color-circle");

    colorOptions.forEach((colorOption) => {
      colorOption.addEventListener("click", (event) => {
        const color = event.target.dataset.color;
        const bicycleImage =
          document.querySelectorAll(".bike-img")[currentIndex];
        bicycleImage.src = currentBike.cores[color];

        // Remove a classe 'selected' de todas as opções de cor
        colorOptions.forEach((option) => option.classList.remove("selected"));

        // Adiciona a classe 'selected' à opção de cor clicada
        event.target.classList.add("selected");
      });
    });
  }

  nextButton.addEventListener("click", () => {
    if (currentIndex < bicycles.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Volta para o primeiro item
    }
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = bicycles.length - 1; // Vai para o último item
    }
    updateCarousel();
  });

  // Inicializa o carrossel na primeira execução
  updateCarousel();
});
