document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const counters = document.querySelectorAll(".counter-value[data-target]");

    counters.forEach((counter) => {
        const target = Number(counter.getAttribute("data-target"));
        const duration = 1200;
        const startTime = performance.now();

        const step = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * target);
            counter.textContent = `${value}+`;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                counter.textContent = `${target}+`;
            }
        };

        requestAnimationFrame(step);
    });
});
