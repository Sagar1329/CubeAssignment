document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");
    const duration = 1200;

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-value");
        let startTime = null;

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = Math.floor(progress * target);

            counter.textContent = `${value}%`;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                counter.textContent = `${target}%`;
            }
        }

        requestAnimationFrame(animate);
    });
});
