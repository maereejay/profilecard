🪪 Profile Card — HNG Internship (Stage 1)

Live Project: https://onwuasorprofilecard.netlify.app/

This project is part of my HNG Internship Stage 1 Task, built upon my Stage 0 Profile Card.
In this stage, I extended the single-page component into a multi-page application with two new pages — Contact Us and About Me — while maintaining accessibility, responsiveness, and clean semantic structure.

🚀 Project Overview

This project demonstrates my ability to create accessible, responsive, and modular front-end components using HTML, CSS, and JavaScript — no frameworks, no shortcuts.

The app now includes:

A Profile Card (from Stage 0)

A Contact Us page with form validation and accessibility support

An About Me page with reflective content and semantic sectioning


♿ Accessible Design

All form inputs include <label> elements linked via for.

Error messages use aria-describedby for screen reader compatibility.

Entire app is keyboard-navigable.

Alt text and ARIA labels ensure inclusive usability.

🧩 Contact Us Page

Includes Full Name, Email, Subject, and Message fields.

Inline form validation:

All fields required.

Email must match a valid pattern.

Message requires at least 10 characters.

Displays success message only after a valid submission.

Uses data-testids (e.g., test-contact-name, test-contact-success) for automated testing.

💬 About Me Page

A reflective, semantically structured page divided into:

Bio (test-about-bio)

Goals in this program (test-about-goals)

Areas of low confidence (test-about-confidence)

Note to future self (test-about-future-note)

Extra thoughts (test-about-extra)

Each section uses clear headings and follows proper document hierarchy.

📱 Responsive Layout

Built with Flexbox and media queries — scales smoothly across mobile, tablet, and desktop.

⏱️ Dynamic Elements

The Profile Card includes a real-time clock powered by Date() in JavaScript.

🌐 Safe Links

External links open securely with
target="_blank" + rel="noopener noreferrer".

🧠 Tech Stack

HTML5 — semantic structure

CSS3 — Flexbox, responsive design, hover/transition effects

Vanilla JavaScript — dynamic content & form validation

