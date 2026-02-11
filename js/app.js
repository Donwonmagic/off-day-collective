document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. SAFETY NET (PREVENTS FOREVER LOADING) ---
    // If something breaks, force the site to load after 3 seconds
    setTimeout(() => {
        if (!document.body.classList.contains('loaded')) {
            console.log("Safety net triggered: Forcing load.");
            document.body.classList.add('loaded');
        }
    }, 3000);

    // --- 1. PRELOADER ---
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 1500);
    });

    // --- 2. CUSTOM CURSOR (DESKTOP ONLY) ---
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');
    const hoverTriggers = document.querySelectorAll('.hover-trigger');

    if (window.matchMedia("(min-width: 768px)").matches && cursor && cursorBlur) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            setTimeout(() => {
                cursorBlur.style.left = e.clientX + 'px';
                cursorBlur.style.top = e.clientY + 'px';
            }, 50);
        });
        hoverTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => {
                document.body.classList.add('hovering');
            });
            trigger.addEventListener('mouseleave', () => {
                document.body.classList.remove('hovering');
            });
        });
    }
    
        // --- 2.5 MOBILE GHOST CURSOR ---
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    
    if (isMobile && cursor && cursorBlur) {
        
        // Function to move the cursor to touch coordinates
        const moveCursor = (e) => {
            const touch = e.touches[0];
            const x = touch.clientX;
            const y = touch.clientY;

            // Instant movement for the main dot
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';

            // Slight delay/lag for the blur (Creating the "Ghost" trail)
            setTimeout(() => {
                cursorBlur.style.left = x + 'px';
                cursorBlur.style.top = y + 'px';
            }, 50);
        };

        // 1. TOUCH START: Show cursor and jump to position
        document.addEventListener('touchstart', (e) => {
            document.body.classList.add('touching');
            moveCursor(e);
        });

        // 2. TOUCH MOVE: Follow the finger
        document.addEventListener('touchmove', (e) => {
            moveCursor(e);
        });

        // 3. TOUCH END: Fade out
        document.addEventListener('touchend', () => {
            document.body.classList.remove('touching');
        });
    }


    // --- 3. SCROLL SPY ---
    const sections = document.querySelectorAll('section, footer');
    const dots = document.querySelectorAll('.dot');
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                dots.forEach(dot => dot.classList.remove('active'));
                if(dots[index]) dots[index].classList.add('active');
            }
        });
    }, observerOptions);
    sections.forEach(section => observer.observe(section));

    // --- 4. PARALLAX ---
    const parallaxText = document.querySelectorAll('.parallax-text');
    const parallaxImgs = document.querySelectorAll('.parallax-img');
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        // Check if elements exist before moving them
        if(parallaxText.length > 0) {
            parallaxText.forEach(text => {
                let speed = text.getAttribute('data-speed');
                text.style.transform = `translateY(${scrollY * speed}px)`;
            });
        }
        if(parallaxImgs.length > 0) {
            parallaxImgs.forEach(img => {
                let speed = img.getAttribute('data-speed');
                img.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
            });
        }
    });

    // --- 5. FORM HANDLING (SAFE MODE) ---
    const form = document.getElementById('signup-form');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-message');
    const btnText = document.querySelector('.btn-text');
    const btn = document.getElementById('submit-btn');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Visual Feedback
            if(btnText) btnText.textContent = "Verifying...";
            if(btn) {
                btn.style.opacity = "0.7";
                btn.disabled = true;
            }

            const data = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    // Success
                    setTimeout(() => {
                        if(formContainer) {
                            formContainer.style.transform = "rotateX(90deg)";
                            formContainer.style.opacity = '0';
                        }
                        setTimeout(() => {
                            if(formContainer) formContainer.style.display = 'none';
                            if(successMsg) {
                                successMsg.classList.remove('hidden');
                                void successMsg.offsetWidth; 
                                successMsg.style.opacity = '1';
                            }
                        }, 500);
                    }, 1000);
                } else {
                    // Error from Formspree
                    alert("System busy. Please try again.");
                    if(btnText) btnText.textContent = "Apply for Access";
                    if(btn) { btn.disabled = false; btn.style.opacity = "1"; }
                }
            }).catch(error => {
                // Network Error
                alert("Connection error. Please check your network.");
                if(btnText) btnText.textContent = "Apply for Access";
                if(btn) { btn.disabled = false; btn.style.opacity = "1"; }
            });
        });
    }

});
