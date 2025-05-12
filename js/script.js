// Animação de entrada do mouse da Linha esquerda direita
const listItems = document.querySelectorAll('nav li');

listItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const bounding = item.getBoundingClientRect();
        const mouseX = e.clientX;
        const midPoint = bounding.left + bounding.width / 2;

        if (mouseX < midPoint) {
            item.classList.add('hover-left');
            item.classList.remove('hover-right');
        } else {
            item.classList.add('hover-right');
            item.classList.remove('hover-left');
        }
    });

    item.addEventListener('mouseleave', (e) => {
        const bounding = item.getBoundingClientRect();
        const mouseX = e.clientX;
        const midPoint = bounding.left + bounding.width / 2;

        // Detecta se o mouse saiu pela esquerda ou direita
        if (mouseX < midPoint) {
            item.classList.add('leave-left');
            item.classList.remove('leave-right');
        } else {
            item.classList.add('leave-right');
            item.classList.remove('leave-left');
        }

        // Atraso para a animação de saída funcionar corretamente
        setTimeout(() => {
            item.classList.remove('hover-left');
            item.classList.remove('hover-right');
            item.classList.remove('leave-left');
            item.classList.remove('leave-right');
        }, 400); // Tempo suficiente para a animação de saída
    });
});

// Header ficar ativo quando passo emcima
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Menu
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menuMobile");
    const menuOverlay = document.querySelector(".menu-overlay");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenuButton = document.querySelector(".close-menu");

    // Quando clica no botão do menu
    menuButton.addEventListener("click", function() {
        document.body.classList.add("menu-active");
    });

    // Quando clica no botão de fechar
    closeMenuButton.addEventListener("click", function() {
        document.body.classList.remove("menu-active");
    });

    // Quando clica na sobreposição (overlay)
    menuOverlay.addEventListener("click", function() {
        document.body.classList.remove("menu-active");
    });
});

//Timer Slide
const swiperEl = document.querySelector('.mySwiper');
const progressCircle = document.querySelector('.autoplay-progress svg');
const progressContent = document.querySelector('.autoplay-progress span');

swiperEl.addEventListener('autoplayTimeLeft', (e) => {
    const [swiper, time, progress] = e.detail;
    progressCircle.style.setProperty('--progress', 1 - progress);
    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
});


// Script Hover animations codes
document.querySelectorAll('.tech-item').forEach(item => {
    const codeText = item.getAttribute('data-code');
    const tooltip = item.querySelector('.tooltip code');
    let idx = 0;
    let forward = true;
    let pause = false;

    function type() {
        const visible = item.matches(':hover');
        if (!visible) {
            tooltip.textContent = '';
            idx = 0;
            forward = true;
            pause = false;
            return;
        }

        if (pause) {
            setTimeout(type, 500); // Pausa menor só pra aguardar fim do timeout anterior
            return;
        }

        if (forward) {
            tooltip.textContent = codeText.slice(0, idx + 1);
            idx++;
            if (idx === codeText.length) {
                forward = false;
                pause = true;
                setTimeout(() => {
                    pause = false;
                    type(); // Recomeça após pausa
                }, 1500); // <<< Pausa depois que terminou de escrever
                return;
            }
        } else {
            tooltip.textContent = codeText.slice(0, idx - 1);
            idx--;
            if (idx === 0) forward = true;
        }

        setTimeout(type, 100);
    }

    item.addEventListener('mouseenter', () => {
        type();
    });

    item.addEventListener('mouseleave', () => {
        tooltip.textContent = '';
        idx = 0;
        forward = true;
        pause = false;
    });
});


// Movimento do Mouse hover BTN
const buttons = document.querySelectorAll('.button-follow');

buttons.forEach(button => {
  const ball = button.querySelector('.ball');

  button.addEventListener('mousemove', e => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
    ball.style.opacity = 1;
    ball.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  button.addEventListener('mouseleave', () => {
    ball.style.opacity = 0;
    ball.style.transform = 'translate(-50%, -50%) scale(0)';
  });
});


// BrandMovimentRedondo
document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.brandAnos');
    if (!el) return;

    let lastScrollY = window.scrollY;
    let angle = 0;             
    const factor = 0.2;        

    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;      

        angle += delta * factor;                   

        el.style.transform = `rotate(${angle}deg)`;
        lastScrollY = currentY;
    });
});

// Funcionar Mini Brand Home Receita
const valores = {
    Dia: "R$4.820,00",
    Mês: "R$15.730,00",
    Ano: "R$182.500,00"
};

document.querySelectorAll('.card-content .texts ul li').forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe active de todos
        document.querySelectorAll('.card-content .texts ul li').forEach(li => li.classList.remove('active'));
        
        // Adiciona active no item clicado
        item.classList.add('active');

        // Atualiza o valor da receita
        const tipo = item.textContent.trim(); // Dia, Mês ou Ano
        document.getElementById('valorReceita').textContent = valores[tipo];
    });
});

  
// Simula progresso de carregamento
let carga = 75;
setInterval(() => {
  carga = (carga + 5) % 105;
  document.getElementById('valorCarga').textContent = `${carga}%`;
}, 1000);

// Troca de valores de visitas
const visitas = {
  Dia: 342,
  Mês: 2645,
  Ano: 28934
};
document.querySelectorAll('.cardVisits ul li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.cardVisits ul li').forEach(li => li.classList.remove('active'));
    item.classList.add('active');
    document.getElementById('valorVisitas').textContent = visitas[item.textContent.trim()];
  });
});


// Quando a animação da barra terminar, trocamos o texto e o ícone
const progressBar = document.querySelector('.cardTimer .progress-bar');
const statusEl    = document.getElementById('statusCarga');
const reloadBtn   = document.getElementById('reloadBtn');

// Possíveis durações (em segundos)
const possibleDurations = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];

// Função que inicia a animação e status
function startLoad() {
  // 1. Escolhe duração aleatória
  const duration = possibleDurations[
    Math.floor(Math.random() * possibleDurations.length)
  ];

  // 2. Reseta a animação CSS
  progressBar.style.animation = 'none';
  void progressBar.offsetWidth; // força reflow

  // 3. Aplica animação com a duração escolhida
  progressBar.style.animation = `loadAnim ${duration}s linear forwards`;

  // 4. Configura o intervalo para atualizar porcentagem
  const startTime = performance.now();
  const updateInterval = 50; // ms
  const timerId = setInterval(() => {
    const elapsed = (performance.now() - startTime) / 1000; // em segundos
    let percent = Math.floor((elapsed / duration) * 100);
    if (percent > 100) percent = 100;
    statusEl.innerHTML = `
      <i class="fa-solid fa-spinner fa-spin"></i>
      Carregando... ${percent}%
    `;
    if (percent >= 100) {
      clearInterval(timerId);
    }
  }, updateInterval);

  // 5. Quando a animação terminar, limpa intervalo e mostra tempo
  progressBar.addEventListener('animationend', function onEnd() {
    clearInterval(timerId);
    statusEl.innerHTML = `
      <i class="fa-solid fa-check"></i>
      Carregado em ${duration.toFixed(1)}s
    `;
    // para não acumular múltiplos listeners…
    progressBar.removeEventListener('animationend', onEnd);
  });
}

// Botão de recarregar
reloadBtn.addEventListener('click', startLoad);

// Inicia no load da página
startLoad();


// Swiper BreakPOnts
const swiper = document.getElementById('meuSwiper');
      
// Adiciona breakpoints diretamente
swiper.breakpoints = {
    0: {
    slidesPerView: 1,
    },
    640: {
    slidesPerView: 2,
    },
    1024: {
    slidesPerView: 3,
    }
};

AOS.init({
    once: true,
    disable: function () {
    return window.innerWidth < 768; // desativa em celulares
    },
});