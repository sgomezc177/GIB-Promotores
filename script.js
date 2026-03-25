document.addEventListener('DOMContentLoaded', function () {
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
    // --- Profile Slider Logic ---
    const cards = document.querySelectorAll('.socio-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentCardIndex = 0;
    let sliderInterval;

    function showCard(index) {
        cards.forEach(card => card.classList.remove('active'));
        if (cards.length > 0) cards[index].classList.add('active');
    }

    function nextCard() {
        if (cards.length === 0) return;
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        showCard(currentCardIndex);
    }

    function prevCard() {
        if (cards.length === 0) return;
        currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        showCard(currentCardIndex);
    }

    function startAutoSlide() {
        stopAutoSlide();
        sliderInterval = setInterval(nextCard, 6000); // 6 seconds
    }

    function stopAutoSlide() {
        clearInterval(sliderInterval);
    }

    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => { nextCard(); startAutoSlide(); });
        prevBtn.addEventListener('click', () => { prevCard(); startAutoSlide(); });

        const sliderContainer = document.querySelector('.profile-slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', stopAutoSlide);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
        }
    }

    if (cards.length > 0) {
        startAutoSlide();
    }

    // --- Compact Dynamic Service Logic ---
    const servicesData = [
        {
            id: 'gerencia-proyectos',
            title: 'Gerencia de Proyectos Inmobiliarios',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
            list: [
                '<strong>Planeación:</strong> Estructuración técnica y financiera temprana.',
                '<strong>Control:</strong> Supervisión técnica y administrativa en tiempo real.',
                '<strong>Ejecución:</strong> Liderazgo y negociación para maximizar su inversión.'
            ],
            link: 'gerencia-proyectos.html',
            bannerImage: 'bacata_1.png',
            bannerTitle: 'Liderazgo en Grandes Proyectos',
            bannerDesc: 'Gestionamos la complejidad técnica y financiera de edificios icónicos con precisión total.'
        },
        {
            id: 'mantenimiento-fachadas',
            title: 'Mantenimiento y Asesoría de Fachadas',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
            list: [
                '<strong>Intervención:</strong> Mantenimiento preventivo y correctivo especializado.',
                '<strong>Asesoría:</strong> Soluciones en acabados y técnicas de vanguardia.',
                '<strong>Seguridad:</strong> Cumplimiento estricto de normatividad en alturas.'
            ],
            link: 'mantenimiento-fachadas.html',
            bannerImage: 'suspensiones.jpg',
            bannerTitle: 'Fachadas Siempre Impecables',
            bannerDesc: 'Preservamos el valor estético y estructural de su activo con técnicas especializadas en altura.'
        },
        {
            id: 'diagnosticos-tecnicos',
            title: 'Diagnósticos Técnicos y Asesorías',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
            list: [
                '<strong>Anteproyectos:</strong> Evaluación de estado, planos y licencias.',
                '<strong>Obras en curso:</strong> Rápida solución a reprocesos y problemas de avance.',
                '<strong>Auditoría:</strong> Diagnósticos ágiles para optimizar el diseño constructivo.'
            ],
            link: 'diagnosticos-tecnicos.html',
            bannerImage: 'centro_comercial_interior.jpg',
            bannerTitle: 'Precisión en Diagnósticos',
            bannerDesc: 'Identificamos oportunidades de mejora y riesgos técnicos antes de que se conviertan en costos.'
        },
        {
            id: 'sistemas-contratacion',
            title: 'Sistemas de Contratación',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="13" r="2"></circle><line x1="11.4" y1="14.4" x2="14" y2="17"></line></svg>`,
            list: [
                '<strong>Administración delegada:</strong> Transparencia total y control de gastos.',
                '<strong>Precio Global fijo:</strong> Obra "llave en mano" sin riesgo de sobrecostos.',
                '<strong>Precios unitarios:</strong> Flexibilidad y pago exclusivo por obra ejecutada.'
            ],
            link: 'sistemas-contratacion.html',
            bannerImage: 'edificio_exus_2.jpg',
            bannerTitle: 'Modelos de Contratación Ágiles',
            bannerDesc: 'Adaptamos la estructura contractual a las necesidades financieras y operativas de su obra.'
        },
        {
            id: 'project-management',
            title: 'Project Management',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
            list: [
                '<strong>Dirección integral:</strong> Lideramos su proyecto desde la concepción hasta la entrega final velando por sus intereses financieros.',
                '<strong>Coordinación operativa:</strong> Sincronización de todas las disciplinas técnicas y administrativas sin retrasos.'
            ],
            bannerImage: 'agora_bogota.png',
            bannerTitle: 'Dirección de Obra Superior',
            bannerDesc: 'Cordinación experta que garantiza el éxito en tiempo, costo y calidad.'
        },
        {
            id: 'consultoria-especializada',
            title: 'Consultoría Especializada',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
            list: [
                '<strong>Asesoría normativa:</strong> Acompañamiento en el cumplimiento estricto de los requisitos legales y técnicos.',
                '<strong>Optimización general:</strong> Identificación de oportunidades de mejora constructiva y reducción inteligente de gastos.'
            ],
            bannerImage: 'city_bogota.png',
            bannerTitle: 'Asesoría Integral',
            bannerDesc: 'Estrategia normativa y técnica para blindar legalmente sus proyectos inmobiliarios.'
        },
        {
            id: 'monitoring',
            title: 'Monitoring (Monitoreo Continuo)',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
            list: [
                '<strong>Control de avance:</strong> Seguimiento exhaustivo a los indicadores críticos físicos de la obra.',
                '<strong>Prevención de riesgos:</strong> Alertas tempranas sobre desviaciones en el cronograma o presupuesto para decisiones rápidas.'
            ],
            bannerImage: 'grand_hyatt_full.jpg',
            bannerTitle: 'Control de Avance 24/7',
            bannerDesc: 'Monitoreamos cada fase del proyecto para asegurar que se cumplan las metas establecidas.'
        },
        {
            id: 'purchasing',
            title: 'Purchasing (Compras Estratégicas)',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
            list: [
                '<strong>Gestión de licitaciones:</strong> Búsqueda, evaluación y selección objetiva de los mejores proveedores y contratistas.',
                '<strong>Negociación directa:</strong> Maximización del rendimiento del presupuesto mediante acuerdos de volumen y precio óptimo.'
            ],
            bannerImage: 'mall_fontanar.jpg',
            bannerTitle: 'Eficiencia en Compras',
            bannerDesc: 'Negociamos con los mejores para optimizar su inversión sin comprometer la calidad.'
        },
        {
            id: 'debidas-diligencias',
            title: 'Debidas Diligencias Técnicas',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><circle cx="10" cy="13" r="2"></circle><line x1="11.4" y1="14.4" x2="14" y2="17"></line></svg>`,
            list: [
                '<strong>Evaluación de activos:</strong> Auditorías a profundidad de inmuebles antes de su compra o intervención mayor.',
                '<strong>Informes de viabilidad:</strong> Validamos que el activo cumpla estructural y legalmente con las expectativas de inversión.'
            ],
            bannerImage: 'edificio_beige_1.jpg',
            bannerTitle: 'Viabilidad Técnica Asegurada',
            bannerDesc: 'Auditorías exhaustivas para garantizar que su inversión inmobiliaria sea segura y rentable.'
        },
        {
            id: 'gestion-costos',
            title: 'Gestión de Costos',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
            list: [
                '<strong>Modelado financiero:</strong> Estructuración precisa del flujo de caja, presupuestos base y curvas de inversión.',
                '<strong>Transparencia absoluta:</strong> Reportes contables actualizados y auditoría cruzada de facturación de contratistas.'
            ],
            bannerImage: 'arturo_calle.jpg',
            bannerTitle: 'Excelencia Financiera',
            bannerDesc: 'Control absoluto sobre cada peso invertido, garantizando transparencia y ahorro.'
        },
        {
            id: 'asesoria-leed',
            title: 'Asesoría LEED y Sostenibilidad',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>`,
            list: [
                '<strong>Ingeniería verde:</strong> Implementación de sistemas para ahorro energético y gestión responsable de residuos.',
                '<strong>Certificación ambiental:</strong> Guiamos su proyecto hasta obtener o mantener el prestigioso sello internacional LEED.'
            ],
            bannerImage: 'edificio_residencial_2.jpg',
            bannerTitle: 'Compromiso Sostenible',
            bannerDesc: 'Lideramos la transición hacia edificaciones de alto rendimiento e impacto ambiental positivo.'
        },
        {
            id: 'puesta-en-marcha',
            title: 'Puesta en Marcha',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
            list: [
                '<strong>Alistamiento integral:</strong> Pruebas y calibración final de equipos especiales mecánicos, hidráulicos y eléctricos.',
                '<strong>Handover (Manejo de Entrega):</strong> Transición suave y documentada hacia la administración o cliente final directo.'
            ],
            bannerImage: 'grand_hyatt_top.jpg',
            bannerTitle: 'Entrega Sin Contratiempos',
            bannerDesc: 'Certificamos que su proyecto esté operativo y listo para su uso desde el primer día.'
        },
        {
            id: 'supervision-tecnica',
            title: 'Supervisión Técnica',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>`,
            list: [
                '<strong>Inspectoría inmersiva:</strong> Ojos en campo de tiempo completo garantizando la más alta calidad arquitectónica.',
                '<strong>Seguridad física:</strong> Control preventivo de riesgos laborales y normatividad de trabajo en alturas puro (SST).'
            ],
            bannerImage: 'edificio_exus_1.jpg',
            bannerTitle: 'Rigor en Obra',
            bannerDesc: 'Supervisión constante para garantizar que cada detalle cumpla con los estándares más altos.'
        },
        {
            id: 'remodelacion-total',
            title: 'Remodelación Total',
            icon: `<svg class="service-icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
            list: [
                '<strong>Intervención estética y funcional:</strong> Revitalización de espacios maximizando su valor comercial y confort de uso.',
                '<strong>Control de impacto:</strong> Obra limpia, rápida y coordinada para afectar lo menos posible a residentes o contiguos.'
            ],
            bannerImage: 'edificio_residencial_1.jpg',
            bannerTitle: 'Transformación Total',
            bannerDesc: 'Renovamos sus espacios con eficiencia y diseño para darles una nueva vida.'
        }
    ];

    const serviceSelector = document.getElementById('service-selector');
    const serviceBody = document.getElementById('service-body');
    const serviceSideBanner = document.getElementById('service-side-banner');
    const serviceBannerTag = document.getElementById('service-banner-tag');
    const serviceBannerTitle = document.getElementById('service-banner-title');
    const serviceBannerDesc = document.getElementById('service-banner-desc');
    const serviceBannerContent = document.getElementById('service-banner-content');

    function updateServiceCard(id) {
        const service = servicesData.find(s => s.id === id);
        if (!service) return;

        // Update Card
        if (serviceBody) {
            let listHTML = '';
            service.list.forEach(item => {
                listHTML += `<li>${item}</li>`;
            });

            let buttonHTML = service.link ? `<a href="${service.link}" class="btn btn-outline service-btn">Saber más</a>` : '';

            serviceBody.style.opacity = '0';
            setTimeout(() => {
                serviceBody.innerHTML = `
                <div class="service-content-header">
                    ${service.icon}
                    <h3>${service.title}</h3>
                </div>
                <ul class="service-list">
                    ${listHTML}
                </ul>
                ${buttonHTML}
            `;
                serviceBody.style.opacity = '1';
            }, 250);
        }

        // Update Banner
        if (serviceSideBanner) {
            serviceBannerContent.style.opacity = '0';
            serviceSideBanner.style.opacity = '0.7'; // Small dim effect

            setTimeout(() => {
                serviceSideBanner.style.backgroundImage = `url('assets/${service.bannerImage}')`;
                serviceBannerTitle.innerText = service.bannerTitle;
                serviceBannerDesc.innerText = service.bannerDesc;
                serviceBannerTag.innerText = service.bannerTag || 'Excelencia GIB';

                serviceBannerContent.style.opacity = '1';
                serviceSideBanner.style.opacity = '1';
            }, 300);
        }
    }

    if (serviceSelector) {
        serviceSelector.addEventListener('change', function () {
            updateServiceCard(this.value);
        });

        // Initialize with first service
        updateServiceCard(servicesData[0].id);
    }
});

// --- Modal Logic ---
function openModal(id) {
    const modal = document.getElementById(id + '-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id + '-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});
