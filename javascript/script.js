
/* =========================
   NAV CLICK SOUND (OPTIONAL)
========================= */

const clickSound = new Audio();
clickSound.src = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b8f6c4c0.mp3?filename=button-click-124467.mp3";
clickSound.preload = "auto";

let unlocked = false;

document.body.addEventListener("click", () => {
    unlocked = true;
});

/* =========================
   NAV ACTIVE + SOUND
========================= */

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {

        // active class
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // sound
        if (unlocked) {
            clickSound.currentTime = 0;
            clickSound.play().catch(err => {});
        }
    });
});

/* =========================
   JET CLICK EFFECT (FUN)
========================= */

document.querySelectorAll(".jet").forEach(jet => {
    jet.addEventListener("click", () => {
        jet.style.transform = "scale(1.2)";
        setTimeout(() => {
            jet.style.transform = "scale(1)";
        }, 200);
    });
});