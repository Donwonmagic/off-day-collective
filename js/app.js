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
// --- 6. COHORT BAR ANIMATION ---
    const cohortFill = document.querySelector('.cohort-fill');
    
    if(cohortFill) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Read the data-width attribute (84%) and apply it
                    const targetWidth = entry.target.getAttribute('data-width');
                    entry.target.style.width = targetWidth;
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% visible
        
        observer.observe(cohortFill);
    }
    // --- 7. THE LANTERN EFFECT ---
    const card = document.querySelector('.access-card');

    if(card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            // Calculate mouse position relative to the card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Send these numbers to CSS
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    }
   // --- 8. THE MECHANICAL SPOOL REVEAL ---
    const spoolText = document.getElementById("cipher-text");

    if (spoolText) {
        const text = spoolText.innerText;
        spoolText.innerHTML = ''; // Clear original text
        
        // Wait for loader to lift (2.0s)
        setTimeout(() => {
            
            // Loop through each letter
            text.split('').forEach((char, index) => {
                
                // Create a wrapper (for spacing) and the letter (for animation)
                const wrapper = document.createElement('span');
                wrapper.classList.add('char-wrapper');
                
                const letter = document.createElement('span');
                letter.classList.add('char');
                letter.innerText = char;
                
                // STAGGER TIMING:
                // Slower multiplier = slower wave. 
                // 0.05s (50ms) is a nice mechanical rhythm.
                letter.style.animationDelay = `${index * 0.05}s`;
                
                wrapper.appendChild(letter);
                spoolText.appendChild(wrapper);
            });
            
        }, 2000);
    }
});

// --- 9. SENSORY LAYER (AUDIO/VISUAL SYNTHESIS) ---
    const atmosphereBtn = document.getElementById('atmosphere-toggle');
    const ambientAudio = document.getElementById('ambient-audio');
    let isPlaying = false;

    if (atmosphereBtn && ambientAudio) {
        ambientAudio.volume = 0; // Always start silent

        atmosphereBtn.addEventListener('click', () => {
            if (!isPlaying) {
                // TURN ON
                document.body.classList.add('atmosphere-on');
                ambientAudio.play();
                fadeAudio(ambientAudio, 0.6, 2000); // Fade to 60% volume over 2 seconds
                isPlaying = true;
            } else {
                // TURN OFF
                document.body.classList.remove('atmosphere-on');
                // Fade out over 1.5 seconds, then pause
                fadeAudio(ambientAudio, 0, 1500, () => {
                    ambientAudio.pause();
                });
                isPlaying = false;
            }
        });
    }

    // Custom Fade Function for Premium Audio Transitions
    function fadeAudio(audio, targetVolume, duration, callback) {
        const startVolume = audio.volume;
        const change = targetVolume - startVolume;
        const increment = 20; // Update every 20ms for smooth curve
        const steps = duration / increment;
        let currentStep = 0;

        const fadeInterval = setInterval(() => {
            currentStep++;
            let newVolume = startVolume + (change * (currentStep / steps));
            
            // Safety rails
            if (newVolume > 1) newVolume = 1;
            if (newVolume < 0) newVolume = 0;
            
            audio.volume = newVolume;

            if (currentStep >= steps) {
                clearInterval(fadeInterval);
                audio.volume = targetVolume;
                if (callback) callback();
            }
        }, increment);
    }

    // --- 10. SPA ROUTER (THE DEEP EXHALE) ---
    document.addEventListener('click', (e) => {
        // Find if a link was clicked
        const link = e.target.closest('a');
        
        // If it's an internal link (same website) and not opening in a new tab
        if (link && link.href && link.href.startsWith(window.location.origin) && link.target !== '_blank') {
            e.preventDefault(); // Stop the hard refresh
            const url = link.href;
            
            // 1. Inhale (Fade to Black)
            document.body.classList.add('is-transitioning');
            
            // Wait for the screen to go black (800ms to match CSS)
            setTimeout(() => {
                // 2. Fetch the new page secretly
                fetch(url)
                .then(response => response.text())
                .then(html => {
                    // Turn text into a fake HTML document
                    const parser = new DOMParser();
                    const newDoc = parser.parseFromString(html, 'text/html');
                    
                    // Swap the old <main> content for the new <main> content
                    const newContent = newDoc.getElementById('main-content').innerHTML;
                    document.getElementById('main-content').innerHTML = newContent;
                    
                    // Update Browser Title and URL bar
                    document.title = newDoc.title;
                    history.pushState(null, '', url);
                    
                    // Snap back to the top of the new page
                    window.scrollTo(0, 0);
                    
                    // 3. Exhale (Fade from Black)
                    setTimeout(() => {
                        document.body.classList.remove('is-transitioning');
                        
                        // (Optional: If you have animations like the Spool Text that need to restart on new pages, you would re-call those functions here).
                    }, 100); 
                });
            }, 800);
        }
    });

    // Handle the browser Back/Forward buttons safely
    window.addEventListener('popstate', () => {
        location.reload(); // Hard reload on back button to ensure logic resets safely
    });
