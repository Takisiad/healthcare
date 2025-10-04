// Theme Toggle Functionality
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  const body = document.body;

  // Load saved theme from localStorage
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "night-mode") {
    body.classList.remove("light-mode");
    body.classList.add("night-mode");
    checkbox.checked = false; // Unchecked for night mode
  } else {
    // Default to light-mode (checked)
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      body.classList.remove("night-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("night-mode");
      localStorage.setItem("theme", "night-mode");
    }
  });

  // Initialize other functionality
  initSmoothScroll();
  initContactForm();
  initLoginForms();
});

// Login/Signup Panel Functionality
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

if (signUpButton && signInButton && container) {
  signUpButton.addEventListener("click", function () {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", function () {
    container.classList.remove("right-panel-active");
  });
}

// Smooth Scrolling for Navigation
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Scroll to section function (used by buttons)
function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    const navHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = targetSection.offsetTop - navHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Contact Form Functionality
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      // Basic validation
      if (!name || !email || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
      }
      
      // Simulate form submission
      showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
      this.reset();
    });
  }
}

// Initialize Login Forms
function initLoginForms() {
  const loginForms = document.querySelectorAll('.page5 form');
  
  loginForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const isSignUp = this.closest('.sign-up-container');
      const formType = isSignUp ? 'Sign Up' : 'Sign In';
      
      showNotification(`${formType} functionality would be implemented here.`, 'info');
    });
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 90px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 3000;
    max-width: 400px;
    animation: slideInRight 0.3s ease-out;
    font-family: 'Montserrat', sans-serif;
  `;
  
  // Add animation styles if not already added
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideInRight {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }
      .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
      }
      .notification-close:hover {
        opacity: 0.8;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Add to page
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideInRight 0.3s ease-out reverse';
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.15)';
    navbar.style.backdropFilter = 'blur(15px)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.1)';
    navbar.style.backdropFilter = 'blur(10px)';
  }
});

// Service card hover effects
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.service-icon');
      if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.service-icon');
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
    });
  });
});

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
  // Close mobile menu with Escape key
  if (e.key === 'Escape') {
    const container = document.getElementById('container');
    if (container && container.classList.contains('right-panel-active')) {
      container.classList.remove('right-panel-active');
    }
  }
});

// Performance optimization: Debounce scroll events
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
  // Any additional scroll-based functionality can be added here
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading state management
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  
  // Trigger initial animations
  const heroElements = document.querySelectorAll('.page1 .focus-in-contract-bck, .page1 .text-focus-in');
  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
    }, index * 200);
  });
});

// Export functions for global use
window.scrollToSection = scrollToSection;