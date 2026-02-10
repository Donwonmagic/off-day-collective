document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CUSTOM CURSOR
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');
    const hoverTriggers = document.querySelectorAll('.hover-trigger');

    if (window.matchMedia("(min-width: 768px)").matches) {
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

    // 2. PRELOADER
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 1500);
    });

    // 3. SCROLL SPY
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

    // 4. PARALLAX
    const parallaxText = document.querySelectorAll('.parallax-text');
    const parallaxImgs = document.querySelectorAll('.parallax-img');
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        parallaxText.forEach(text => {
            let speed = text.getAttribute('data-speed');
            text.style.transform = `translateY(${scrollY * speed}px)`;
        });
        parallaxImgs.forEach(img => {
            let speed = img.getAttribute('data-speed');
            img.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
        });
    });

// 5. FORM HANDLING (REAL EMAIL SENDING)
    const form = document.getElementById('signup-form');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-message');
    const btnText = document.querySelector('.btn-text');
    const btn = document.getElementById('submit-btn');

    if(form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Stop standard redirect
            
            // Visual Feedback: "Thinking" state
            btnText.textContent = "Verifying...";
            btn.style.opacity = "0.7";
            btn.disabled = true;

            // Gather the data
            const data = new FormData(form);

            // Send to Formspree using AJAX
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // SUCCESS: Play the luxury animation
                    setTimeout(() => {
                        formContainer.style.transform = "rotateX(90deg)"; // Card flip
                        formContainer.style.opacity = '0';
                        
                        setTimeout(() => {
                            formContainer.style.display = 'none';
                            successMsg.classList.remove('hidden');
                            void successMsg.offsetWidth; // Trigger reflow
                            successMsg.style.opacity = '1';
                        }, 500);
                    }, 1000); // Small artificial delay for effect
                } else {
                    // ERROR: Formspree rejected it
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert("The application system is currently busy. Please try again.");
                        }
                        // Reset button
                        btnText.textContent = "Apply for Access";
                        btn.disabled = false;
                        btn.style.opacity = "1";
                    });
                }
            }).catch(error => {
                // NETWORK ERROR
                alert("Connection error. Please check your network.");
                btnText.textContent = "Apply for Access";
                btn.disabled = false;
                btn.style.opacity = "1";
            });
        });
    }
