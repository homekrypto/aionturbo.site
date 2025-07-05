// Form validation and submission
const FormValidation = {
    init: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        // Find all forms
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit(form);
            });
            
            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });
                
                input.addEventListener('input', () => {
                    this.clearError(input);
                });
            });
        });
    },
    
    validateField: function(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.hasAttribute('required');
        
        // Clear previous errors
        this.clearError(field);
        
        // Check if required field is empty
        if (required && !value) {
            this.showError(field, 'This field is required');
            return false;
        }
        
        // Email validation
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Phone validation
        if (type === 'tel' && value) {
            const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                this.showError(field, 'Please enter a valid phone number');
                return false;
            }
        }
        
        // URL validation
        if (type === 'url' && value) {
            try {
                new URL(value);
            } catch {
                this.showError(field, 'Please enter a valid URL');
                return false;
            }
        }
        
        return true;
    },
    
    showError: function(field, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'form-error';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
        field.classList.add('error');
    },
    
    clearError: function(field) {
        const errorElement = field.parentNode.querySelector('.form-error');
        if (errorElement) {
            errorElement.remove();
        }
        field.classList.remove('error');
    },
    
    showSuccess: function(field, message) {
        const successElement = document.createElement('div');
        successElement.className = 'form-success';
        successElement.textContent = message;
        
        field.parentNode.appendChild(successElement);
    },
    
    handleSubmit: function(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        let isValid = true;
        
        // Validate all fields
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            return;
        }
        
        // Show loading state
        const submitButton = form.querySelector('button[type=\"submit\"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class=\"loading-spinner\"></span> Sending...';
        
        // Simulate form submission
        setTimeout(() => {
            // Reset form
            form.reset();
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.textContent = 'Thank you! Your message has been sent successfully.';
            successMessage.style.textAlign = 'center';
            successMessage.style.marginTop = '1rem';
            
            form.appendChild(successMessage);
            
            // Reset button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
            
        }, 2000);
    }
};
