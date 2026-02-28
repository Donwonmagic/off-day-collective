document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // WCAG 2.1 SC 2.3.3 — REDUCED MOTION GATE
    // Read the user's OS motion preference ONCE
    // on load. All animation logic in this file
    // checks this boolean before executing.
    //
    // This covers: parallax, the spool reveal,
    // and any future JS-driven animation added.
    //
    // We also listen for LIVE changes so if the
    // user toggles "Reduce Motion" in their OS
    // settings while the page is open, the site
    // responds immediately without a reload.
    // ============================================
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;

    motionQuery.addEventListener('change', (e) => {
        prefersReducedMotion = e.matches;
        if (prefersReducedMotion) {
            // Freeze any active parallax transforms instantly
            document.querySelectorAll('[data-speed]').forEach((el) => {
                el.style.transform = 'none';
            });
        }
    });

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

        // 3. TOUCH END: Fade out with a brief delay
        document.addEventListener('touchend', () => {
            setTimeout(() => {
                document.body.classList.remove('touching');
            }, 200);
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
    // ============================================
    // Gated by prefersReducedMotion (WCAG 2.3.3).
    // If the user has "Reduce Motion" enabled in
    // their OS, this entire block is skipped and
    // the CSS @media rule freezes transforms.
    //
    // passive: true is set on the scroll listener
    // to tell the browser this handler will never
    // call preventDefault(), allowing it to start
    // scrolling immediately on the compositor
    // thread without waiting for JS. This is a
    // significant performance win on mobile.
    // ============================================
    const parallaxText = document.querySelectorAll('.parallax-text');
    const parallaxImgs = document.querySelectorAll('.parallax-img');

    if (!prefersReducedMotion) {
        window.addEventListener('scroll', () => {

            // Re-check on each scroll tick in case the user toggled
            // the OS preference mid-session (the live listener above
            // updates the variable, this check respects it immediately)
            if (prefersReducedMotion) return;

            let scrollY = window.scrollY;

            // On mobile, reduce parallax depth to prevent jank
            // on lower-powered devices
            const mobileDampener = isMobile ? 0.3 : 1;

            // Check if elements exist before moving them
            if (parallaxText.length > 0) {
                parallaxText.forEach(text => {
                    let speed = text.getAttribute('data-speed') * mobileDampener;
                    text.style.transform = `translateY(${scrollY * speed}px)`;
                });
            }
            if (parallaxImgs.length > 0) {
                parallaxImgs.forEach(img => {
                    let speed = img.getAttribute('data-speed') * mobileDampener;
                    img.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
                });
            }
        }, { passive: true }); // passive:true: critical for scroll performance
    }

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
    const cohortPercent = document.querySelector('.cohort-percent');
    
    if(cohortFill) {
        // Generate a believable cohort percentage per session
        const basePercent = 84;
        const variance = Math.floor(Math.random() * 8) - 3; // Range: -3 to +4
        const displayPercent = Math.min(Math.max(basePercent + variance, 78), 89);
        
        // Update both the bar and the text
        cohortFill.setAttribute('data-width', displayPercent + '%');
        if (cohortPercent) cohortPercent.textContent = displayPercent + '% Full';

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetWidth = entry.target.getAttribute('data-width');
                    entry.target.style.width = targetWidth;
                }
            });
        }, { threshold: 0.5 });
        
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

        // ============================================
        // Gate the spool animation behind the motion
        // preference. If reduced motion is on, just
        // show the text immediately with no animation.
        // ============================================
        if (prefersReducedMotion) {
            // Instantly show the full text, no animation
            spoolText.innerText = text;
            spoolText.style.opacity = '1';
        } else {
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
                
            }, 500);
        }
    }
});

// --- 9. SENSORY LAYER (AUDIO/VISUAL SYNTHESIS) ---
    const atmosphereBtn = document.getElementById('atmosphere-toggle');
    const ambientAudio = document.getElementById('ambient-audio');
    let isPlaying = false;
    
    // Web Audio API Variables
    let audioCtx, analyser, source, dataArray;
    let animationId;
    let visualizerActive = false;

    if (atmosphereBtn && ambientAudio) {
        ambientAudio.volume = 0;

        atmosphereBtn.addEventListener('click', () => {
            if (!isPlaying) {
                // Attempt to start the Web Audio API
                try {
                    if (!audioCtx) {
                        const AudioContext = window.AudioContext || window.webkitAudioContext;
                        audioCtx = new AudioContext();
                        analyser = audioCtx.createAnalyser();
                        
                        source = audioCtx.createMediaElementSource(ambientAudio);
                        source.connect(analyser);
                        analyser.connect(audioCtx.destination);
                        
                        analyser.fftSize = 128; 
                        dataArray = new Uint8Array(analyser.frequencyBinCount);
                        visualizerActive = true;
                    }

                    if (audioCtx.state === 'suspended') {
                        audioCtx.resume();
                    }
                } catch (error) {
                    console.warn("Visualizer blocked by browser security (likely running locally). Audio will still play.");
                    visualizerActive = false;
                }

                document.body.classList.add('atmosphere-on');
                
                // CRITICAL: We must wait for the audio to load before playing
                let playPromise = ambientAudio.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        fadeAudio(ambientAudio, 0.8, 2000);
                        isPlaying = true;
                        if (visualizerActive) renderVisuals();
                    }).catch(error => {
                        console.error("Audio play failed:", error);
                    });
                }
                
            } else {
                // TURN OFF
                document.body.classList.remove('atmosphere-on');
                fadeAudio(ambientAudio, 0, 1500, () => {
                    ambientAudio.pause();
                    if (visualizerActive) cancelAnimationFrame(animationId);
                });
                isPlaying = false;
            }
        });

        // The Real-Time Render Engine
        function renderVisuals() {
            if (!isPlaying || !visualizerActive) return;
            animationId = requestAnimationFrame(renderVisuals);
            
            analyser.getByteFrequencyData(dataArray);
            
            let sum = 0;
            const frequencyRange = 30; 
            for(let i = 0; i < frequencyRange; i++) {
                sum += dataArray[i];
            }
            let average = sum / frequencyRange; 
            
            // Map the audio volume to physical CSS scale and glow
            const visualScale = 1 + (average / 255) * 0.15; 
            const visualGlow = (average / 255) * 1.2;

            document.body.style.setProperty('--audio-scale', visualScale);
            document.body.style.setProperty('--audio-glow', visualGlow);
        }
    }

    // Custom Fade Function for Premium Audio Transitions
    function fadeAudio(audio, targetVolume, duration, callback) {
        const startVolume = audio.volume;
        const change = targetVolume - startVolume;
        const increment = 20; 
        const steps = duration / increment;
        let currentStep = 0;

        const fadeInterval = setInterval(() => {
            currentStep++;
            let newVolume = startVolume + (change * (currentStep / steps));
            
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
        const link = e.target.closest('a');
        
        // If it's a valid internal link and NOT a download
        if (link && link.href && link.href.startsWith(window.location.origin) && link.target !== '_blank' && !link.hasAttribute('download')) {
            
            // Check if the link is just an anchor on the same page (like #access)
            // If it is, let the browser handle the smooth scroll instead of the router
            if (link.href.split('#')[0] === window.location.href.split('#')[0]) return;

            e.preventDefault(); 
            const url = link.href;
            
            document.body.classList.add('is-transitioning');
            
            setTimeout(() => {
                fetch(url)
                .then(response => {
                    if (!response.ok) throw new Error('Page not found');
                    return response.text();
                })
                .then(html => {
                    const parser = new DOMParser();
                    const newDoc = parser.parseFromString(html, 'text/html');
                    const newContent = newDoc.getElementById('main-content');
                    
                    if (newContent) {
                        document.getElementById('main-content').innerHTML = newContent.innerHTML;
                        document.title = newDoc.title;
                        history.pushState(null, '', url);
                        window.scrollTo(0, 0);
                        
                        setTimeout(() => {
                            document.body.classList.remove('is-transitioning');
                            // Re-run any page-specific animations here if needed
                        }, 100); 
                    } else {
                        // Fail-safe: If the new page doesn't have #main-content, just go there normally
                        window.location.href = url;
                    }
                })
                .catch(err => {
                    console.error("SPA Router Error:", err);
                    window.location.href = url; // Hard redirect as ultimate fail-safe
                });
            }, 800);
        }
    });

    // Handle the browser Back/Forward buttons safely
    window.addEventListener('popstate', () => {
        location.reload(); // Hard reload on back button to ensure logic resets safely
    });
