document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // WCAG 2.1 SC 2.3.3 — REDUCED MOTION GATE
    // ============================================
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;

    motionQuery.addEventListener('change', (e) => {
        prefersReducedMotion = e.matches;
        if (prefersReducedMotion) {
            document.querySelectorAll('[data-speed]').forEach((el) => {
                el.style.transform = 'none';
            });
        }
    });

    // --- 0. SAFETY NET ---
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
        const moveCursor = (e) => {
            const touch = e.touches[0];
            const x = touch.clientX;
            const y = touch.clientY;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
            setTimeout(() => {
                cursorBlur.style.left = x + 'px';
                cursorBlur.style.top = y + 'px';
            }, 50);
        };

        document.addEventListener('touchstart', (e) => {
            document.body.classList.add('touching');
            moveCursor(e);
        });
        document.addEventListener('touchmove', (e) => { moveCursor(e); });
        document.addEventListener('touchend', () => {
            setTimeout(() => { document.body.classList.remove('touching'); }, 200);
        });
    }
    
    // --- 3. SCROLL SPY (updated for new sections) ---
    const sections = document.querySelectorAll('section, footer');
    const dots = document.querySelectorAll('.dot');
    const observerOptions = { threshold: 0.1 };
    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                dots.forEach(dot => dot.classList.remove('active'));
                if(dots[index]) dots[index].classList.add('active');
            }
        });
    }, observerOptions);
    sections.forEach(section => spyObserver.observe(section));

    // --- 3.5. CLICKABLE PROGRESS DOTS ---
    dots.forEach(dot => {
        dot.style.cursor = 'pointer';
        dot.style.pointerEvents = 'auto';
        dot.addEventListener('click', () => {
            const targetId = dot.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // NEW: SCROLL-DRIVEN REVEAL SYSTEM
    // IntersectionObserver adds .is-visible to
    // .fade-in-up elements and .phase-img-inner
    // ============================================
    const revealElements = document.querySelectorAll('.fade-in-up, .phase-img-inner');

    if (!prefersReducedMotion && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Once revealed, stop observing to save resources
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Reduced motion: show everything immediately
        revealElements.forEach(el => el.classList.add('is-visible'));
    }

    // --- 3.7 NAV SCROLL STATE ---
    const nav = document.querySelector('.nav-overlay');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // --- 4. PARALLAX ---
    const parallaxText = document.querySelectorAll('.parallax-text');
    const parallaxImgs = document.querySelectorAll('.parallax-img');

    if (!prefersReducedMotion) {
        window.addEventListener('scroll', () => {
            if (prefersReducedMotion) return;

            let scrollY = window.scrollY;
            const mobileDampener = isMobile ? 0.3 : 1;

            if (parallaxText.length > 0) {
                parallaxText.forEach(text => {
                    let speed = text.getAttribute('data-speed') * mobileDampener;
                    text.style.transform = `translateX(-50%) translateY(${scrollY * speed}px)`;
                });
            }
            if (parallaxImgs.length > 0) {
                parallaxImgs.forEach(img => {
                    let speed = img.getAttribute('data-speed') * mobileDampener;
                    img.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
                });
            }

            // Hero zoom-on-scroll effect
            const heroImg = document.querySelector('#intro .hero-img');
            if (heroImg && scrollY < window.innerHeight) {
                const scale = 1 + scrollY * 0.0003;
                heroImg.style.transform = `translate3d(0, ${scrollY * 0.4}px, 0) scale(${scale})`;
            }

            // Hero content fade-on-scroll
            const heroContent = document.querySelector('#intro .content-layer');
            if (heroContent && scrollY < window.innerHeight) {
                heroContent.style.opacity = Math.max(0, 1 - scrollY / 600);
                heroContent.style.transform = `translateY(${scrollY * -0.08}px)`;
            }

        }, { passive: true });
    }

    // --- 5. FORM HANDLING ---
    const form = document.getElementById('signup-form');
    const formContainer = document.getElementById('form-container');
    const successMsg = document.getElementById('success-message');
    const btnText = document.querySelector('.btn-text');
    const btn = document.getElementById('submit-btn');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
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
                    alert("System busy. Please try again.");
                    if(btnText) btnText.textContent = "Apply for Access";
                    if(btn) { btn.disabled = false; btn.style.opacity = "1"; }
                }
            }).catch(error => {
                alert("Connection error. Please check your network.");
                if(btnText) btnText.textContent = "Apply for Access";
                if(btn) { btn.disabled = false; btn.style.opacity = "1"; }
            });
        });
    }

    // --- 6. COHORT BAR ANIMATION ---
    const cohortFill = document.querySelector('.cohort-fill');
    const cohortPercent = document.querySelector('.cohort-percent');
    const statCohort = document.getElementById('stat-cohort-percent');
    
    if(cohortFill) {
        const basePercent = 84;
        const variance = Math.floor(Math.random() * 8) - 3;
        const displayPercent = Math.min(Math.max(basePercent + variance, 78), 89);
        
        cohortFill.setAttribute('data-width', displayPercent + '%');
        if (cohortPercent) cohortPercent.textContent = displayPercent + '% Full';
        if (statCohort) statCohort.textContent = displayPercent + '%';

        const cohortObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetWidth = entry.target.getAttribute('data-width');
                    entry.target.style.width = targetWidth;
                }
            });
        }, { threshold: 0.5 });
        
        cohortObserver.observe(cohortFill);
    }

    // --- 7. THE LANTERN EFFECT ---
    const card = document.querySelector('.access-card');

    if(card) {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    }

    // --- 8. THE MECHANICAL SPOOL REVEAL ---
    const spoolText = document.getElementById("cipher-text");

    if (spoolText) {
        const text = spoolText.innerText;
        spoolText.innerHTML = '';

        if (prefersReducedMotion) {
            spoolText.innerText = text;
            spoolText.style.opacity = '1';
        } else {
            setTimeout(() => {
                text.split('').forEach((char, index) => {
                    const wrapper = document.createElement('span');
                    wrapper.classList.add('char-wrapper');
                    
                    const letter = document.createElement('span');
                    letter.classList.add('char');
                    letter.innerText = char;
                    letter.style.animationDelay = `${index * 0.05}s`;
                    
                    wrapper.appendChild(letter);
                    spoolText.appendChild(wrapper);
                });
            }, 500);
        }
    }

    // ============================================
    // NEW: PRODUCT TRACK DRAG-TO-SCROLL
    // ============================================
    const track = document.getElementById('products-track');
    if (track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.style.cursor = 'grabbing';
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        track.addEventListener('mouseleave', () => {
            isDown = false;
            track.style.cursor = 'grab';
        });

        track.addEventListener('mouseup', () => {
            isDown = false;
            track.style.cursor = 'grab';
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 1.5;
            track.scrollLeft = scrollLeft - walk;
        });
    }
});  // end product track

// ============================================
// EVERYTHING BELOW RUNS AFTER DOMContentLoaded
// (moved inside scope for clean variable access)
// ============================================

document.addEventListener('DOMContentLoaded', () => {

// --- 9. SENSORY LAYER (AUDIO/VISUAL SYNTHESIS) ---
    const atmosphereBtn = document.getElementById('atmosphere-toggle');
    const ambientAudio = document.getElementById('ambient-audio');
    let isPlaying = false;
    
    let audioCtx, analyser, source, dataArray;
    let animationId;
    let visualizerActive = false;

    if (atmosphereBtn && ambientAudio) {
        ambientAudio.volume = 0;

        atmosphereBtn.addEventListener('click', () => {
            if (!isPlaying) {
                try {
                    if (!audioCtx) {
                        const AudioContext = window.AudioContext || window.webkitAudioContext;
                        audioCtx = new AudioContext();
                        analyser = audioCtx.createAnalyser();
                        
                        source = audioCtx.createMediaElementSource(ambientAudio);
                        source.connect(analyser);
                        analyser.connect(audioCtx.destination);
                        
                        analyser.fftSize = 256; // Higher resolution for multi-band cerebral analysis
                        dataArray = new Uint8Array(analyser.frequencyBinCount);
                        visualizerActive = true;
                    }

                    if (audioCtx.state === 'suspended') {
                        audioCtx.resume();
                    }
                } catch (error) {
                    console.warn("Visualizer blocked by browser security. Audio will still play.");
                    visualizerActive = false;
                }

                document.body.classList.add('atmosphere-on');
                
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
                document.body.classList.remove('atmosphere-on');
                fadeAudio(ambientAudio, 0, 1500, () => {
                    ambientAudio.pause();
                    if (visualizerActive) cancelAnimationFrame(animationId);
                });
                isPlaying = false;
            }
        });

        function renderVisuals() {
            if (!isPlaying || !visualizerActive) return;
            animationId = requestAnimationFrame(renderVisuals);
            
            analyser.getByteFrequencyData(dataArray);
            
            // Multi-band analysis for cerebral effects
            let lowSum = 0, midSum = 0, highSum = 0;
            const lowEnd = 10, midEnd = 30, highEnd = 55;
            
            for (let i = 0; i < highEnd; i++) {
                if (i < lowEnd) lowSum += dataArray[i];
                else if (i < midEnd) midSum += dataArray[i];
                else highSum += dataArray[i];
            }
            
            const lowAvg = lowSum / (lowEnd * 255);      // 0-1: sub-bass, breathing
            const midAvg = midSum / ((midEnd - lowEnd) * 255); // 0-1: bowls, tones
            const highAvg = highSum / ((highEnd - midEnd) * 255); // 0-1: shimmer, air
            
            // Combined energy for backward compat
            let sum = 0;
            for (let i = 0; i < 30; i++) sum += dataArray[i];
            let average = sum / 30;
            
            const visualScale = 1 + (average / 255) * 0.15; 
            const visualGlow = (average / 255) * 1.2;

            document.body.style.setProperty('--audio-scale', visualScale);
            document.body.style.setProperty('--audio-glow', visualGlow);
            // New cerebral bands
            document.body.style.setProperty('--audio-low', lowAvg);
            document.body.style.setProperty('--audio-mid', midAvg);
            document.body.style.setProperty('--audio-high', highAvg);
        }
    }

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

// --- 10. SPA ROUTER ---
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        
        if (link && link.href && link.href.startsWith(window.location.origin) && link.target !== '_blank' && !link.hasAttribute('download')) {
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
                        }, 100); 
                    } else {
                        window.location.href = url;
                    }
                })
                .catch(err => {
                    console.error("SPA Router Error:", err);
                    window.location.href = url;
                });
            }, 800);
        }
    });

    window.addEventListener('popstate', () => {
        location.reload();
    });

// --- 11. CEREBRAL PARTICLE FIELD ---
// Floating golden motes that respond to audio
// frequency data. Drift slowly when atmosphere
// is ambient, pulse outward on frequency peaks.
// Uses raw Canvas2D for zero-dependency perf.

    const particleCanvas = document.getElementById('atmosphere-particles');
    
    if (particleCanvas) {
        const ctx = particleCanvas.getContext('2d');
        let particles = [];
        let particleAnimId;
        let particlesActive = false;
        const PARTICLE_COUNT = 60;

        function resizeCanvas() {
            particleCanvas.width = window.innerWidth;
            particleCanvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        function createParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push({
                    x: Math.random() * particleCanvas.width,
                    y: Math.random() * particleCanvas.height,
                    radius: Math.random() * 1.5 + 0.3,
                    baseRadius: Math.random() * 1.5 + 0.3,
                    vx: (Math.random() - 0.5) * 0.15,
                    vy: (Math.random() - 0.5) * 0.1 - 0.05, // gentle upward drift
                    alpha: Math.random() * 0.4 + 0.05,
                    baseAlpha: Math.random() * 0.4 + 0.05,
                    // Each particle responds to a different frequency band
                    freqBand: Math.floor(Math.random() * 40),
                    phase: Math.random() * Math.PI * 2, // breathing offset
                });
            }
        }

        function renderParticles() {
            if (!particlesActive) return;
            particleAnimId = requestAnimationFrame(renderParticles);

            ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

            // Get current audio data if available
            let freqData = null;
            let audioEnergy = 0;
            if (analyser && dataArray && isPlaying) {
                analyser.getByteFrequencyData(dataArray);
                freqData = dataArray;
                // Overall energy for global effects
                let sum = 0;
                for (let i = 0; i < 50; i++) sum += dataArray[i];
                audioEnergy = sum / (50 * 255); // 0 to 1
            }

            const time = Date.now() * 0.001;

            particles.forEach(p => {
                // Audio reactivity per-particle
                let freqInfluence = 0;
                if (freqData && freqData[p.freqBand] !== undefined) {
                    freqInfluence = freqData[p.freqBand] / 255;
                }

                // Breathing: slow sine oscillation + audio pulse
                const breathe = Math.sin(time * 0.5 + p.phase) * 0.3;
                p.radius = p.baseRadius + breathe + freqInfluence * 2.5;
                p.alpha = p.baseAlpha + breathe * 0.15 + freqInfluence * 0.4;
                p.alpha = Math.max(0, Math.min(1, p.alpha));

                // Movement: drift + audio-driven expansion
                const audioVx = (p.x - particleCanvas.width / 2) * audioEnergy * 0.002;
                const audioVy = (p.y - particleCanvas.height / 2) * audioEnergy * 0.002;
                
                p.x += p.vx + audioVx;
                p.y += p.vy + audioVy;

                // Wrap around edges
                if (p.x < -10) p.x = particleCanvas.width + 10;
                if (p.x > particleCanvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = particleCanvas.height + 10;
                if (p.y > particleCanvas.height + 10) p.y = -10;

                // Draw with golden glow
                const glowSize = p.radius * (3 + freqInfluence * 4);
                
                // Outer glow
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
                gradient.addColorStop(0, `rgba(229, 193, 85, ${p.alpha * 0.6})`);
                gradient.addColorStop(0.4, `rgba(229, 193, 85, ${p.alpha * 0.15})`);
                gradient.addColorStop(1, 'rgba(229, 193, 85, 0)');
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Core point
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245, 225, 160, ${p.alpha})`;
                ctx.fill();
            });

            // Occasional connection lines between close particles (neural network feel)
            if (audioEnergy > 0.15) {
                ctx.strokeStyle = `rgba(229, 193, 85, ${audioEnergy * 0.08})`;
                ctx.lineWidth = 0.5;
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 120) {
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
        }

        // Hook into atmosphere toggle
        const origToggle = atmosphereBtn;
        if (origToggle) {
            origToggle.addEventListener('click', () => {
                // Small delay to let audio start
                setTimeout(() => {
                    if (document.body.classList.contains('atmosphere-on')) {
                        if (!particlesActive) {
                            createParticles();
                            particlesActive = true;
                            renderParticles();
                        }
                    } else {
                        particlesActive = false;
                        if (particleAnimId) cancelAnimationFrame(particleAnimId);
                        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
                    }
                }, 200);
            });
        }
    }

}); // end second DOMContentLoaded
