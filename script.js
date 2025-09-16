// JavaScript for SDF AI Website

// Function to handle character tab switching
function openCharacter(evt, characterName) {
    // Hide all character content
    const characterContents = document.getElementsByClassName("character-content");
    for (let i = 0; i < characterContents.length; i++) {
        characterContents[i].classList.remove("active");
    }

    // Remove active class from all tab buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the selected character content and mark the button as active
    document.getElementById(characterName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Function to handle smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    }

    // Preload audio files
    const audioElements = document.querySelectorAll('audio');
    for (const audio of audioElements) {
        const source = audio.querySelector('source');
        if (source) {
            const preloadAudio = new Audio();
            preloadAudio.src = source.src;
        }
    }
    
    // Add active class to navigation based on scroll position and handle blur effect
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.main-nav a');
        const header = document.querySelector('header');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
        
        // Handle blur effect and background color based on scroll position
        if (window.scrollY > 50) {
            header.style.backdropFilter = 'blur(10px)';
            header.style.webkitBackdropFilter = 'blur(10px)';
            header.style.backgroundColor = 'rgb(30 11 64 / 84%)';
        } else {
            header.style.backdropFilter = 'blur(0px)';
            header.style.webkitBackdropFilter = 'blur(0px)';
            header.style.backgroundColor = 'rgba(30, 11, 64, 0.1)';
        }
    });
    
    // Add animation on scroll for story cards and character profiles
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.character-card, .story-card, .about-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.8) {
                element.classList.add('animate');
            }
        });
    };
    
    // Add initial animation classes
    const animatedElements = document.querySelectorAll('.character-card, .story-card, .about-content');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-in-out';
    });
    
    // Add animate class when elements come into view
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();
    
    // Initialize the page with the first character tab active
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        firstTab.click();
    }
});

// Add animation class to elements
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.character-card, .story-card, .about-content');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
