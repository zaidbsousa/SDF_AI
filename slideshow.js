// JavaScript for SDF AI Website Slideshow

document.addEventListener('DOMContentLoaded', function() {
    // Slideshow Configuration
    const slideshowConfig = {
        autoPlayInterval: 8000, // 8 seconds between slides
        transitionSpeed: 0.5, // 0.5 seconds transition
        pauseOnHover: true,
        resumeDelay: 1000, // Resume autoplay after 1 second of inactivity
        initialSlide: 0 // Start with first character (Aya)
    };

    // Get all slides and indicators
    const slides = document.querySelectorAll('.character-slide');
    const indicators = document.querySelectorAll('.character-indicator');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    let currentSlideIndex = 0;
    let slideInterval;
    let isPaused = false;
    
    // Initialize slideshow
    function initSlideshow() {
        // Set initial slide
        showSlide(slideshowConfig.initialSlide);
        
        // Start autoplay immediately
        startAutoPlay();
        
        // Add event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                resetAutoPlay();
            });
        });
        
        // Add event listeners for arrows
        prevArrow.addEventListener('click', () => {
            showSlide(currentSlideIndex - 1);
            resetAutoPlay();
        });

        nextArrow.addEventListener('click', () => {
            showSlide(currentSlideIndex + 1);
            resetAutoPlay();
        });
        
        // Pause on hover if configured
        if (slideshowConfig.pauseOnHover) {
            const slideshowContainer = document.querySelector('.character-slideshow-container');
            slideshowContainer.addEventListener('mouseenter', pauseAutoPlay);
            slideshowContainer.addEventListener('mouseleave', resumeAutoPlay);
        }
    }
    
    // Show a specific slide by index
    function showSlide(index) {
        // Get the direction of the transition
        const direction = index > currentSlideIndex ? 'right' : 'left';
        
        // Store the previous slide index
        const prevIndex = currentSlideIndex;
        
        // Update current index
        currentSlideIndex = index;
        
        // Handle index wrapping
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        } else if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        
        // Remove active class from all slides and indicators
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.classList.remove('prev');
            
            // Set initial position based on direction
            if (direction === 'right') {
                slide.style.transform = 'translateX(100%)';
            } else {
                slide.style.transform = 'translateX(-100%)';
            }
        });
        
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Mark the previous slide
        if (prevIndex !== currentSlideIndex) {
            slides[prevIndex].classList.add('prev');
            
            // Position the previous slide to the left
            slides[prevIndex].style.transform = 'translateX(-100%)';
        }
        
        // Position the new active slide
        slides[currentSlideIndex].style.transform = 'translateX(0)';
        
        // Add active class to current slide and indicator
        slides[currentSlideIndex].classList.add('active');
        indicators[currentSlideIndex].classList.add('active');
        
        // Add animation to the active slide's content
        const activeCard = slides[currentSlideIndex].querySelector('.character-card');
        if (activeCard) {
            activeCard.style.opacity = '0';
            activeCard.style.transform = 'translateY(20px)';
            
            // Trigger reflow
            void activeCard.offsetWidth;
            
            // Add animation
            activeCard.style.transition = 'all 0.6s ease-in-out';
            activeCard.style.opacity = '1';
            activeCard.style.transform = 'translateY(0)';
        }
    }
    
    // Show next slide
    function showNextSlide() {
        showSlide(currentSlideIndex + 1);
        resetAutoPlay();
    }
    
    // Start automatic slideshow
    function startAutoPlay() {
        // Clear any existing interval
        clearInterval(slideInterval);
        
        // Set new interval
        slideInterval = setInterval(() => {
            if (!isPaused) {
                showNextSlide();
            }
        }, slideshowConfig.autoPlayInterval);
    }
    
    // Reset autoplay after user interaction
    function resetAutoPlay() {
        startAutoPlay();
    }
    
    // Pause autoplay (for hover)
    function pauseAutoPlay() {
        isPaused = true;
    }
    
    // Resume autoplay after delay
    function resumeAutoPlay() {
        setTimeout(() => {
            isPaused = false;
        }, slideshowConfig.resumeDelay);
    }
    
    // Initialize the slideshow
    initSlideshow();
    
    // Function to handle smooth scrolling for navigation
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
    
    // Add animation on scroll for character cards (keep from original script)
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
    
    // Add initial animation classes (keep from original script)
    const animatedElements = document.querySelectorAll('.character-card, .story-card, .about-content');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-in-out';
    });
    
    // Add animate class when elements come into view (keep from original script)
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load (keep from original script)
    animateOnScroll();
});
