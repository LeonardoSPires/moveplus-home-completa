
// Carregar seções HTML dinamicamente
async function loadSections() {
    const sections = [
        { id: 'header-container', file: 'sections/header.html' },
        { id: 'hero-container', file: 'sections/hero.html' },
        { id: 'advantages-container', file: 'sections/advantages.html' },
        { id: 'services-container', file: 'sections/services.html' },
        { id: 'about-container', file: 'sections/about.html' },
        { id: 'testimonials-container', file: 'sections/testimonials.html' },
        { id: 'footer-container', file: 'sections/footer.html' }
    ];

    for (const section of sections) {
        try {
            const response = await fetch(section.file);
            if (response.ok) {
                const html = await response.text();
                document.getElementById(section.id).innerHTML = html;
            }
        } catch (error) {
            console.error(`Erro ao carregar ${section.file}:`, error);
        }
    }

    // Executar scripts após carregar as seções
    initializeScripts();
}

// Inicializar funcionalidades após carregar as seções
function initializeScripts() {
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
}

// Carregar as seções quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', loadSections);

