// Definição das bicicletas
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

// Inicialização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
  // Elementos do menu
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // Elementos do formulário
  const form = document.querySelector(".formulario-fale-conosco");
  const background = document.querySelector(".mascara-formulario");
  const ctaButton = document.querySelector(".main-cta");
  const contactLink = document.querySelector("a.nav-item.highlight");
  const fecharFormBtn = document.querySelector(".fechar-form");

  // Elementos do acordeão
  const accordions = document.querySelectorAll(".accordion");

  // ===== MENU TOGGLE =====
  if (menuIcon) {
    menuIcon.addEventListener("click", toggleMenu);
  }

  function toggleMenu() {
    navLinks.classList.toggle("show");
    menuIcon.classList.toggle("open");
    body.classList.toggle("menu-open");
  }

  // Fechar menu ao clicar em links
  if (navLinks) {
    const menuLinks = navLinks.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuIcon.classList.remove("open");
        body.classList.remove("menu-open");
      });
    });
  }

  // Fechar menu ao clicar fora
  document.addEventListener("click", function (event) {
    if (navLinks && navLinks.classList.contains("show") &&
      !event.target.closest(".nav-links") &&
      !event.target.closest(".menu-icon")) {
      navLinks.classList.remove("show");
      menuIcon.classList.remove("open");
      body.classList.remove("menu-open");
    }
  });

  // ===== FORMULÁRIO =====
  // Função para mostrar o formulário
  window.showForm = function () {
    if (form && background) {
      form.style.opacity = "1";
      form.style.visibility = "visible";
      form.style.transform = "translate(-50%, -50%) scale(1)";

      background.style.visibility = "visible";
      background.style.opacity = "1";

      body.classList.add("form-open");

      // Foca no primeiro campo
      setTimeout(() => {
        const nomeInput = document.getElementById("nome");
        if (nomeInput) nomeInput.focus();
      }, 300);
    }
  };

  // Função para esconder o formulário
  window.hideForm = function () {
    if (form && background) {
      form.style.opacity = "0";
      form.style.visibility = "hidden";
      form.style.transform = "translate(-50%, -50%) scale(0.9)";

      background.style.visibility = "hidden";
      background.style.opacity = "0";

      body.classList.remove("form-open");
    }
  };

  // Adicionar event listeners para o formulário
  if (ctaButton) {
    ctaButton.addEventListener("click", window.showForm);
  }

  if (contactLink) {
    contactLink.addEventListener("click", function (e) {
      e.preventDefault();
      window.showForm();
    });
  }

  if (fecharFormBtn) {
    fecharFormBtn.addEventListener("click", window.hideForm);
  }

  if (background) {
    background.addEventListener("click", window.hideForm);
  }

  // Fechar com ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && form && form.style.visibility === "visible") {
      window.hideForm();
    }
  });

  // Submit do formulário
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const duvida = document.getElementById("duvida").value.trim();

      // Validação básica
      if (nome.length < 2) {
        alert("Por favor, informe seu nome completo");
        document.getElementById("nome").focus();
        return;
      }

      if (telefone.length < 8) {
        alert("Por favor, informe um telefone válido");
        document.getElementById("telefone").focus();
        return;
      }

      if (duvida.length < 5) {
        alert("Por favor, detalhe melhor sua dúvida ou pedido");
        document.getElementById("duvida").focus();
        return;
      }

      // Preparar mensagem para WhatsApp
      const mensagem = `Olá, venho através do seu site. Meu nome é ${nome}. Meu telefone é ${telefone}. Gostaria de saber sobre ${duvida}.`;
      const mensagemCodificada = encodeURIComponent(mensagem);
      const whatsappLink = `https://wa.me/5551998393149?text=${mensagemCodificada}`;

      // Feedback visual
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitBtn.disabled = true;

      // Simula um pequeno delay para feedback
      setTimeout(() => {
        const whatsappElement = document.getElementById("whatsappLink");
        if (whatsappElement) {
          whatsappElement.href = whatsappLink;
        }
        window.open(whatsappLink, "_blank");

        // Reset form
        form.reset();
        window.hideForm();

        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 800);
    });
  }

  // ===== CARROSSEL =====
  // Implementação atualizada do carrossel
  function inicializarCarrossel() {
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.getElementById("carouselPrev");
    const nextButton = document.getElementById("carouselNext");
    const whatsappButton = document.getElementById("whatsappButton");

    if (!carousel || carouselItems.length === 0) return;

    console.log("Inicializando carrossel com", carouselItems.length, "itens");

    // Configurar variáveis
    let currentIndex = 0;

    // Função para atualizar a posição do carrossel
    function updateCarouselPosition(index) {
      // Atualizar o índice atual
      currentIndex = index;

      // Certificar-se de que o índice está dentro dos limites
      if (currentIndex < 0) currentIndex = carouselItems.length - 1;
      if (currentIndex >= carouselItems.length) currentIndex = 0;

      console.log("Movendo carrossel para índice:", currentIndex);

      // Rolar para o item específico usando scrollIntoView
      carouselItems[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });

      // Atualizar o link do WhatsApp
      if (whatsappButton && bicycles && bicycles[currentIndex]) {
        whatsappButton.href = bicycles[currentIndex].whatsappLink;
      }

      // Destacar o item atual
      carouselItems.forEach((item, idx) => {
        if (idx === currentIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    // Configurar botões de navegação
    if (prevButton) {
      prevButton.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Botão anterior clicado");
        updateCarouselPosition(currentIndex - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Botão próximo clicado");
        updateCarouselPosition(currentIndex + 1);
      });
    }

    // Adicionar detector de scroll para atualizar o índice atual
    carousel.addEventListener('scroll', function () {
      // Debounce para melhorar performance
      clearTimeout(carousel.scrollTimer);
      carousel.scrollTimer = setTimeout(() => {
        // Encontrar qual item está mais visível na visualização
        const scrollLeft = carousel.scrollLeft;
        const itemWidth = carousel.clientWidth;

        // Calcular o índice aproximado do item mais visível
        const approximateIndex = Math.round(scrollLeft / itemWidth);

        // Atualizar o índice atual apenas se for diferente
        if (approximateIndex !== currentIndex) {
          currentIndex = approximateIndex;

          // Atualizar o link do WhatsApp e destaques, mas sem rolar
          if (whatsappButton && bicycles && bicycles[currentIndex]) {
            whatsappButton.href = bicycles[currentIndex].whatsappLink;
          }

          carouselItems.forEach((item, idx) => {
            if (idx === currentIndex) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });
        }
      }, 100);
    });

    // Configurar seletores de cores
    carouselItems.forEach((item, itemIndex) => {
      const colorOptions = item.querySelectorAll(".color-circle");
      const bicycleImage = item.querySelector(".bike-img");

      if (colorOptions.length > 0 && bicycleImage) {
        colorOptions.forEach((colorOption) => {
          colorOption.addEventListener("click", function () {
            const color = this.dataset.color;

            if (bicycles && bicycles[itemIndex] && bicycles[itemIndex].cores && bicycles[itemIndex].cores[color]) {
              console.log(`Cor selecionada: ${color} para bicicleta ${itemIndex}`);
              bicycleImage.src = bicycles[itemIndex].cores[color];

              // Remover a classe selected de todas as opções
              colorOptions.forEach(opt => opt.classList.remove("selected"));

              // Adicionar a classe selected à opção atual
              this.classList.add("selected");
            }
          });
        });
      }
    });

    // Inicializar o carrossel
    updateCarouselPosition(0);

    // Adicionar funcionalidade de arrastar
    let isDragging = false;
    let startPosition = 0;
    let startScrollLeft = 0;

    carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
      carousel.classList.add('dragging');
      startPosition = e.pageX;
      startScrollLeft = carousel.scrollLeft;
      e.preventDefault(); // Prevenir seleção de texto
    });

    carousel.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const x = e.pageX;
      const distance = x - startPosition;
      carousel.scrollLeft = startScrollLeft - distance;
    });

    // Lidar com o fim do arrasto
    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      carousel.classList.remove('dragging');

      // Ajustar para o slide mais próximo
      const itemWidth = carousel.clientWidth;
      const approximateIndex = Math.round(carousel.scrollLeft / itemWidth);
      updateCarouselPosition(approximateIndex);
    };

    carousel.addEventListener('mouseup', endDrag);
    carousel.addEventListener('mouseleave', endDrag);

    // Adicionar suporte para touch em dispositivos móveis
    carousel.addEventListener('touchstart', (e) => {
      isDragging = true;
      startPosition = e.touches[0].pageX;
      startScrollLeft = carousel.scrollLeft;
    }, { passive: true });

    carousel.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX;
      const distance = x - startPosition;
      carousel.scrollLeft = startScrollLeft - distance;
    }, { passive: true });

    carousel.addEventListener('touchend', endDrag);
  }

  // ===== ACORDEÃO =====
  if (accordions.length > 0) {
    // Inicializa o primeiro acordeão como aberto (opcional)
    if (accordions[0]) {
      accordions[0].classList.add("active");
      const firstContent = accordions[0].querySelector(".accordion-content");
      if (firstContent) {
        firstContent.style.padding = "1.5rem";
        firstContent.style.maxHeight = firstContent.scrollHeight + "px";
      }
    }

    accordions.forEach(accordion => {
      const header = accordion.querySelector(".accordion-header");
      if (!header) return;

      header.addEventListener("click", function () {
        const isActive = accordion.classList.contains("active");

        // Fecha todos os acordeões
        accordions.forEach(item => {
          const content = item.querySelector(".accordion-content");
          if (content && item !== accordion) {
            item.classList.remove("active");
            content.style.padding = "0";
            content.style.maxHeight = "0";
          }
        });

        // Alterna o estado do acordeão clicado
        const content = accordion.querySelector(".accordion-content");
        if (!content) return;

        if (isActive) {
          accordion.classList.remove("active");
          content.style.padding = "0";
          content.style.maxHeight = "0";
        } else {
          accordion.classList.add("active");
          content.style.padding = "1.5rem";
          content.style.maxHeight = content.scrollHeight + "px";

          // Anima o efeito de scroll para o acordeão aberto (opcional)
          setTimeout(() => {
            const offsetTop = accordion.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }, 300);
        }
      });
    });
  }

  // Inicialização - garantir que o formulário esteja escondido no começo
  if (form && background) {
    form.style.opacity = "0";
    form.style.visibility = "hidden";
    form.style.transform = "translate(-50%, -50%) scale(0.9)";

    background.style.visibility = "hidden";
    background.style.opacity = "0";
  }

  // Inicializar o carrossel
  inicializarCarrossel();
});