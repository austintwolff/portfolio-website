// ============================================================================
// Portfolio Website - Interactive Features
// ============================================================================

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// ============================================================================
// Project Carousel Navigation
// ============================================================================

const projectsGrid = document.getElementById('projectsGrid');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

if (scrollLeftBtn && scrollRightBtn && projectsGrid) {
    scrollLeftBtn.addEventListener('click', () => {
        projectsGrid.scrollBy({
            left: -420,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        projectsGrid.scrollBy({
            left: 420,
            behavior: 'smooth'
        });
    });

    // Hide/show arrows based on scroll position
    function updateProjectArrows() {
        const maxScroll = projectsGrid.scrollWidth - projectsGrid.clientWidth;
        scrollLeftBtn.style.opacity = projectsGrid.scrollLeft <= 0 ? '0.3' : '1';
        scrollLeftBtn.style.cursor = projectsGrid.scrollLeft <= 0 ? 'default' : 'pointer';
        scrollRightBtn.style.opacity = projectsGrid.scrollLeft >= maxScroll ? '0.3' : '1';
        scrollRightBtn.style.cursor = projectsGrid.scrollLeft >= maxScroll ? 'default' : 'pointer';
    }

    projectsGrid.addEventListener('scroll', updateProjectArrows);
    window.addEventListener('resize', updateProjectArrows);
    updateProjectArrows();
}

// ============================================================================
// Experience Carousel Navigation
// ============================================================================

const experienceGrid = document.getElementById('experienceGrid');
const expScrollLeftBtn = document.getElementById('expScrollLeft');
const expScrollRightBtn = document.getElementById('expScrollRight');

if (expScrollLeftBtn && expScrollRightBtn && experienceGrid) {
    expScrollLeftBtn.addEventListener('click', () => {
        experienceGrid.scrollBy({
            left: -460,
            behavior: 'smooth'
        });
    });

    expScrollRightBtn.addEventListener('click', () => {
        experienceGrid.scrollBy({
            left: 460,
            behavior: 'smooth'
        });
    });

    // Hide/show arrows based on scroll position
    function updateExpArrows() {
        const maxScroll = experienceGrid.scrollWidth - experienceGrid.clientWidth;
        expScrollLeftBtn.style.opacity = experienceGrid.scrollLeft <= 0 ? '0.3' : '1';
        expScrollLeftBtn.style.cursor = experienceGrid.scrollLeft <= 0 ? 'default' : 'pointer';
        expScrollRightBtn.style.opacity = experienceGrid.scrollLeft >= maxScroll ? '0.3' : '1';
        expScrollRightBtn.style.cursor = experienceGrid.scrollLeft >= maxScroll ? 'default' : 'pointer';
    }

    experienceGrid.addEventListener('scroll', updateExpArrows);
    window.addEventListener('resize', updateExpArrows);
    updateExpArrows();
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards, experience cards, and sections
document.querySelectorAll('.project-card, .experience-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = navbar.offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Console message for curious visitors
console.log('%cHey there! 👋', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cLike what you see? Let\'s connect!', 'font-size: 14px; color: #6b7280;');
console.log('%cBuilt with vanilla JavaScript, HTML, and CSS.', 'font-size: 12px; color: #9ca3af;');
