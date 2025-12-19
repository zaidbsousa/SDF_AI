// Character Detail Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get character ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('id') || 'aya';
    
    // Load character data
    if (characterData && characterData[characterId]) {
        loadCharacter(characterData[characterId]);
    } else {
        // Redirect to home if character not found
        window.location.href = 'index.html';
    }
    
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
});

function loadCharacter(character) {
    // Update page title
    document.title = `${character.name} (${character.nameEn}) - شخصيات حملة Restart`;
    
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
    if (voiceSource) {
        voiceSource.src = character.voice;
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
                <a href="character.html?id=${id}" class="character-nav-link">
                    <img src="${otherChar.image}" alt="${otherChar.name}">
                    <span>${otherChar.name}</span>
                </a>
            `;
        }).join('');
    }
}

