// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#ffffff';
        navbar.style.backdropFilter = 'none';
    }
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const testimonialDots = document.querySelectorAll('.nav-dot');

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Remove active class from all dots
    testimonialDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show selected testimonial and activate corresponding dot
    if (testimonials[index]) {
        testimonials[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        currentTestimonial = index;
    }
}

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
        
        // In a real implementation, you would send the data to your server:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => {
        //     alert('Message sent successfully!');
        //     this.reset();
        // })
        // .catch(error => {
        //     alert('Error sending message. Please try again.');
        // })
        // .finally(() => {
        //     submitBtn.textContent = originalText;
        //     submitBtn.disabled = false;
        // });
    });
}

// Calculator Modal Functions
function openCalculator(type) {
    const modal = document.getElementById('calculatorModal');
    const content = document.getElementById('calculatorContent');
    
    if (type === 'roi') {
        content.innerHTML = createROICalculator();
    } else if (type === 'irr') {
        content.innerHTML = createIRRCalculator();
    }
    
    modal.style.display = 'block';
    
    // Add event listeners for calculator
    setTimeout(() => {
        addCalculatorEventListeners(type);
    }, 100);
}

function closeCalculator() {
    document.getElementById('calculatorModal').style.display = 'none';
}

function createROICalculator() {
    return `
        <h2>ROI Calculator</h2>
        <div class="calculator">
            <div class="calc-group">
                <label for="initialInvestment">Initial Investment (€)</label>
                <input type="number" id="initialInvestment" placeholder="100000">
            </div>
            <div class="calc-group">
                <label for="finalValue">Final Value (€)</label>
                <input type="number" id="finalValue" placeholder="120000">
            </div>
            <div class="calc-group">
                <label for="additionalCosts">Additional Costs (€)</label>
                <input type="number" id="additionalCosts" placeholder="5000">
            </div>
            <button onclick="calculateROI()" class="btn btn-primary">Calculate ROI</button>
            <div id="roiResult" class="calc-result"></div>
        </div>
    `;
}

function createIRRCalculator() {
    return `
        <h2>IRR Calculator</h2>
        <div class="calculator">
            <div class="calc-group">
                <label for="initialInvestment2">Initial Investment (€)</label>
                <input type="number" id="initialInvestment2" placeholder="100000">
            </div>
            <div class="calc-group">
                <label for="annualCashFlow">Annual Cash Flow (€)</label>
                <input type="number" id="annualCashFlow" placeholder="12000">
            </div>
            <div class="calc-group">
                <label for="investmentPeriod">Investment Period (Years)</label>
                <input type="number" id="investmentPeriod" placeholder="5">
            </div>
            <div class="calc-group">
                <label for="exitValue">Exit Value (€)</label>
                <input type="number" id="exitValue" placeholder="130000">
            </div>
            <button onclick="calculateIRR()" class="btn btn-primary">Calculate IRR</button>
            <div id="irrResult" class="calc-result"></div>
        </div>
    `;
}

function addCalculatorEventListeners(type) {
    // Add CSS for calculator
    if (!document.getElementById('calculatorStyles')) {
        const style = document.createElement('style');
        style.id = 'calculatorStyles';
        style.textContent = `
            .calculator {
                padding: 1rem 0;
            }
            .calc-group {
                margin-bottom: 1rem;
            }
            .calc-group label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 500;
                color: var(--text-dark);
            }
            .calc-group input {
                width: 100%;
                padding: 0.75rem;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 1rem;
            }
            .calc-result {
                margin-top: 1.5rem;
                padding: 1rem;
                background: #f8f9fa;
                border-radius: 4px;
                font-weight: 600;
                text-align: center;
            }
            .calc-result.positive {
                background: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }
            .calc-result.negative {
                background: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }
        `;
        document.head.appendChild(style);
    }
}

function calculateROI() {
    const initial = parseFloat(document.getElementById('initialInvestment').value) || 0;
    const final = parseFloat(document.getElementById('finalValue').value) || 0;
    const costs = parseFloat(document.getElementById('additionalCosts').value) || 0;
    
    if (initial === 0) {
        document.getElementById('roiResult').innerHTML = 'Please enter initial investment amount.';
        return;
    }
    
    const totalInvestment = initial + costs;
    const profit = final - totalInvestment;
    const roi = (profit / totalInvestment) * 100;
    
    const resultDiv = document.getElementById('roiResult');
    resultDiv.innerHTML = `
        <h3>ROI Calculation Results</h3>
        <p><strong>Total Investment:</strong> €${totalInvestment.toLocaleString()}</p>
        <p><strong>Profit/Loss:</strong> €${profit.toLocaleString()}</p>
        <p><strong>ROI:</strong> ${roi.toFixed(2)}%</p>
    `;
    
    resultDiv.className = 'calc-result ' + (roi >= 0 ? 'positive' : 'negative');
}

function calculateIRR() {
    const initial = parseFloat(document.getElementById('initialInvestment2').value) || 0;
    const cashFlow = parseFloat(document.getElementById('annualCashFlow').value) || 0;
    const period = parseFloat(document.getElementById('investmentPeriod').value) || 0;
    const exit = parseFloat(document.getElementById('exitValue').value) || 0;
    
    if (initial === 0 || period === 0) {
        document.getElementById('irrResult').innerHTML = 'Please enter all required values.';
        return;
    }
    
    // Simplified IRR calculation (approximation)
    const totalCashFlow = (cashFlow * period) + exit;
    const totalReturn = totalCashFlow - initial;
    const annualizedReturn = Math.pow(totalCashFlow / initial, 1 / period) - 1;
    const irr = annualizedReturn * 100;
    
    const resultDiv = document.getElementById('irrResult');
    resultDiv.innerHTML = `
        <h3>IRR Calculation Results</h3>
        <p><strong>Total Cash Inflows:</strong> €${totalCashFlow.toLocaleString()}</p>
        <p><strong>Total Return:</strong> €${totalReturn.toLocaleString()}</p>
        <p><strong>Estimated IRR:</strong> ${irr.toFixed(2)}%</p>
        <p><small>*This is a simplified calculation. For precise IRR, use our professional models.</small></p>
    `;
    
    resultDiv.className = 'calc-result ' + (irr >= 0 ? 'positive' : 'negative');
}

// Portfolio Functions
function downloadSample(type) {
    // In a real implementation, this would trigger a file download
    alert(`Sample ${type} model download would start here. Contact us for actual samples!`);
    
    // Track the download request (you could send this to analytics)
    console.log(`Sample download requested: ${type}`);
    
    // Redirect to contact form
    setTimeout(() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

function viewDashboard() {
    alert('Interactive dashboard demo would open here. Contact us to see our full dashboards!');
    
    // In a real implementation, you might open a modal with dashboard preview
    // or redirect to a demo page
}

function playVideo() {
    alert('Video walkthrough would play here. Contact us for access to our model demonstrations!');
    
    // In a real implementation, you might embed a video player
    // or redirect to a video hosting platform
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('calculatorModal');
    if (event.target === modal) {
        closeCalculator();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add real-time form validation
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.style.borderColor = '#e76f51';
                this.style.boxShadow = '0 0 0 3px rgba(231, 111, 81, 0.1)';
            } else {
                this.style.borderColor = '#ddd';
                this.style.boxShadow = 'none';
            }
        });
    }
});

// Pricing card interactions
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        const button = card.querySelector('.btn');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the service type from the card
                const serviceTitle = card.querySelector('h3').textContent;
                
                // Scroll to contact form and pre-fill service selection
                const contactSection = document.getElementById('contact');
                const serviceSelect = document.getElementById('service');
                
                if (serviceSelect) {
                    // Map pricing card titles to select options
                    const serviceMap = {
                        'Starter Model': 'starter',
                        'Custom Financial Model': 'custom',
                        'Fund/Syndication Model': 'syndication'
                    };
                    
                    const serviceValue = serviceMap[serviceTitle];
                    if (serviceValue) {
                        serviceSelect.value = serviceValue;
                    }
                }
                
                // Smooth scroll to contact
                contactSection.scrollIntoView({ behavior: 'smooth' });
                
                // Focus on the name input after scrolling
                setTimeout(() => {
                    document.getElementById('name').focus();
                }, 1000);
            });
        }
    });
});

// Add loading states for better UX
function addLoadingState(button, originalText = 'Loading...') {
    button.disabled = true;
    button.textContent = originalText;
    button.classList.add('loading');
    
    // Add loading spinner styles if not already present
    if (!document.getElementById('loadingStyles')) {
        const style = document.createElement('style');
        style.id = 'loadingStyles';
        style.textContent = `
            .btn.loading {
                position: relative;
                color: transparent;
            }
            .btn.loading::after {
                content: '';
                position: absolute;
                width: 16px;
                height: 16px;
                top: 50%;
                left: 50%;
                margin-left: -8px;
                margin-top: -8px;
                border: 2px solid transparent;
                border-top-color: currentColor;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                color: white;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

function removeLoadingState(button, originalText) {
    button.disabled = false;
    button.textContent = originalText;
    button.classList.remove('loading');
}

// Schedule Call Function
function scheduleCall() {
    // In a real implementation, this would integrate with a scheduling service like Calendly
    const modal = document.getElementById('calculatorModal');
    const content = document.getElementById('calculatorContent');
    
    content.innerHTML = `
        <h2>Schedule Your Free Consultation</h2>
        <div class="schedule-content">
            <div class="schedule-info">
                <h3>What to Expect:</h3>
                <ul>
                    <li><i class="fas fa-clock"></i> 15-minute consultation call</li>
                    <li><i class="fas fa-user-tie"></i> Speak with a financial modeling expert</li>
                    <li><i class="fas fa-chart-line"></i> Discuss your project requirements</li>
                    <li><i class="fas fa-file-alt"></i> Get a custom quote and timeline</li>
                    <li><i class="fas fa-handshake"></i> No obligation - completely free</li>
                </ul>
            </div>
            <div class="schedule-form">
                <p><strong>Choose your preferred time:</strong></p>
                <div class="time-slots">
                    <button class="time-slot" onclick="selectTimeSlot(this, 'Today 2:00 PM')">Today 2:00 PM</button>
                    <button class="time-slot" onclick="selectTimeSlot(this, 'Today 4:00 PM')">Today 4:00 PM</button>
                    <button class="time-slot" onclick="selectTimeSlot(this, 'Tomorrow 10:00 AM')">Tomorrow 10:00 AM</button>
                    <button class="time-slot" onclick="selectTimeSlot(this, 'Tomorrow 2:00 PM')">Tomorrow 2:00 PM</button>
                </div>
                <div class="schedule-contact">
                    <input type="text" placeholder="Your Name" id="scheduleName" required>
                    <input type="email" placeholder="Your Email" id="scheduleEmail" required>
                    <input type="tel" placeholder="Your Phone" id="schedulePhone" required>
                </div>
                <button class="btn btn-primary" onclick="confirmSchedule()">Confirm Call</button>
                <p class="schedule-note">Or email us directly at <a href="mailto:info@brickvests.com">info@brickvests.com</a></p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Add styles for scheduling modal
    if (!document.getElementById('scheduleStyles')) {
        const style = document.createElement('style');
        style.id = 'scheduleStyles';
        style.textContent = `
            .schedule-content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                margin-top: 1rem;
            }
            .schedule-info ul {
                list-style: none;
                padding: 0;
            }
            .schedule-info li {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.5rem 0;
                color: var(--text-dark);
            }
            .schedule-info i {
                color: var(--primary-color);
                width: 20px;
            }
            .time-slots {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0.5rem;
                margin: 1rem 0;
            }
            .time-slot {
                padding: 0.75rem;
                border: 2px solid var(--primary-color);
                background: transparent;
                color: var(--primary-color);
                border-radius: 8px;
                cursor: pointer;
                transition: var(--transition);
                font-size: 0.9rem;
            }
            .time-slot:hover, .time-slot.selected {
                background: var(--primary-color);
                color: white;
            }
            .schedule-contact {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
                margin: 1rem 0;
            }
            .schedule-contact input {
                padding: 0.75rem;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 0.9rem;
            }
            .schedule-note {
                text-align: center;
                font-size: 0.85rem;
                color: var(--text-light);
                margin-top: 1rem;
            }
            .schedule-note a {
                color: var(--primary-color);
                text-decoration: none;
            }
            @media (max-width: 768px) {
                .schedule-content {
                    grid-template-columns: 1fr;
                }
                .time-slots {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function selectTimeSlot(button, time) {
    // Remove selected class from all time slots
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    
    // Add selected class to clicked slot
    button.classList.add('selected');
    button.dataset.selectedTime = time;
}

function confirmSchedule() {
    const name = document.getElementById('scheduleName').value;
    const email = document.getElementById('scheduleEmail').value;
    const phone = document.getElementById('schedulePhone').value;
    const selectedSlot = document.querySelector('.time-slot.selected');
    
    if (!name || !email || !selectedSlot) {
        alert('Please fill in all required fields and select a time slot.');
        return;
    }
    
    // In a real implementation, this would send the data to your scheduling system
    alert(`Thank you ${name}! Your consultation call is scheduled for ${selectedSlot.dataset.selectedTime}. We'll send you a confirmation email shortly.`);
    closeCalculator();
}

// Console welcome message
console.log('%cWelcome to Brickvests Financials!', 'color: #2c5530; font-size: 16px; font-weight: bold;');
console.log('🏢 Professional Real Estate Financial Modeling');
console.log('📧 Contact us at info@brickvests.com');
console.log('🌐 Visit us at www.brickvests.com');
