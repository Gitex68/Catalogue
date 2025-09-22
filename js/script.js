// Gestionnaire de thème simplifié et sûr
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) {
        console.error('Bouton de thème non trouvé !');
        return;
    }

    // Fonction pour appliquer le thème
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = themeToggle.querySelector('i');
        const text = themeToggle.querySelector('.toggle-text');
        
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
                themeToggle.setAttribute('title', 'Mode clair');
                if (text) text.textContent = 'Mode clair';
            } else {
                icon.className = 'fas fa-moon';
                themeToggle.setAttribute('title', 'Mode sombre');
                if (text) text.textContent = 'Mode sombre';
            }
        }
        
        console.log('Thème appliqué:', theme);
    }

    // Initialiser le thème
    let currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);

    // Gestionnaire de clic
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = current === 'dark' ? 'light' : 'dark';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        console.log('Thème changé:', current, '→', newTheme);
    });

    console.log('Gestionnaire de thème initialisé');
}

// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le gestionnaire de thème en premier
    setupThemeToggle();
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.getElementById('theme-toggle');

    // Vérifier que le bouton de thème existe
    if (!themeToggle) {
        console.error('Bouton de thème non trouvé');
        return;
    }

    // Toggle menu mobile
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu mobile quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Animation hamburger
    hamburger.addEventListener('click', function() {
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (hamburger.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(45deg) translate(6px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // Scroll fluide pour les liens d'ancrage
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Compenser la hauteur du header fixe
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Mise en surbrillance du lien actif dans la navigation
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + 100;
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    });

    // Animation des cartes produits au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const produitCards = document.querySelectorAll('.produit-card');
    produitCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Données des catalogues
const cataloguesData = {
    vins: {
        title: 'Catalogue Vins Locaux',
        description: 'Sélection de vins locaux de qualité issus des meilleurs vignobles de notre région.',
        details: [
            'Vins rouges, blancs, rosés',
            'Producteur local',
        ],
        filename: 'catalogue-vins-locaux.pdf'
    },
    agrumes: {
        title: 'Catalogue Caisses d\'Agrumes',
        description: 'Caisses de 10 kg d\'agrumes frais, cueillis à maturité.',
        details: [
            'Caisses de 10 kg',
            'Oranges, citrons, mandarines et encore plus...',
            'Bio'
        ],
        filename: 'catalogue-agrumes-10kg.pdf'
    },
    chaussettes: {
        title: 'Catalogue Chaussettes Pomme de Pin',
        description: 'Chaussettes confortables de la marque Pomme de Pin.',
        details: [
            'Laine de mouton',
            'Designs colorés',
            'Confort'
        ],
        filename: 'catalogue-chaussettes-pomme-de-pin.pdf'
    },
    chocolats: {
        title: 'Catalogue Chocolats du Cœur',
        description: 'Chocolats artisanaux de qualité.',
        details: [
            'Chocolats artisanaux',
            'Ingrédients de qualité',
            'Idées cadeaux',
            'Fabrication française'
        ],
        filename: 'catalogue-chocolats-du-coeur.pdf'
    }
};

// Fonction pour ouvrir les modales des catalogues
function openModal(produitType) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    const catalogue = cataloguesData[produitType];
    
    if (catalogue) {
        modalTitle.textContent = catalogue.title;
        
        modalContent.innerHTML = `
            <div class="catalogue-info">
                <h4>Présentation du produit</h4>
                <p>${catalogue.description}</p>
                
                <div class="catalogue-details" style="margin: 2rem 0; text-align: left;">
                    <h5 style="margin-bottom: 1rem; color: var(--text-dark);">Caractéristiques :</h5>
                    <ul style="list-style: none; padding: 0;">
                        ${catalogue.details.map(detail => 
                            `<li style="padding: 0.5rem 0; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center;">
                                <i class="fas fa-check" style="color: var(--accent-color); margin-right: 0.5rem;"></i>
                                ${detail}
                            </li>`
                        ).join('')}
                    </ul>
                </div>
                
                <div style="background: var(--bg-light); padding: 1.5rem; border-radius: var(--border-radius); margin: 1.5rem 0;">
                    <h5 style="margin-bottom: 1rem; color: var(--text-dark);">
                        <i class="fas fa-info-circle" style="margin-right: 0.5rem; color: var(--primary-color);"></i>
                        Informations
                    </h5>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">
                        Téléchargez le catalogue pour voir tous les produits et prix.
                    </p>
                </div>
                
                <a href="catalogues/${catalogue.filename}" class="download-btn" download>
                    <i class="fas fa-download"></i>
                    Télécharger le catalogue
                </a>
                
                ${produitType === 'chocolats' || produitType === 'chaussettes' ? 
                    `<a href="catalogues/bon-commande-${produitType === 'chocolats' ? 'chocolats-du-coeur' : 'chaussettes-pomme-de-pin'}.pdf" class="download-btn commande-btn" download style="background: linear-gradient(135deg, #28a745, #20c997); margin-top: 1rem;">
                        <i class="fas fa-file-alt"></i>
                        Télécharger le bon de commande
                    </a>` : ''
                }
                
                <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--text-light);">
                    <i class="fas fa-heart" style="color: var(--secondary-color); margin-right: 0.3rem;"></i>
                    Merci de soutenir notre voyage !
                </p>
            </div>
        `;
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Empêche le scroll en arrière-plan
    }
}

// Fonction pour fermer la modale
function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restaure le scroll
}

// Fermer la modale avec la touche Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Effet parallaxe subtil pour le hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Animation du compteur (effet visuel pour les statistiques)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Animation des statistiques au scroll
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const value = stat.textContent;
                if (value.includes('%')) {
                    const number = parseInt(value);
                    stat.textContent = '0%';
                    animateCounter(stat, number, 1500);
                    stat.textContent = number + '%';
                } else {
                    const number = parseInt(value);
                    stat.textContent = '0';
                    animateCounter(stat, number, 1500);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const objectifSection = document.querySelector('.objectif');
    if (objectifSection) {
        statsObserver.observe(objectifSection);
    }
});

// Préloader pour les images (optimisation)
function preloadImages() {
    const images = [
        'images/vins.jpg',
        'images/agrumes.jpg',
        'images/chaussettes.jpg',
        'images/chocolats.jpg'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// ===== ANIMATIONS DE SCROLL ULTRA-FLUIDES ET OPTIMISÉES =====

// Configuration avancée de l'observateur d'intersection
const animationObserverOptions = {
    threshold: [0, 0.1, 0.2, 0.3],
    rootMargin: '0px 0px -100px 0px'
};

// Pool d'animations pour éviter la duplication
const animationPool = new WeakMap();

// Observateur principal pour les animations au scroll - OPTIMISÉ
const scrollAnimationObserver = new IntersectionObserver(function(entries) {
    // Utiliser requestAnimationFrame pour de meilleures performances
    requestAnimationFrame(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                const target = entry.target;
                
                // Éviter les re-animations
                if (animationPool.has(target)) return;
                animationPool.set(target, true);
                
                // Animation progressive basée sur la visibilité
                const visibilityRatio = entry.intersectionRatio;
                const delay = Math.max(0, (1 - visibilityRatio) * 200);
                
                setTimeout(() => {
                    target.classList.add('scroll-visible');
                    
                    // Animations spécialisées avec optimisations
                    if (target.classList.contains('produit-card')) {
                        target.style.transform = 'translate3d(0, 0, 0) scale(1)';
                        target.style.filter = 'blur(0)';
                    }
                    
                    if (target.classList.contains('timeline-item')) {
                        target.style.opacity = '1';
                        target.style.transform = 'translate3d(0, 0, 0) rotateY(0deg)';
                        target.style.filter = 'blur(0)';
                    }
                    
                    if (target.classList.contains('objective-card')) {
                        target.style.opacity = '1';
                        target.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) scale(1)';
                        target.style.filter = 'blur(0)';
                    }
                    
                    // Optimisation : arrêter d'observer après animation
                    setTimeout(() => {
                        scrollAnimationObserver.unobserve(target);
                        // Nettoyer les propriétés will-change après animation
                        target.style.willChange = 'auto';
                    }, 1500);
                }, delay);
            }
        });
    });
}, animationObserverOptions);

// Fonction pour initialiser toutes les animations de scroll - AMÉLIORÉE
function initScrollAnimations() {
    // Sélectionner tous les éléments à animer avec priorités
    const priorityElements = [
        { selector: '.hero-badge', priority: 1 },
        { selector: '.hero-title', priority: 1 },
        { selector: '.hero-subtitle', priority: 1 },
        { selector: '.hero-actions', priority: 1 },
        { selector: '.apropos', priority: 2 },
        { selector: '.produits', priority: 2 },
        { selector: '.produit-card', priority: 3 },
        { selector: '.timeline-item', priority: 3 },
        { selector: '.objective-card', priority: 3 },
        { selector: '.apropos-hero', priority: 2 },
        { selector: '.section-badge', priority: 2 },
        { selector: '.footer', priority: 4 },
        { selector: '.footer-brand', priority: 4 },
        { selector: '.footer-column', priority: 4 }
    ];
    
    // Initialiser par ordre de priorité
    priorityElements.sort((a, b) => a.priority - b.priority);
    
    priorityElements.forEach(({ selector }, index) => {
        setTimeout(() => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                // Optimisations de performance
                if (!element.classList.contains('scroll-animate')) {
                    element.classList.add('scroll-animate');
                }
                
                // Forcer l'accélération GPU
                element.style.transform = element.style.transform || 'translateZ(0)';
                element.style.willChange = 'transform, opacity, filter';
                
                // Observer l'élément
                scrollAnimationObserver.observe(element);
            });
        }, index * 50); // Délai progressif pour éviter la surcharge
    });
}

// Animation de décompte optimisée avec effets visuels renforcés
function animateCountUp(element, endValue, duration = 2000, suffix = '') {
    const startValue = 0;
    const startTime = performance.now();
    let lastValue = startValue;
    
    function updateCount(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Fonction d'easing plus dynamique pour la nouvelle animation
        const easeOutBounce = progress < 0.5 
            ? 8 * progress * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 4) / 2;
        
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutBounce);
        
        // Éviter les mises à jour inutiles
        if (currentValue !== lastValue) {
            element.textContent = currentValue + suffix;
            lastValue = currentValue;
            
            // Effet de pulsation pendant l'animation
            if (progress < 1) {
                const pulseIntensity = Math.sin(progress * Math.PI * 8) * 0.1 + 1;
                element.style.transform = `scale(${pulseIntensity})`;
            } else {
                element.style.transform = 'scale(1)';
            }
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = endValue + suffix;
            element.style.transform = 'scale(1)';
            
            // Effet final de confirmation
            element.style.color = '#10b981';
            setTimeout(() => {
                element.style.color = '';
            }, 500);
        }
    }
    
    requestAnimationFrame(updateCount);
}

// Observateur pour les statistiques avec seuil optimisé
const heroStatsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const statItems = entry.target.querySelectorAll('.stat-item');
            
            statItems.forEach((item, index) => {
                // Animation progressive avec délais optimisés
                const delay = index * 200 + 300;
                
                setTimeout(() => {
                    const numberElement = item.querySelector('.stat-number');
                    if (numberElement) {
                        const text = numberElement.textContent;
                        
                        // Animation du compteur selon le type
                        if (text.includes('%')) {
                            const number = parseInt(text);
                            animateCountUp(numberElement, number, 1800, '%');
                        } else if (text.includes('202')) {
                            animateCountUp(numberElement, 2025, 2200);
                        } else {
                            const number = parseInt(text);
                            animateCountUp(numberElement, number, 1400);
                        }
                    }
                    
                    // Animation visuelle de l'item - utilisation de la classe CSS
                    item.classList.add('animate');
                }, delay);
            });
            
            heroStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Effet parallax ultra-optimisé avec throttling intelligent
let parallaxTicking = false;
let lastScrollY = 0;
const parallaxElements = [];

function updateParallax() {
    const scrolled = window.pageYOffset;
    const scrollDelta = scrolled - lastScrollY;
    lastScrollY = scrolled;
    
    // Ne mettre à jour que si le scroll est significatif
    if (Math.abs(scrollDelta) < 1) {
        parallaxTicking = false;
        return;
    }
    
    // Parallax pour les formes flottantes (cache des éléments)
    if (parallaxElements.length === 0) {
        parallaxElements.push(...document.querySelectorAll('.shape, .particle'));
    }
    
    parallaxElements.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
    
    // Parallax pour le hero (seulement si visible)
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        const yPos = scrolled * 0.2;
        hero.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
    
    parallaxTicking = false;
}

function requestParallaxUpdate() {
    if (!parallaxTicking) {
        requestAnimationFrame(updateParallax);
        parallaxTicking = true;
    }
}

// Animation de révélation progressive optimisée
const revealObserver = new IntersectionObserver(function(entries) {
    requestAnimationFrame(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                const section = entry.target;
                
                // Animation spécifique pour chaque section avec délais optimisés
                if (section.classList.contains('apropos')) {
                    const aproposElements = section.querySelectorAll('.apropos-hero, .timeline-item, .objective-card');
                    aproposElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('scroll-visible');
                        }, index * 120);
                    });
                }
                
                if (section.classList.contains('produits')) {
                    const productCards = section.querySelectorAll('.produit-card');
                    productCards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('scroll-visible');
                        }, index * 180);
                    });
                }
                
                revealObserver.unobserve(entry.target);
            }
        });
    });
}, { threshold: 0.2 });

// Animation des boutons et éléments interactifs - OPTIMISÉE
function addInteractiveAnimations() {
    // Cache des éléments pour éviter les requêtes répétées
    const interactiveElements = {
        cards: document.querySelectorAll('.produit-card, .objective-card'),
        buttons: document.querySelectorAll('.btn-catalogue, .cta-primary, .cta-secondary')
    };
    
    // Animation au survol des cartes avec throttling
    interactiveElements.cards.forEach(card => {
        let hoverTimeout;
        
        card.addEventListener('mouseenter', function() {
            clearTimeout(hoverTimeout);
            if (this.classList.contains('scroll-visible')) {
                this.style.transform = 'translate3d(0, -20px, 0) scale(1.05)';
                this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.2)';
                this.style.transition = 'all 0.6s cubic-bezier(0.19, 1, 0.22, 1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            hoverTimeout = setTimeout(() => {
                if (this.classList.contains('scroll-visible')) {
                    this.style.transform = 'translate3d(0, 0, 0) scale(1)';
                    this.style.boxShadow = '';
                }
            }, 50);
        });
    });
    
    // Animation des boutons CTA avec bounce
    interactiveElements.buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translate3d(0, -5px, 0) scale(1.05)';
            this.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate3d(0, 0, 0) scale(1)';
        });
    });
}

// Initialisation ultra-optimisée de toutes les animations au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Performance monitoring
    const startTime = performance.now();
    
    console.log('🚫 Défilement bloqué pendant l\'animation hero (5 secondes)');
    
    // Débloquer le défilement après 5 secondes
    setTimeout(() => {
        document.body.classList.remove('loading');
        console.log('✅ Défilement débloqué - Animation terminée');
        
        // Ajouter un indicateur visuel subtil que le défilement est possible
        const scrollIndicator = document.createElement('div');
        scrollIndicator.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(56, 178, 172, 0.1);
            color: #38b2ac;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 12px;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.5s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(56, 178, 172, 0.2);
        `;
        scrollIndicator.innerHTML = '<i class="fas fa-mouse"></i> Défilement activé';
        document.body.appendChild(scrollIndicator);
        
        // Afficher l'indicateur
        setTimeout(() => {
            scrollIndicator.style.opacity = '1';
        }, 100);
        
        // Masquer l'indicateur après 3 secondes
        setTimeout(() => {
            scrollIndicator.style.opacity = '0';
            setTimeout(() => {
                if (scrollIndicator.parentNode) {
                    scrollIndicator.parentNode.removeChild(scrollIndicator);
                }
            }, 500);
        }, 3000);
        
    }, 5000); // 5 secondes exactement
    
    // Empêcher le défilement via les touches du clavier pendant l'animation
    let scrollAttempts = 0;
    const preventKeyScroll = (e) => {
        if (document.body.classList.contains('loading')) {
            const keysToPrevent = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // Space, PageUp, PageDown, End, Home, Arrow keys
            if (keysToPrevent.includes(e.keyCode)) {
                e.preventDefault();
                scrollAttempts++;
                
                // Afficher un message subtil après plusieurs tentatives
                if (scrollAttempts === 3) {
                    showScrollBlockedMessage();
                }
                return false;
            }
        }
    };
    
    // Empêcher le défilement via la molette de la souris pendant l'animation
    const preventWheelScroll = (e) => {
        if (document.body.classList.contains('loading')) {
            e.preventDefault();
            scrollAttempts++;
            
            // Afficher un message subtil après plusieurs tentatives
            if (scrollAttempts === 5) {
                showScrollBlockedMessage();
            }
            return false;
        }
    };
    
    // Fonction pour afficher un message discret
    const showScrollBlockedMessage = () => {
        if (document.querySelector('.scroll-blocked-message')) return; // Éviter les doublons
        
        const message = document.createElement('div');
        message.className = 'scroll-blocked-message';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            font-size: 14px;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
            backdrop-filter: blur(10px);
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;
        message.innerHTML = `
            <i class="fas fa-hourglass-half" style="margin-right: 8px; color: #38b2ac;"></i>
            Animation en cours... Patientez quelques secondes
        `;
        
        document.body.appendChild(message);
        
        // Afficher le message
        setTimeout(() => {
            message.style.opacity = '1';
        }, 100);
        
        // Masquer le message après 2 secondes
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300);
        }, 2000);
    };
    
    // Ajouter les listeners pour bloquer le défilement
    document.addEventListener('keydown', preventKeyScroll, { passive: false });
    document.addEventListener('wheel', preventWheelScroll, { passive: false });
    document.addEventListener('touchmove', preventWheelScroll, { passive: false });
    
    // Supprimer les listeners après 5 secondes
    setTimeout(() => {
        document.removeEventListener('keydown', preventKeyScroll);
        document.removeEventListener('wheel', preventWheelScroll);
        document.removeEventListener('touchmove', preventWheelScroll);
    }, 5000);
    
    // Prévenir le clignotement en révélant le hero après chargement DOM
    setTimeout(() => {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.classList.add('loaded');
        }
    }, 50);
    
    // 1. Initialiser les animations de scroll avec priorité
    initScrollAnimations();
    
    // 2. Observer les sections principales
    setTimeout(() => {
        const mainSections = document.querySelectorAll('.apropos, .produits');
        mainSections.forEach(section => {
            revealObserver.observe(section);
        });
    }, 200);
    
    // 3. Ajouter les animations interactives
    setTimeout(() => {
        addInteractiveAnimations();
    }, 500);
    
    // 4. Démarrer le parallax avec throttling intelligent
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(requestParallaxUpdate, 16); // ~60fps
    }, { passive: true });
    
    // 5. ANIMATION HERO ANTI-CLIGNOTEMENT - WAVE CASCADE EFFECT
    const waveCascadeAnimation = () => {
        console.log('🌊 Démarrage de l\'animation Wave Cascade (version anti-clignotement)');
        
        // Phase 1: Badge avec effet de vague (300ms) - plus rapide pour éviter le clignotement
        setTimeout(() => {
            const heroBadge = document.querySelector('.hero-badge');
            if (heroBadge) {
                heroBadge.classList.add('wave-in');
                console.log('✨ Badge animé avec effet de vague');
            }
        }, 300);
        
        // Phase 2: Titre avec slide élastique (800ms) - plus fluide
        setTimeout(() => {
            const heroTitle = document.querySelector('.hero-title');
            if (heroTitle) {
                heroTitle.classList.add('elastic-slide');
                console.log('🎯 Titre animé avec slide élastique');
            }
        }, 800);
        
        // Phase 3: Sous-titre avec effet spiral (1400ms) - timing optimisé
        setTimeout(() => {
            const heroSubtitle = document.querySelector('.hero-subtitle');
            if (heroSubtitle) {
                heroSubtitle.classList.add('spiral-in');
                console.log('🌀 Sous-titre animé avec effet spiral');
            }
        }, 1400);
        
        // Phase 4: Actions avec zoom burst (2000ms) - plus naturel
        setTimeout(() => {
            const heroActions = document.querySelector('.hero-actions');
            if (heroActions) {
                heroActions.classList.add('zoom-burst');
                console.log('💥 Actions animées avec zoom burst');
                
                // Ajouter des effets visuels aux boutons
                const buttons = heroActions.querySelectorAll('.cta-primary, .cta-secondary');
                buttons.forEach((button, index) => {
                    setTimeout(() => {
                        button.style.transform = 'scale(1.05)';
                        button.style.boxShadow = '0 10px 30px rgba(56, 178, 172, 0.3)';
                        setTimeout(() => {
                            button.style.transform = 'scale(1)';
                            button.style.boxShadow = '';
                        }, 200);
                    }, index * 200);
                });
            }
        }, 2000);
        
        // Phase 5: Stats avec flip cascade (2600ms) - sans "2025"
        setTimeout(() => {
            const heroStats = document.querySelector('.hero-stats');
            if (heroStats) {
                heroStats.classList.add('flip-cascade');
                console.log('📊 Stats animées avec flip cascade (sans objectif 2025)');
                
                // Animation en cascade des stat items restants
                const statItems = heroStats.querySelectorAll('.stat-item');
                statItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('cascade-pop');
                        
                        // Démarrer l'animation du compteur avec effet visuel
                        const numberElement = item.querySelector('.stat-number');
                        if (numberElement) {
                            const text = numberElement.textContent;
                            
                            // Effet de flash avant l'animation
                            numberElement.style.color = '#38b2ac';
                            numberElement.style.textShadow = '0 0 10px #38b2ac';
                            
                            // Animation seulement pour les éléments existants (4 et 100%)
                            if (text.includes('%')) {
                                const number = parseInt(text);
                                animateCountUp(numberElement, number, 1500, '%');
                            } else if (text === '4') {
                                animateCountUp(numberElement, 4, 1200);
                            }
                            
                            // Retirer l'effet de flash après l'animation
                            setTimeout(() => {
                                numberElement.style.color = '';
                                numberElement.style.textShadow = '';
                            }, 2000);
                        }
                    }, index * 300); // Délai plus espacé pour 2 éléments
                });
            }
        }, 2600);
        
        // Phase 6: Effet final magnétique optimisé (4000ms)
        setTimeout(() => {
            const heroSection = document.querySelector('.hero');
            if (heroSection) {
                heroSection.classList.add('hero-complete');
                console.log('🎆 Animation complète - Effet magnétique activé');
                
                // Ajouter des effets visuels finaux
                const animatedElements = heroSection.querySelectorAll('.wave-in, .elastic-slide, .spiral-in, .zoom-burst');
                animatedElements.forEach((element, index) => {
                    setTimeout(() => {
                        // Effet de confirmation visuelle
                        element.style.boxShadow = '0 0 15px rgba(56, 178, 172, 0.4)';
                        setTimeout(() => {
                            element.style.boxShadow = '';
                        }, 800);
                    }, index * 150);
                });
            }
        }, 4000);
        
        // Phase 7: Nettoyage et optimisation (5500ms)
        setTimeout(() => {
            // Nettoyer les propriétés will-change pour optimiser les performances
            const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-actions, .hero-stats');
            heroElements.forEach(element => {
                element.style.willChange = 'auto';
            });
            console.log('🧹 Nettoyage des animations terminé (sans clignotement)');
        }, 5500);
    };
    
    // Lancer la nouvelle animation wave cascade immédiatement
    setTimeout(waveCascadeAnimation, 100);
    
    // 6. Optimisations de performance globales
    setTimeout(() => {
        // Precharger les images critiques
        preloadCriticalImages();
        
        // Optimiser les animations après le chargement initial
        optimizeAnimationsForDevice();
        
        console.log(`Animations initialisées en ${performance.now() - startTime}ms`);
    }, 1000);
});

// Fonction pour précharger les images critiques
function preloadCriticalImages() {
    const criticalImages = [
        'images/vins.jpg',
        'images/agrumes.jpg',
        'images/chaussettes.jpg',
        'images/chocolats.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Optimisation des animations selon le device
function optimizeAnimationsForDevice() {
    // Détecter les devices à faible performance
    const isLowPerformanceDevice = () => {
        return navigator.hardwareConcurrency < 4 || 
               navigator.connection?.effectiveType === 'slow-2g' ||
               navigator.connection?.effectiveType === '2g';
    };
    
    // Réduire les animations pour les devices lents
    if (isLowPerformanceDevice()) {
        document.documentElement.style.setProperty('--ease-out-expo', 'ease');
        document.documentElement.style.setProperty('--ease-out-back', 'ease-out');
        
        // Réduire la complexité des animations
        const complexAnimations = document.querySelectorAll('.scroll-animate');
        complexAnimations.forEach(el => {
            el.style.transition = el.style.transition.replace(/[\d.]+s/g, '0.3s');
        });
    }
}

// Performance optimization: Pause animations when tab is not visible
document.addEventListener('visibilitychange', function() {
    const animations = document.querySelectorAll('.scroll-animate, .shape, .particle');
    
    if (document.hidden) {
        // Pauser toutes les animations
        animations.forEach(el => {
            el.style.animationPlayState = 'paused';
            el.style.willChange = 'auto'; // Libérer les ressources
        });
        
        // Arrêter le parallax
        window.removeEventListener('scroll', requestParallaxUpdate);
    } else {
        // Reprendre les animations
        animations.forEach(el => {
            el.style.animationPlayState = 'running';
            if (el.classList.contains('scroll-animate')) {
                el.style.willChange = 'transform, opacity, filter';
            }
        });
        
        // Redémarrer le parallax
        window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    }
});

// Nettoyage automatique des animations terminées
setInterval(() => {
    const completedAnimations = document.querySelectorAll('.scroll-visible');
    completedAnimations.forEach(el => {
        // Nettoyer les propriétés will-change après 5 secondes
        if (el.style.willChange && el.style.willChange !== 'auto') {
            setTimeout(() => {
                el.style.willChange = 'auto';
            }, 5000);
        }
    });
}, 10000); // Vérifier toutes les 10 secondes

// Gestionnaire de resize optimisé pour maintenir les performances
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculer les positions des éléments animés
        const animatedElements = document.querySelectorAll('.scroll-visible');
        animatedElements.forEach(el => {
            // Forcer un repaint optimisé
            el.style.transform = el.style.transform;
        });
    }, 250);
}, { passive: true });

// Lancer le préchargement des images
document.addEventListener('DOMContentLoaded', preloadImages);
