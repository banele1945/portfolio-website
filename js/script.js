// =========================
// TYPING EFFECT
// =========================

const typingText = document.querySelector(".typing-text");

if (typingText) {
    const words = [
        "Final-Year Computer Engineering Student",
        "Frontend Web Developer",
        "Embedded Systems Enthusiast",
        "Problem Solver",
        "Software Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingText.textContent = currentWord.substring(0, charIndex--);
        } else {
            typingText.textContent = currentWord.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = 1500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, speed);
    }

    document.addEventListener("DOMContentLoaded", typeEffect);
}
