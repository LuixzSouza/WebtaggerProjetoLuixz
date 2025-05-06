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
