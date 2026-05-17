// JavaScript for Restart Campaign Website

// Character carousel functionality
let currentCharacterIndex = 0;
let autoSwapInterval = null;
const characters = ['aya', 'atta', 'rawan'];
const characterNames = ['aya', 'atta', 'rawan'];

const seasonTwoVideos = [
    {
        id: 'k3UB1wWAFU8',
        title: 'مش لازم تحترق عشان تثبت وجودك.. أنت بتستحق الراحة',
        category: ['rest']
    },
    {
        id: 'st8xdE-uNY0',
        title: 'راحتك مش رفاهية.. قوة كلمة "لأ" في حماية طاقتك',
        category: ['rest']
    },
    {
        id: 'yuRsUc72FSs',
        title: 'أحياناً يكون إنجازك الأكبر هو "أنت".. كيف نرجع لأنفسنا؟',
        category: ['feelings']
    },
    {
        id: 'tJPZw1UMnYw',
        title: 'طلب المساعدة ليس ضعفاً.. بل قمة الذكاء العاطفي',
        category: ['support']
    },
    {
        id: 'g88MIfMPhe8',
        title: 'إلى الغارقين في سباق لا ينتهي: استراحة محارب',
        category: ['rest', 'stress']
    },
    {
        id: 'mYzGL0f2eqI',
        title: 'بين ضجيج الحياة وتسارع الأيام.. أين أنت؟',
        category: ['stress']
    },
    {
        id: 'wp40Bds6J4k',
        title: 'جسمك بيحكي اللي قلبك مش قادر يقوله',
        category: ['stress', 'feelings']
    },
    {
        id: 'W2Og0StF-dA',
        title: 'دقيقة واحدة.. ممكن تغيّر كل شي',
        category: ['minute']
    },
    {
        id: '_GZjIG-ZMKI',
        title: 'حاسة بضغط وتوتر؟ جربي تمرين الدقيقة الواحدة',
        category: ['minute', 'stress']
    },
    {
        id: 'eKUaU9Y1iPU',
        title: 'تسمية الشعور.. هي أول خطوة للراحة',
        category: ['feelings']
    },
    {
        id: '8qKfFQayVXk',
        title: 'لأنك بتستحق/ي تكون/ي بخير.. رحلة Restart مكملة معك',
        category: ['support']
    },
    {
        id: 'v9q3Ytr1yRU',
        title: 'الحلقة الثالثة: مشاعرك مش حكم عليكي.. هي مجرد رسالة',
        category: ['feelings', 'minute']
    },
    {
        id: 'LHZ_FgxbdAY',
        title: 'لو حاسة إن الأحمال تقيلة.. وقفي شوي واسمعي هالرسالة',
        category: ['support', 'stress']
    },
    {
        id: 'f00MN3lr7KU',
        title: 'أهم كلمة ممكن تحكيها لشخص بيمر بوقت صعب: "أنا معك"',
        category: ['support']
    },
    {
        id: '1f-PgsUEqXI',
        title: 'Restart .. مسموح نتعب.. بس مش مسموح نضيع',
        category: ['support']
    },
    {
        id: 'G5CGQpWT0zg',
        title: 'الحلقة الأولى: دقيقة Restart .. تنفّس وارجع لنفسك',
        category: ['minute']
    },
    {
        id: 'Urijn2ZrRTQ',
        title: 'إذا ما عرفتي تحددي، هذه 3 علامات بتقول إنك تعبانة',
        category: ['stress', 'feelings']
    },
    {
        id: 'yxqzNWEzncw',
        title: 'الحلقة الثانية .. دقيقة تهوّن عليك.. وتخلّيك تبدأ من جديد',
        category: ['minute']
    }
];

const seasonCategoryLabels = {
    minute: 'دقيقة Restart',
    rest: 'الراحة',
    stress: 'الضغط والتوتر',
    support: 'الدعم',
    feelings: 'المشاعر'
};

let seasonActiveFilter = 'all';
let seasonCurrentVideoId = seasonTwoVideos[0].id;
let seasonCarouselRtlType = null;
let seasonCarouselSuppressClick = false;

function escapeHtml(value) {
    return value.replace(/[&<>"']/g, function(char) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[char];
    });
}

function getSeasonVideoThumb(videoId) {
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function getSeasonVideoLabel(video) {
    return seasonCategoryLabels[video.category[0]] || 'الموسم الثاني';
}

function getFilteredSeasonVideos() {
    if (seasonActiveFilter === 'all') {
        return seasonTwoVideos;
    }

    return seasonTwoVideos.filter(video => video.category.includes(seasonActiveFilter));
}

function getSeasonCarouselRtlType() {
    if (seasonCarouselRtlType) {
        return seasonCarouselRtlType;
    }

    const outer = document.createElement('div');
    const inner = document.createElement('div');
    outer.style.width = '4px';
    outer.style.height = '1px';
    outer.style.overflow = 'scroll';
    outer.style.direction = 'rtl';
    outer.style.visibility = 'hidden';
    outer.style.position = 'absolute';
    inner.style.width = '8px';
    inner.style.height = '1px';
    outer.appendChild(inner);
    document.body.appendChild(outer);

    if (outer.scrollLeft > 0) {
        seasonCarouselRtlType = 'default';
    } else {
        outer.scrollLeft = 1;
        seasonCarouselRtlType = outer.scrollLeft === 0 ? 'negative' : 'reverse';
    }

    document.body.removeChild(outer);
    return seasonCarouselRtlType;
}

function getSeasonCarouselMaxScroll(grid) {
    return Math.max(0, grid.scrollWidth - grid.clientWidth);
}

function getSeasonCarouselPosition(grid) {
    const maxScroll = getSeasonCarouselMaxScroll(grid);

    if (getComputedStyle(grid).direction !== 'rtl') {
        return grid.scrollLeft;
    }

    const scrollType = getSeasonCarouselRtlType();

    if (scrollType === 'negative') {
        return -grid.scrollLeft;
    }

    if (scrollType === 'default') {
        return maxScroll - grid.scrollLeft;
    }

    return grid.scrollLeft;
}

function setSeasonCarouselPosition(grid, position, behavior = 'smooth') {
    const maxScroll = getSeasonCarouselMaxScroll(grid);
    const nextPosition = Math.max(0, Math.min(position, maxScroll));
    let nextScrollLeft = nextPosition;

    if (getComputedStyle(grid).direction === 'rtl') {
        const scrollType = getSeasonCarouselRtlType();

        if (scrollType === 'negative') {
            nextScrollLeft = -nextPosition;
        } else if (scrollType === 'default') {
            nextScrollLeft = maxScroll - nextPosition;
        }
    }

    if (behavior === 'auto') {
        grid.scrollLeft = nextScrollLeft;
        return;
    }

    grid.scrollTo({
        left: nextScrollLeft,
        behavior
    });
}

function loadSeasonVideo(video) {
    const featureFrame = document.getElementById('seasonFeatureFrame');
    const featurePlayer = document.getElementById('seasonFeaturePlayer');
    if (!featureFrame || !featurePlayer) return;

    const videoTitle = escapeHtml(video.title);
    featureFrame.innerHTML = `
        <iframe
            src="https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1"
            title="${videoTitle}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
        </iframe>
    `;
    featurePlayer.classList.add('is-playing');
}

function setSeasonFeature(video, shouldPlay = false) {
    seasonCurrentVideoId = video.id;

    const featureImage = document.getElementById('seasonFeatureImage');
    const featureTitle = document.getElementById('seasonFeatureTitle');
    const featureLabel = document.getElementById('seasonFeatureLabel');
    const featurePlayer = document.getElementById('seasonFeaturePlayer');
    const featureFrame = document.getElementById('seasonFeatureFrame');

    if (featureImage) {
        featureImage.src = getSeasonVideoThumb(video.id);
        featureImage.alt = video.title;
    }

    if (featureTitle) {
        featureTitle.textContent = video.title;
    }

    if (featureLabel) {
        featureLabel.textContent = getSeasonVideoLabel(video);
    }

    if (featurePlayer && featureFrame && !shouldPlay) {
        featurePlayer.classList.remove('is-playing');
        featureFrame.innerHTML = '';
    }

    document.querySelectorAll('.season-video-card').forEach(card => {
        card.classList.toggle('active', card.dataset.videoId === video.id);
    });

    if (shouldPlay) {
        loadSeasonVideo(video);
    }
}

function updateSeasonCarouselControls() {
    const grid = document.getElementById('seasonVideosGrid');
    if (!grid) return;

    const previousButton = document.getElementById('seasonCarouselPrev');
    const nextButton = document.getElementById('seasonCarouselNext');
    const maxScroll = getSeasonCarouselMaxScroll(grid);
    const position = getSeasonCarouselPosition(grid);
    const canScroll = maxScroll > 4;

    if (previousButton) {
        previousButton.disabled = !canScroll || position <= 4;
    }

    if (nextButton) {
        nextButton.disabled = !canScroll || position >= maxScroll - 4;
    }
}

function scrollSeasonCarousel(direction) {
    const grid = document.getElementById('seasonVideosGrid');
    if (!grid) return;

    const position = getSeasonCarouselPosition(grid);
    setSeasonCarouselPosition(grid, position + (direction * grid.clientWidth * 0.85));

    window.setTimeout(updateSeasonCarouselControls, 350);
}

function initSeasonCarouselDrag(grid) {
    let isDragging = false;
    let didDrag = false;
    let startX = 0;
    let startPosition = 0;
    let targetPosition = 0;
    let dragFrame = null;
    let momentumFrame = null;
    let velocity = 0;
    let lastMoveTime = 0;
    let lastMovePosition = 0;

    const applyDragPosition = () => {
        dragFrame = null;
        setSeasonCarouselPosition(grid, targetPosition, 'auto');
        updateSeasonCarouselControls();
    };

    const stopMomentum = () => {
        if (momentumFrame) {
            window.cancelAnimationFrame(momentumFrame);
            momentumFrame = null;
        }
    };

    const startMomentum = initialVelocity => {
        const maxVelocity = 2.8;
        let momentumVelocity = Math.max(-maxVelocity, Math.min(initialVelocity, maxVelocity));
        let momentumPosition = getSeasonCarouselPosition(grid);
        let lastMomentumTime = performance.now();

        stopMomentum();

        const glide = now => {
            const deltaTime = Math.min(now - lastMomentumTime, 32);
            lastMomentumTime = now;
            momentumPosition += momentumVelocity * deltaTime;

            const maxScroll = getSeasonCarouselMaxScroll(grid);
            if (momentumPosition <= 0 || momentumPosition >= maxScroll) {
                momentumPosition = Math.max(0, Math.min(momentumPosition, maxScroll));
                momentumVelocity = 0;
            }

            setSeasonCarouselPosition(grid, momentumPosition, 'auto');
            updateSeasonCarouselControls();

            momentumVelocity *= Math.pow(0.92, deltaTime / 16.67);

            if (Math.abs(momentumVelocity) > 0.025) {
                momentumFrame = window.requestAnimationFrame(glide);
            } else {
                momentumFrame = null;
            }
        };

        if (Math.abs(momentumVelocity) > 0.08) {
            momentumFrame = window.requestAnimationFrame(glide);
        }
    };

    grid.addEventListener('pointerdown', event => {
        if (event.button !== undefined && event.button !== 0) return;

        stopMomentum();
        isDragging = true;
        didDrag = false;
        startX = event.clientX;
        startPosition = getSeasonCarouselPosition(grid);
        targetPosition = startPosition;
        velocity = 0;
        lastMoveTime = performance.now();
        lastMovePosition = startPosition;
        grid.classList.add('is-dragging');
        grid.setPointerCapture?.(event.pointerId);
    });

    grid.addEventListener('pointermove', event => {
        if (!isDragging) return;

        const deltaX = event.clientX - startX;

        if (Math.abs(deltaX) > 5) {
            event.preventDefault();
            didDrag = true;
            seasonCarouselSuppressClick = true;

            const isRtl = getComputedStyle(grid).direction === 'rtl';
            targetPosition = startPosition + (isRtl ? deltaX : -deltaX);

            const now = performance.now();
            const deltaTime = now - lastMoveTime;
            if (deltaTime > 0) {
                const instantVelocity = (targetPosition - lastMovePosition) / deltaTime;
                velocity = (velocity * 0.55) + (instantVelocity * 0.45);
                lastMoveTime = now;
                lastMovePosition = targetPosition;
            }

            if (!dragFrame) {
                dragFrame = window.requestAnimationFrame(applyDragPosition);
            }
        }
    });

    const stopDrag = event => {
        if (!isDragging) return;

        isDragging = false;
        grid.classList.remove('is-dragging');
        grid.releasePointerCapture?.(event.pointerId);

        if (dragFrame) {
            window.cancelAnimationFrame(dragFrame);
            applyDragPosition();
        }

        if (didDrag) {
            startMomentum(velocity * 1.15);

            window.setTimeout(() => {
                seasonCarouselSuppressClick = false;
            }, 180);
        }
    };

    grid.addEventListener('pointerup', stopDrag);
    grid.addEventListener('pointercancel', stopDrag);
    grid.addEventListener('lostpointercapture', () => {
        isDragging = false;
        grid.classList.remove('is-dragging');
        if (dragFrame) {
            window.cancelAnimationFrame(dragFrame);
            dragFrame = null;
        }
        velocity = 0;
    });
}

function renderSeasonVideos() {
    const grid = document.getElementById('seasonVideosGrid');
    if (!grid) return;

    const filteredVideos = getFilteredSeasonVideos();

    grid.innerHTML = filteredVideos.map(video => `
        <button class="season-video-card" type="button" data-video-id="${video.id}">
            <span class="season-video-thumb">
                <img src="${getSeasonVideoThumb(video.id)}" alt="${escapeHtml(video.title)}" loading="lazy">
                <span class="season-video-play"><i class="fas fa-play"></i></span>
            </span>
            <span class="season-video-meta">
                <span class="season-video-tag">${getSeasonVideoLabel(video)}</span>
                <span class="season-video-title">${escapeHtml(video.title)}</span>
            </span>
        </button>
    `).join('');

    grid.querySelectorAll('.season-video-card').forEach(card => {
        const video = seasonTwoVideos.find(item => item.id === card.dataset.videoId);
        if (!video) return;

        card.addEventListener('click', event => {
            if (seasonCarouselSuppressClick) {
                event.preventDefault();
                return;
            }

            setSeasonFeature(video, true);
            document.getElementById('season-two')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    grid.querySelectorAll('.season-video-card').forEach(card => {
        card.classList.toggle('active', card.dataset.videoId === seasonCurrentVideoId);
    });

    setSeasonCarouselPosition(grid, 0, 'auto');
    updateSeasonCarouselControls();

    if (filteredVideos.length > 0) {
        const activeVideo = filteredVideos.find(video => video.id === seasonCurrentVideoId) || filteredVideos[0];
        setSeasonFeature(activeVideo, false);
    }
}

function initSeasonVideos() {
    const section = document.getElementById('season-two');
    if (!section) return;

    const filters = document.querySelectorAll('.season-filter');
    const featurePoster = document.getElementById('seasonFeaturePoster');
    const carousel = document.getElementById('seasonVideosGrid');
    const previousButton = document.getElementById('seasonCarouselPrev');
    const nextButton = document.getElementById('seasonCarouselNext');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            seasonActiveFilter = filter.dataset.filter || 'all';

            filters.forEach(button => {
                const isActive = button === filter;
                button.classList.toggle('active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });

            renderSeasonVideos();
        });
    });

    if (featurePoster) {
        featurePoster.addEventListener('click', () => {
            const activeVideo = seasonTwoVideos.find(video => video.id === seasonCurrentVideoId) || seasonTwoVideos[0];

            loadSeasonVideo(activeVideo);
        });
    }

    if (previousButton) {
        previousButton.addEventListener('click', () => scrollSeasonCarousel(-1));
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => scrollSeasonCarousel(1));
    }

    if (carousel) {
        carousel.addEventListener('scroll', updateSeasonCarouselControls, { passive: true });
        carousel.addEventListener('dragstart', event => event.preventDefault());
        initSeasonCarouselDrag(carousel);
        window.addEventListener('resize', updateSeasonCarouselControls);
    }

    renderSeasonVideos();
}

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

    initSeasonVideos();

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
