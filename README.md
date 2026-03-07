# Off Day Collective | Launch Site

> **Curated goods for intentional downtime.**

This repository contains the source code for the **Off Day Collective** teaser website. It is designed as a single-page, narrative experience to capture early email leads before the official brand launch.

## ⚡️ Technical Overview

The site is built as a lightweight, static web application. It relies on no external frameworks, ensuring maximum performance and distinct visual control.

* **Stack:** HTML5, CSS3, Vanilla JavaScript (ES6+).
* **Performance:** Zero dependencies, optimized for rapid loading.
* **Design:** Custom "Quiet Luxury" aesthetic with grain overlays and serif typography.

## ✨ Key Features

* **CSS Scroll Snapping:** Enforces a "slide-by-slide" narrative pace.
* **Parallax Typography:** Background text moves at a different speed than foreground content (`data-speed` attributes).
* **Micro-Interactions:** Expanding product tiles and magnetic hover effects.
* **Simulated Backend:** The email form mimics an asynchronous server request (`setTimeout`) with loading states and success feedback, ready for API integration.

## 📂 Project Structure

```text
off-day-collective/
│
├── index.html          # Main entry point and semantic markup
├── css/
│   └── style.css       # Visual styles, animations, and responsive layout
├── js/
│   └── app.js          # IntersectionObservers and logic
└── README.md           # Documentation
