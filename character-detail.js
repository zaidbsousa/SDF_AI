// Character Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get character ID from clean URL or query parameter (for backwards compatibility)
    let characterId = 'aya';
    const path = window.location.pathname;
    
    // Check for clean URL format: /character/aya, /character/atta, /character/rawan
    const cleanUrlMatch = path.match(/\/character\/(aya|atta|rawan)$/);
    if (cleanUrlMatch) {
        characterId = cleanUrlMatch[1];
    } else {
        // Fallback to query parameter for backwards compatibility
        const urlParams = new URLSearchParams(window.location.search);
        characterId = urlParams.get('id') || 'aya';
    }
    
    // Show skeleton loading initially
    showSkeleton();
    
    // Load character data with a small delay to show skeleton
    setTimeout(() => {
        if (characterData && characterData[characterId]) {
            loadCharacter(characterData[characterId]);
            hideSkeleton();
        } else {
            // Redirect to home if character not found
            window.location.href = '/';
        }
    }, 300);
    
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
        
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 968) {
                    mobileMenuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        
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
                window.scrollTo({
                    top: targetElement.offsetTop - 65,
                    behavior: 'smooth'
                });
            }
        });
    }
    
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

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    const headerLogo = document.getElementById('headerLogo');
    const heroSection = document.getElementById('characterHero');
    
    // Logo paths
    const heroLogo = '/assets/mainLogo.webp';
    const scrolledLogo = '/assets/Restart logo-2 (1).webp';
    
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
});

// Skeleton Loading Functions
function showSkeleton() {
    const heroSkeleton = document.getElementById('heroSkeleton');
    const quoteSkeleton = document.getElementById('quoteSkeleton');
    const detailsSkeleton = document.getElementById('detailsSkeleton');
    const voiceSkeleton = document.getElementById('voiceSkeleton');
    const navSkeleton = document.getElementById('navSkeleton');
    
    if (heroSkeleton) heroSkeleton.style.display = 'flex';
    if (quoteSkeleton) quoteSkeleton.style.display = 'flex';
    if (detailsSkeleton) detailsSkeleton.style.display = 'grid';
    if (voiceSkeleton) voiceSkeleton.style.display = 'flex';
    if (navSkeleton) navSkeleton.style.display = 'grid';
}

function hideSkeleton() {
    const heroSkeleton = document.getElementById('heroSkeleton');
    const characterHeroContent = document.getElementById('characterHeroContent');
    const quoteSkeleton = document.getElementById('quoteSkeleton');
    const characterQuoteSection = document.getElementById('characterQuoteSection');
    const detailsSkeleton = document.getElementById('detailsSkeleton');
    const characterDetailsGrid = document.getElementById('characterDetailsGrid');
    const voiceSkeleton = document.getElementById('voiceSkeleton');
    const voicePlayerSection = document.getElementById('voicePlayerSection');
    const navSkeleton = document.getElementById('navSkeleton');
    const otherCharactersSection = document.getElementById('otherCharactersSection');
    
    // Hide skeletons
    if (heroSkeleton) heroSkeleton.style.display = 'none';
    if (quoteSkeleton) quoteSkeleton.style.display = 'none';
    if (detailsSkeleton) detailsSkeleton.style.display = 'none';
    if (voiceSkeleton) voiceSkeleton.style.display = 'none';
    if (navSkeleton) navSkeleton.style.display = 'none';
    
    // Show actual content with fade-in animation
    if (characterHeroContent) {
        characterHeroContent.style.display = 'flex';
        characterHeroContent.style.opacity = '0';
        characterHeroContent.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            characterHeroContent.style.opacity = '1';
        }, 50);
    }
    
    if (characterQuoteSection) {
        characterQuoteSection.style.display = 'block';
        characterQuoteSection.style.opacity = '0';
        characterQuoteSection.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            characterQuoteSection.style.opacity = '1';
        }, 100);
    }
    
    if (characterDetailsGrid) {
        characterDetailsGrid.style.display = 'grid';
        characterDetailsGrid.style.opacity = '0';
        characterDetailsGrid.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            characterDetailsGrid.style.opacity = '1';
        }, 150);
    }
    
    if (voicePlayerSection) {
        voicePlayerSection.style.display = 'block';
        voicePlayerSection.style.opacity = '0';
        voicePlayerSection.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            voicePlayerSection.style.opacity = '1';
        }, 200);
    }
    
    if (otherCharactersSection) {
        otherCharactersSection.style.display = 'block';
        otherCharactersSection.style.opacity = '0';
        otherCharactersSection.style.transition = 'opacity 0.5s ease-in';
        setTimeout(() => {
            otherCharactersSection.style.opacity = '1';
        }, 250);
    }
}

function loadCharacter(character) {
    // Update page title
    document.title = `${character.name} (${character.nameEn}) - شخصيات حملة Restart`;
    
    // Update meta tags for clean URLs
    const cleanUrl = `/character/${character.id}`;
    const fullUrl = `https://test.zagent.ps${cleanUrl}`;
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;
    
    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
    }
    ogUrl.content = fullUrl;
    
    // Update Twitter URL
    let twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (!twitterUrl) {
        twitterUrl = document.createElement('meta');
        twitterUrl.setAttribute('name', 'twitter:url');
        document.head.appendChild(twitterUrl);
    }
    twitterUrl.content = fullUrl;
    
    // Update history for clean URL (without page reload)
    if (window.history && window.history.pushState) {
        window.history.pushState({ character: character.id }, '', cleanUrl);
    }
    
    // Update hero section
    const characterHeroImage = document.getElementById('characterHeroImage');
    if (characterHeroImage) {
        characterHeroImage.src = character.image;
        characterHeroImage.alt = `${character.name} - ${character.nameEn}`;
    }
    
    const characterHeroRole = document.getElementById('characterHeroRole');
    if (characterHeroRole) {
        characterHeroRole.textContent = character.role;
    }
    
    const characterHeroName = document.getElementById('characterHeroName');
    if (characterHeroName) {
        characterHeroName.textContent = character.name;
    }
    
    const characterHeroNameEn = document.getElementById('characterHeroNameEn');
    if (characterHeroNameEn) {
        characterHeroNameEn.textContent = character.nameEn;
    }
    
    const characterHeroQuote = document.getElementById('characterHeroQuote');
    if (characterHeroQuote) {
        characterHeroQuote.textContent = `"${character.quote}"`;
    }
    
    // Update quote
    const characterQuote = document.getElementById('characterQuote');
    if (characterQuote) {
        characterQuote.textContent = `"${character.quote}"`;
    }
    
    // Update audience
    const characterAudience = document.getElementById('characterAudience');
    if (characterAudience) {
        characterAudience.textContent = character.audience;
    }
    
    // Update language
    const characterLanguage = document.getElementById('characterLanguage');
    if (characterLanguage) {
        characterLanguage.textContent = character.language;
    }
    
    // Update values
    const characterValues = document.getElementById('characterValues');
    if (characterValues) {
        characterValues.innerHTML = character.values.map(value => 
            `<span class="value-tag">${value}</span>`
        ).join('');
    }
    
    // Update style traits
    const characterTraits = document.getElementById('characterTraits');
    if (characterTraits) {
        characterTraits.innerHTML = character.style.traits.map(trait => 
            `<span class="trait-tag">${trait}</span>`
        ).join('');
    }
    
    // Update sample quotes
    const sampleQuotes = document.getElementById('sampleQuotes');
    if (sampleQuotes) {
        sampleQuotes.innerHTML = character.sampleQuotes.map(quote => 
            `<div class="sample-quote-item">"${quote}"</div>`
        ).join('');
    }
    
    // Update avoids
    const characterAvoids = document.getElementById('characterAvoids');
    if (characterAvoids) {
        characterAvoids.innerHTML = character.avoids.map(avoid => 
            `<div class="avoid-item">✘ ${avoid}</div>`
        ).join('');
    }
    
    // Update voice player
    const voiceSource = document.getElementById('voiceSource');
    const characterAudio = document.getElementById('characterAudio');
    if (voiceSource && characterAudio) {
        voiceSource.src = character.voice;
        // Reload the audio element to load the new source
        characterAudio.load();
    }
    
    const characterNameVoice = document.getElementById('characterNameVoice');
    if (characterNameVoice) {
        characterNameVoice.textContent = character.name;
    }
    
    // Update campaign roles
    const campaignRoles = document.getElementById('campaignRoles');
    if (campaignRoles) {
        const roles = character.campaignRoles;
        campaignRoles.innerHTML = `
            <div class="role-item ${roles.general ? 'active' : ''}">
                <i class="fas fa-check-circle"></i>
                <span>منشورات توعوية عامة</span>
            </div>
            <div class="role-item ${roles.girlsContent ? 'active' : ''}">
                <i class="fas ${roles.girlsContent ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <span>محتوى البنات</span>
            </div>
            <div class="role-item active">
                <i class="fas fa-check-circle"></i>
                <span>البودكاست (Restart Minute) - ${roles.podcast}</span>
            </div>
            <div class="role-item ${roles.videos ? 'active' : ''}">
                <i class="fas ${roles.videos ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <span>الفيديوهات القصيرة</span>
            </div>
            <div class="role-item ${roles.safeSpaces ? 'active' : ''}">
                <i class="fas ${roles.safeSpaces ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <span>جلسات الأمان للفتيات</span>
            </div>
            <div class="role-item ${roles.displacedContent ? 'active' : ''}">
                <i class="fas ${roles.displacedContent ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <span>المحتوى للمخيمات والنازحين</span>
            </div>
            <div class="role-item ${roles.officialMessages ? 'active' : ''}">
                <i class="fas ${roles.officialMessages ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                <span>الرسائل الرسمية</span>
            </div>
        `;
    }
    
    // Update navigation links to other characters
    const otherCharacters = Object.keys(characterData).filter(id => id !== character.id);
    const characterNav = document.getElementById('characterNav');
    if (characterNav) {
        characterNav.innerHTML = otherCharacters.map(id => {
            const otherChar = characterData[id];
            return `
                <a href="/character/${id}" class="character-nav-link">
                    <img src="${otherChar.image}" alt="${otherChar.name}">
                    <span>${otherChar.name}</span>
                </a>
            `;
        }).join('');
    }
}

