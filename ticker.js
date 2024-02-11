document.addEventListener("DOMContentLoaded", function () {
    const tickerText = document.getElementById("ticker");

    // Adjust the speed (higher value for slower speed)
    const speed = 5;

    function tick() {
        tickerText.style.transform = `translateX(-${speed}px)`;
        requestAnimationFrame(tick);
    }

    // Start the ticker
    tick();
});
