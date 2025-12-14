
(function() {
    // Configuration: "Page Title" : "css-class-name"
    // Use lowercase keys.
    const eggs = {
        // --- Christmas ---
        "christmas": "egg-xmas",
        "christmas day": "egg-xmas",
        "christmas eve": "egg-xmas",
        "christmas tree": "egg-xmas",
        "xmas": "egg-xmas",

        // --- New Year ---
        "new year": "egg-newyear",
        "new year's day": "egg-newyear",
        "new year's eve": "egg-newyear",
        "hogmanay": "egg-newyear"
    };

    window.checkForEasterEgg = function(title) {
        // 1. Reset: Remove all known egg classes
        document.body.classList.remove('egg-xmas', 'egg-newyear');

        if(!title) return;
        const key = title.toLowerCase().trim();
        const eggClass = eggs[key];

        // 2. Check for match
        if (eggClass) {
            console.log("🥚 Active Easter Egg:", eggClass);
            document.body.classList.add(eggClass);

            // 3. Special Logic: New Year Confetti
            if(eggClass === 'egg-newyear' && window.confetti) {
                var duration = 3000;
                var animationEnd = Date.now() + duration;
                var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 60 };

                var randomInRange = (min, max) => Math.random() * (max - min) + min;

                var interval = setInterval(function() {
                    var timeLeft = animationEnd - Date.now();
                    if (timeLeft <= 0) return clearInterval(interval);
                    var particleCount = 50 * (timeLeft / duration);
                    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
                }, 250);
            }

            // 4. Notification (Once per session per article)
            const storageKey = `egg_found_${key}`;
            if(!sessionStorage.getItem(storageKey)) {
                if(window.showToast) {
                    // Slight delay to ensure UI is ready
                    setTimeout(() => window.showToast("🎁 You found an Easter Egg!"), 1000);
                }
                sessionStorage.setItem(storageKey, "true");
            }
        }
    };
})();