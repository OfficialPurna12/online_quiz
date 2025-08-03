
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                // Close mobile menu after clicking
                document.getElementById('navLinks').classList.remove('active');
            });
        });

        // Add loading state for iframe
        window.addEventListener('load', function() {
            const iframe = document.querySelector('.quiz-iframe');
            iframe.addEventListener('load', function() {
                console.log('Quiz loaded successfully');
            });
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });

          window.addEventListener('load', function() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.getPropertyValue('--width');
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
        });

        // Add intersection observer for animations
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

        // Observe all animated elements
        document.querySelectorAll('.stat-card, .skill-item, .timeline-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });


         const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');

        // Form validation
        function validateField(fieldId, errorId, validationFn) {
            const field = document.getElementById(fieldId);
            const error = document.getElementById(errorId);
            
            if (!validationFn(field.value)) {
                error.classList.add('show');
                field.style.borderColor = '#e53e3e';
                return false;
            } else {
                error.classList.remove('show');
                field.style.borderColor = '#10b981';
                return true;
            }
        }

        // Validation functions
        const validators = {
            firstName: (value) => value.trim().length > 0,
            lastName: (value) => value.trim().length > 0,
            email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            subject: (value) => value !== '',
            message: (value) => value.trim().length > 10
        };

        // Real-time validation
        Object.keys(validators).forEach(fieldId => {
            const field = document.getElementById(fieldId);
            const errorId = fieldId + 'Error';
            
            field.addEventListener('blur', () => {
                validateField(fieldId, errorId, validators[fieldId]);
            });

            field.addEventListener('input', () => {
                if (field.style.borderColor === 'rgb(229, 62, 62)') {
                    validateField(fieldId, errorId, validators[fieldId]);
                }
            });
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate all fields
            Object.keys(validators).forEach(fieldId => {
                const errorId = fieldId + 'Error';
                if (!validateField(fieldId, errorId, validators[fieldId])) {
                    isValid = false;
                }
            });

            if (isValid) {
                // Simulate form submission
                const submitBtn = form.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    successMessage.classList.add('show');
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Reset field styles
                    form.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(field => {
                        field.style.borderColor = '#e2e8f0';
                    });
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                    }, 5000);
                }, 1000);
            } else {
                // Scroll to first error
                const firstError = form.querySelector('.error-message.show');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        });

        // Add smooth animations on scroll
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

        // Observe form elements
        document.querySelectorAll('.info-item, .form-group').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });