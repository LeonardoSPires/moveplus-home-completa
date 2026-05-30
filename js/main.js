
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Orçamento enviado com sucesso!');
        });
    }

    // Funcionalidade de link ativo na navegação usando event delegation
    const headerNav = document.querySelector('.header-nav');
    if (headerNav) {
        headerNav.addEventListener('click', function (e) {
            const link = e.target.closest('.nav-link');
            if (link) {
                e.preventDefault();

                // Remove a classe active de todos os links
                document.querySelectorAll('.header-nav .nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });

                // Adiciona a classe active ao link clicado
                link.classList.add('active');
            }
        });
    }

    // Efeito de ondulação de cores no h1 do hero
    const heroH1 = document.querySelector('.hero-container h1');
    if (heroH1) {
        // Preservar o HTML original com os <br>
        const originalHTML = heroH1.innerHTML;
        let letterIndex = 0;

        // Processar o HTML mantendo os <br>
        const parts = originalHTML.split('<br>');

const newHTML = parts.map(part => {
    return part.split('').map(char => {
        if (char === ' ') return char;

        const span = `<span class="wave-letter" style="animation-delay:${letterIndex * 0.1}s">${char}</span>`;
        letterIndex++;
        return span;
            }).join('');
        }).join('<br>');

        heroH1.innerHTML = newHTML;
    }
});
