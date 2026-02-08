document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL SPY (Progress Dots)
    const sections = document.querySelectorAll('section');
    const dots = document.querySelectorAll('.dot');
    
    // Threshold determines how much of the section must be visible
    const observerOptions = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Highlight the correct dot
                const index = Array.from(sections).indexOf(entry.target);
                dots.forEach(dot => dot.classList.remove('active'));
                if(dots[index]) dots[index].classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));


    // 2. PARALLAX EFFECT (Subtle background movement)
    const parallaxText = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        
        parallaxText.forEach(text => {
            let speed = text.getAttribute('data-speed');
            text.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });


    // 3. FORM HANDLING (The "Fake" Server Request)
    const form = document.getElementById('signup-form');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-message');
    const btnText = document.querySelector('.btn-text');
    const btn = document.getElementById('submit-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page reload

        // UI State: Loading
        const email = document.getElementById('email').value;
        btnText.textContent = "Processing...";
        btn.style.opacity = "0.7";
        btn.disabled = true;

        // Simulate API delay (1.5 seconds)
        setTimeout(() => {
            // Fade out form
            formContainer.style.opacity = '0';
            formContainer.style.transition = 'opacity 0.5s ease';

            setTimeout(() => {
                formContainer.style.display = 'none';
                successMsg.classList.remove('hidden');
                
                // Trigger reflow
                void successMsg.offsetWidth; 
                
                // Fade in success message
                successMsg.style.opacity = '1';
                successMsg.style.transition = 'opacity 1s ease';
            }, 500);
            
            // Console log for your testing
            console.log(`New Lead Captured: ${email}`);
        }, 1500);
    });
});
