// JavaScript for Restart Campaign Website

// Character carousel functionality
let currentCharacterIndex = 0;
let autoSwapInterval = null;
const characters = ['aya', 'atta', 'rawan'];
const characterNames = ['aya', 'atta', 'rawan'];

// Function to handle character tab switching
function openCharacter(evt, characterName) {
    stopAutoSwap();
    const index = characters.indexOf(characterName);
    if (index !== -1) {
        currentCharacterIndex = index;
        showCharacter(index);
        resetAutoSwap();
    }
}

// Function to go to specific character via dots
function goToCharacter(index) {
    stopAutoSwap();
    if (index >= 0 && index < characters.length) {
        currentCharacterIndex = index;
        showCharacter(index);
        resetAutoSwap();
    }
}

// Function to change character with arrows
function changeCharacter(direction) {
    stopAutoSwap();
    currentCharacterIndex += direction;
    
    if (currentCharacterIndex < 0) {
        currentCharacterIndex = characters.length - 1;
    } else if (currentCharacterIndex >= characters.length) {
        currentCharacterIndex = 0;
    }
    
    showCharacter(currentCharacterIndex);
    resetAutoSwap();
}

// Function to show specific character
function showCharacter(index) {
    // Ensure index is valid
    if (index < 0 || index >= characters.length) {
        return;
    }
    
    // Hide all character content
    const characterContents = document.getElementsByClassName("character-content");
    for (let i = 0; i < characterContents.length; i++) {
        characterContents[i].classList.remove("active");
        characterContents[i].style.display = "none"; 
    }

    // Remove active class from all tab buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the selected character content
    const selectedContent = document.getElementById(characters[index]);
    if (selectedContent) {
        selectedContent.style.display = "block";
        setTimeout(() => {
            selectedContent.classList.add("active");
        }, 10);
    }
    
    // Activate corresponding tab button
    const btn = document.getElementById('btn-' + characters[index]);
    if (btn) {
        btn.classList.add("active");
    }
    
    updateDots();
}

// Function to update dot indicators
function updateDots() {
    const dots = document.querySelectorAll('.character-dot');
    dots.forEach((dot, index) => {
        if (index === currentCharacterIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto-swap functionality
function startAutoSwap() {
    if (autoSwapInterval) {
        clearInterval(autoSwapInterval);
    }
    autoSwapInterval = setInterval(() => {
        currentCharacterIndex = (currentCharacterIndex + 1) % characters.length;
        showCharacter(currentCharacterIndex);
        updateDots();
    }, 5000); // Change every 5 seconds
}

function stopAutoSwap() {
    if (autoSwapInterval) {
        clearInterval(autoSwapInterval);
        autoSwapInterval = null;
    }
}

function resetAutoSwap() {
    stopAutoSwap();
    // Small delay to ensure interval is cleared
    setTimeout(() => {
        startAutoSwap();
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 968) {
                    mobileMenuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 968 && 
                mainNav.classList.contains('active') &&
                !mainNav.contains(e.target) &&
                !mobileMenuToggle.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Header height is approx 65px
                window.scrollTo({
                    top: targetElement.offsetTop - 65,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    const headerLogo = document.getElementById('headerLogo');
    const heroSection = document.getElementById('hero');
    
    // Logo paths
    const heroLogo = 'assets/mainLogo.webp';
    const scrolledLogo = 'assets/Restart logo-2 (1).webp';
    
    // Function to handle header state and logo switching
    const handleHeaderScroll = () => {
        if (!heroSection || !headerLogo) return;
        
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + header.offsetHeight;
        
        if (scrollPosition < heroBottom) {
            // Still in hero section
            header.classList.remove('scrolled');
            const currentLogo = headerLogo.getAttribute('src');
            if (!currentLogo.includes('mainLogo.webp')) {
                headerLogo.src = heroLogo;
            }
        } else {
            // Past hero section
            header.classList.add('scrolled');
            const currentLogo = headerLogo.getAttribute('src');
            if (!currentLogo.includes('Restart logo-2 (1).webp')) {
                headerLogo.src = scrolledLogo;
            }
        }
    };

    // Add event listener
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Call once on load to set initial state
    handleHeaderScroll();
    
    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements with the 'animate-on-scroll' class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Initialize first character tab if needed (handled by HTML active class, but safe check)
    const activeTab = document.querySelector('.tab-btn.active');
    if (!activeTab) {
        const firstTab = document.querySelector('.tab-btn');
        if (firstTab) firstTab.click();
    }
    
    // Start auto-swap for characters
    const characterCarousel = document.querySelector('.character-carousel-wrapper');
    if (characterCarousel) {
        // Initialize dots
        updateDots();
        
        // Start auto-swap after a short delay
        setTimeout(() => {
            startAutoSwap();
        }, 1000);
        
        // Pause auto-swap on hover
        characterCarousel.addEventListener('mouseenter', stopAutoSwap);
        characterCarousel.addEventListener('mouseleave', () => {
            setTimeout(() => {
                startAutoSwap();
            }, 300);
        });
        
        // Touch swipe functionality for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        const swipeThreshold = 50; // Minimum distance for a swipe
        
        const carouselElement = document.querySelector('.character-carousel');
        if (carouselElement) {
            carouselElement.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });
            
            carouselElement.addEventListener('touchend', function(e) {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }
        
        function handleSwipe() {
            const swipeDistance = touchStartX - touchEndX;
            
            // Swipe right (next character) - in RTL, right swipe means going to next
            if (swipeDistance < -swipeThreshold) {
                changeCharacter(1);
            }
            // Swipe left (previous character) - in RTL, left swipe means going to previous
            else if (swipeDistance > swipeThreshold) {
                changeCharacter(-1);
            }
            
            // Reset touch positions
            touchStartX = 0;
            touchEndX = 0;
        }
    }
});
