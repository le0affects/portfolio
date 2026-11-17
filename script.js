/* PROJECT MOUSE GLOW */

document.querySelectorAll(".work-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    });

});
/* LEO CUSTOM CURSOR */

const leoCursor = document.createElement("div");
leoCursor.className = "leo-cursor";
document.body.appendChild(leoCursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

let lastFrame = 0;
const cursorFPS = 1000 / 60;

function animateLeoCursor(timestamp) {
    requestAnimationFrame(animateLeoCursor);

    if (timestamp - lastFrame < cursorFPS) return;

    lastFrame = timestamp;

    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;

    leoCursor.style.left = cursorX + "px";
    leoCursor.style.top = cursorY + "px";


requestAnimationFrame(animateLeoCursor);
}

animateLeoCursor();

/* HOVER EFFECT */

document.querySelectorAll("a, button, .work-card").forEach(item => {
    item.addEventListener("mouseenter", () => {
        leoCursor.classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
        leoCursor.classList.remove("hover");
    });
});

/* CLICK EFFECT */

document.addEventListener("mousedown", () => {
    leoCursor.classList.add("clicking");
});

document.addEventListener("mouseup", () => {
    leoCursor.classList.remove("clicking");
});
/* LEO — SCROLL TEXT ANIMATION */

document.addEventListener("DOMContentLoaded", () => {

    const textElements = document.querySelectorAll(
        "section h2, section h3, section p, footer h2, footer p"
    );

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("text-visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    textElements.forEach((element, index) => {

        // Don't interfere with existing animations
        if (
            element.classList.contains("hero-title") ||
            element.classList.contains("reveal") ||
            element.classList.contains("kinetic-title") ||
            element.classList.contains("word-reveal")
        ) {
            return;
        }

        element.classList.add("leo-text-reveal");

        observer.observe(element);

    });

});
/* SPIDEY TAP INTERACTION */

const talk = document.querySelector(".contact-main");
const spideyTap = document.querySelector(".spidey-tap");

if (talk && spideyTap) {
    spideyTap.addEventListener("click", () => {
        talk.click();
    });
}