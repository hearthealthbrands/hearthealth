document.addEventListener('DOMContentLoaded', function() {
    // Staggered fade-in animations for a more professional feel
    const elementsToAnimate = document.querySelectorAll('.animate-on-load');
    elementsToAnimate.forEach((el, index) => {
        // Apply a delay based on the element's order in the DOM
        el.style.transitionDelay = `${index * 150}ms`;
        el.classList.add('loaded');
    });

    // Interactive form styling
    const emailInput = document.querySelector('#email-input');
    const emailForm = document.querySelector('#email-form');

    if (emailInput && emailForm) {
        emailInput.addEventListener('focus', () => {
            emailForm.classList.add('focused');
        });
        emailInput.addEventListener('blur', () => {
            // Only remove the class if the input is empty
            if (emailInput.value === '') {
                emailForm.classList.remove('focused');
            }
        });
    }
});