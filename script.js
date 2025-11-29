// Aromatic Coffee Limited - Interactive Features

// Coffee Menu Data
const menuItems = [
    // Espresso Category
    {
        id: 1,
        name: "Classic Espresso",
        category: "espresso",
        price: "$2.50",
        description: "Rich, bold espresso shot with perfect crema. The foundation of all great coffee drinks.",
        icon: "fas fa-coffee"
    },
    {
        id: 2,
        name: "Double Espresso",
        category: "espresso",
        price: "$3.50",
        description: "Two shots of our signature espresso for those who need an extra kick.",
        icon: "fas fa-coffee"
    },
    {
        id: 3,
        name: "Americano",
        category: "espresso",
        price: "$3.00",
        description: "Espresso shots diluted with hot water, creating a coffee similar to drip coffee.",
        icon: "fas fa-mug-hot"
    },
    {
        id: 4,
        name: "Cappuccino",
        category: "espresso",
        price: "$4.25",
        description: "Equal parts espresso, steamed milk, and milk foam. A classic Italian favorite.",
        icon: "fas fa-coffee"
    },
    {
        id: 5,
        name: "Latte",
        category: "espresso",
        price: "$4.75",
        description: "Espresso with steamed milk and a light layer of foam. Smooth and creamy.",
        icon: "fas fa-mug-hot"
    },
    
    // Specialty Category
    {
        id: 6,
        name: "Caramel Macchiato",
        category: "specialty",
        price: "$5.25",
        description: "Vanilla-flavored drink marked with espresso and finished with caramel drizzle.",
        icon: "fas fa-star"
    },
    {
        id: 7,
        name: "Mocha",
        category: "specialty",
        price: "$4.95",
        description: "Rich espresso combined with chocolate syrup and steamed milk, topped with whipped cream.",
        icon: "fas fa-heart"
    },
    {
        id: 8,
        name: "Vanilla Latte",
        category: "specialty",
        price: "$4.95",
        description: "Our signature latte enhanced with vanilla syrup for a sweet, aromatic experience.",
        icon: "fas fa-leaf"
    },
    {
        id: 9,
        name: "Hazelnut Cappuccino",
        category: "specialty",
        price: "$4.75",
        description: "Traditional cappuccino infused with rich hazelnut flavor.",
        icon: "fas fa-seedling"
    },
    {
        id: 10,
        name: "Cinnamon Dolce Latte",
        category: "specialty",
        price: "$5.15",
        description: "Steamed milk and espresso with cinnamon dolce syrup, topped with whipped cream and cinnamon.",
        icon: "fas fa-magic"
    },
    
    // Cold Brew Category
    {
        id: 11,
        name: "Cold Brew",
        category: "cold",
        price: "$3.75",
        description: "Smooth, refreshing coffee steeped in cold water for 12 hours. Less acidic, more flavor.",
        icon: "fas fa-snowflake"
    },
    {
        id: 12,
        name: "Iced Latte",
        category: "cold",
        price: "$4.50",
        description: "Chilled espresso with cold milk served over ice. Perfect for warm days.",
        icon: "fas fa-glass-whiskey"
    },
    {
        id: 13,
        name: "Frappe",
        category: "cold",
        price: "$5.25",
        description: "Blended iced coffee drink with milk and ice, topped with whipped cream.",
        icon: "fas fa-blender"
    },
    {
        id: 14,
        name: "Nitro Cold Brew",
        category: "cold",
        price: "$4.25",
        description: "Cold brew coffee infused with nitrogen for a creamy, smooth texture.",
        icon: "fas fa-tint"
    },
    {
        id: 15,
        name: "Iced Caramel Macchiato",
        category: "cold",
        price: "$5.75",
        description: "Iced version of our popular caramel macchiato with vanilla and caramel flavors.",
        icon: "fas fa-cocktail"
    },
    
    // Pastries Category
    {
        id: 16,
        name: "Chocolate Croissant",
        category: "pastries",
        price: "$3.25",
        description: "Buttery, flaky croissant filled with rich dark chocolate.",
        icon: "fas fa-bread-slice"
    },
    {
        id: 17,
        name: "Blueberry Muffin",
        category: "pastries",
        price: "$2.75",
        description: "Fresh-baked muffin bursting with juicy blueberries and a crumbly top.",
        icon: "fas fa-cookie"
    },
    {
        id: 18,
        name: "Cinnamon Roll",
        category: "pastries",
        price: "$3.50",
        description: "Warm, gooey cinnamon roll with cream cheese frosting.",
        icon: "fas fa-cookie-bite"
    },
    {
        id: 19,
        name: "Coffee Cake",
        category: "pastries",
        price: "$3.75",
        description: "Moist coffee-flavored cake with streusel topping. Perfect with your morning coffee.",
        icon: "fas fa-birthday-cake"
    },
    {
        id: 20,
        name: "Almond Biscotti",
        category: "pastries",
        price: "$2.50",
        description: "Twice-baked Italian cookies with almonds, perfect for dipping in coffee.",
        icon: "fas fa-cookie"
    }
];

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const categoryButtons = document.querySelectorAll('.category-btn');
const menuGrid = document.getElementById('menu-grid');
const contactForm = document.getElementById('contact-form');
const navbar = document.getElementById('navbar');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    initializeNavigation();
    initializeScrollEffects();
    initializeForms();
    initializeAnimations();
});

// Menu Functionality
function initializeMenu() {
    displayMenuItems('all');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter menu items
            const category = button.getAttribute('data-category');
            displayMenuItems(category);
        });
    });
}

function displayMenuItems(category) {
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    menuGrid.innerHTML = '';
    
    filteredItems.forEach((item, index) => {
        const menuItemElement = createMenuItemElement(item, index);
        menuGrid.appendChild(menuItemElement);
    });
    
    // Add animation delay for staggered effect
    const items = menuGrid.querySelectorAll('.menu-item');
    items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });
}

// Format price for Sierra Leonean Leone (Le)
function formatPrice(priceStr) {
    if (typeof priceStr !== 'string') return priceStr;
    // Replace a leading $ with 'Le '
    return priceStr.replace(/^\$/,'Le ');
}

function createMenuItemElement(item, index) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
        <div class="menu-item-icon">
            <i class="${item.icon}"></i>
        </div>
        <h4>${item.name}</h4>
        <p class="menu-item-description">${item.description}</p>
        <div class="menu-item-price">${formatPrice(item.price)}</div>
    `;
    
    // Add hover effect
    menuItem.addEventListener('mouseenter', () => {
        menuItem.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    menuItem.addEventListener('mouseleave', () => {
        menuItem.style.transform = 'translateY(0) scale(1)';
    });
    
    return menuItem;
}

// Navigation Functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.about-content, .gallery-item, .contact-item').forEach(el => {
        observer.observe(el);
    });
}

// Form Handling
function initializeForms() {
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

function handleNewsletterForm(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Subscribing...';
    submitButton.disabled = true;
    
    // Simulate newsletter subscription
    setTimeout(() => {
        showNotification('Successfully subscribed to our newsletter!', 'success');
        e.target.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
}

// Notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '10px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        zIndex: '10000',
        transform: 'translateX(400px)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Animations and Effects
function initializeAnimations() {
    // Coffee cup floating animation
    const coffeeCup = document.querySelector('.coffee-cup-animation');
    if (coffeeCup) {
        let rotation = 0;
        setInterval(() => {
            rotation += 0.5;
            coffeeCup.style.transform = `translateY(${Math.sin(rotation * 0.02) * 10}px) rotate(${Math.sin(rotation * 0.01) * 2}deg)`;
        }, 50);
    }
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Random coffee fact generator
    const coffeeFacts = [
        "Coffee is the world's second-most traded commodity after oil!",
        "A single coffee tree produces about 1-2 pounds of coffee per year.",
        "The optimal brewing temperature for coffee is between 195°F and 205°F.",
        "Coffee beans are actually seeds from coffee cherries.",
        "Finland consumes the most coffee per capita in the world.",
        "Espresso actually has less caffeine than drip coffee per serving.",
        "Coffee was first discovered by an Ethiopian goat herder named Kaldi.",
        "The word 'coffee' comes from the Arabic word 'qahwa'."
    ];
    
    // Add coffee fact to footer occasionally
    if (Math.random() > 0.5) {
        const footer = document.querySelector('.footer-bottom p');
        if (footer) {
            const randomFact = coffeeFacts[Math.floor(Math.random() * coffeeFacts.length)];
            footer.innerHTML += `<br><small><em>☕ Coffee Fact: ${randomFact}</em></small>`;
        }
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Enhanced scroll performance
const debouncedScrollHandler = debounce(() => {
    // Handle scroll events efficiently
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Update navbar
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Hide any loading indicators
    const loadingElements = document.querySelectorAll('.loading');
    loadingElements.forEach(el => el.style.display = 'none');
});

// Error handling for images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Performance monitoring
const perfData = {
    menuRenderTime: 0,
    scrollEventCount: 0,
    lastFrameTime: performance.now()
};

function measurePerformance() {
    const now = performance.now();
    const frameTime = now - perfData.lastFrameTime;
    
    if (frameTime > 16.67) { // More than 60fps
        console.warn('Frame time exceeded:', frameTime.toFixed(2), 'ms');
    }
    
    perfData.lastFrameTime = now;
    requestAnimationFrame(measurePerformance);
}

// Start performance monitoring in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    measurePerformance();
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        menuItems,
        displayMenuItems,
        createMenuItemElement,
        showNotification,
        debounce,
        throttle
    };
}