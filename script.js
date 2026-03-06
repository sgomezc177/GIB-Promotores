document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown-decorative');
    const servicesTextContainer = document.querySelector('.services-text');

    // Data for the services
    // Data for the services
    const servicesData = {
        'gerencia': {
            title: 'Gerencia de Proyectos',
            text: `<p>Aseguramos el éxito de su inversión mediante una gestión rigurosa y transparente. Supervisamos cada etapa del proyecto, controlando costos, cronogramas y calidad.</p>
                   <p>Nuestra metodología garantiza la coordinación eficiente entre todos los actores del proyecto, minimizando riesgos y asegurando la entrega a tiempo bajo los más altos estándares.</p>`
        },
        'interventoria': {
            title: 'Interventoría',
            text: `<p>Garantizamos el cumplimiento normativo, técnico, administrativo y financiero de su obra. Actuamos como sus ojos en el terreno, verificando que cada detalle se ejecute según lo contratado protegiendo su inversión.</p>
                   <p>Nuestro equipo multidisciplinario asegura la calidad final y la transparencia en el uso de los recursos durante todo el ciclo de vida del proyecto.</p>`
        },
        'supervision': {
            title: 'Supervisión Técnica',
            text: `<p>Velamos por la integridad estructural y técnica de sus edificaciones. Realizamos un seguimiento exhaustivo para asegurar el estricto cumplimiento del Reglamento Colombiano de Construcción Sismo Resistente (NSR-10).</p>
                   <p>Validamos calidad de materiales y procedimientos constructivos para garantizar la seguridad y estabilidad de la obra.</p>`
        },
        'arquitectura': {
            title: 'Arquitectura e Ingeniería',
            text: `<p>Integramos diseño estético y funcionalidad técnica. Nuestro equipo de arquitectos e ingenieros desarrolla soluciones completas, desde la concepción creativa hasta los cálculos estructurales y redes.</p>
                   <p>Creamos espacios que no solo inspiran, sino que son viables, eficientes y sostenibles.</p>`
        },
        'construccion': {
            title: 'Construcción',
            text: `<p>Materializamos proyectos con precisión y excelencia. Ejecutamos obras civiles y edificaciones cumpliendo estrictamente con los cronogramas y presupuestos establecidos.</p>
                   <p>Transformamos planos en realidades sólidas, utilizando materiales de alta calidad y mano de obra calificada para entregar edificaciones duraderas.</p>`
        }
    };

    // Create the dropdown menu elements
    const selectedDisplay = document.createElement('span');
    selectedDisplay.textContent = servicesData['gerencia'].title; // Default

    const arrow = document.createElement('span');
    arrow.className = 'dropdown-arrow';
    arrow.textContent = '▼';

    const optionsList = document.createElement('ul');
    optionsList.className = 'dropdown-menu';

    // Populate options
    for (const key in servicesData) {
        const li = document.createElement('li');
        li.textContent = servicesData[key].title;
        li.dataset.value = key;
        li.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent closing immediately
            selectOption(key);
            closeDropdown();
        });
        optionsList.appendChild(li);
    }

    // Clear current content and append new structure
    dropdown.innerHTML = '';
    dropdown.appendChild(selectedDisplay);
    dropdown.appendChild(arrow);
    dropdown.appendChild(optionsList);

    // Toggle dropdown
    dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            closeDropdown();
        }
    });

    function closeDropdown() {
        dropdown.classList.remove('active');
    }

    function selectOption(key) {
        const data = servicesData[key];
        if (data) {
            selectedDisplay.textContent = data.title;

            // Fade out effect
            servicesTextContainer.style.opacity = '0';

            setTimeout(() => {
                servicesTextContainer.innerHTML = data.text;
                servicesTextContainer.style.opacity = '1';
            }, 300);
        }
    }

    // --- Profile Slider Logic ---
    const cards = document.querySelectorAll('.profile-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentCardIndex = 0;
    let sliderInterval;

    function showCard(index) {
        // Hide all
        cards.forEach(card => card.classList.remove('active'));

        // Show current
        cards[index].classList.add('active');
    }

    function nextCard() {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        showCard(currentCardIndex);
    }

    function prevCard() {
        currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        showCard(currentCardIndex);
    }

    function startAutoSlide() {
        stopAutoSlide(); // Ensure we don't have multiple intervals
        sliderInterval = setInterval(nextCard, 8000); // 8 seconds (slower)
    }

    function stopAutoSlide() {
        clearInterval(sliderInterval);
    }

    // Event Listeners
    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextCard();
            startAutoSlide(); // Reset timer on interaction
        });

        prevBtn.addEventListener('click', () => {
            prevCard();
            startAutoSlide(); // Reset timer on interaction
        });

        // Pause on hover
        const sliderContainer = document.querySelector('.profile-slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
        }
    }

    // Start initial rotation
    if (cards.length > 0) {
        startAutoSlide();
    }

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Toggle body scroll
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});

// --- Modal Logic (Global) ---
function openModal(id) {
    const modal = document.getElementById(id + '-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeModal(id) {
    const modal = document.getElementById(id + '-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal when clicking outside content
window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});
