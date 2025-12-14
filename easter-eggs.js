(function() {
    const eggs = {
        "christmas": "egg-xmas", "christmas day": "egg-xmas", "christmas eve": "egg-xmas", "xmas": "egg-xmas",
        "new year": "egg-newyear", "new year's day": "egg-newyear", "new year's eve": "egg-newyear", "hogmanay": "egg-newyear"
    };

    window.checkForEasterEgg = function(title) {
        // 1. Reset
        document.body.classList.remove('egg-xmas', 'egg-newyear');
        const existingBanner = document.getElementById('egg-banner');
        if(existingBanner) existingBanner.remove();

        if(!title) return;
        const key = title.toLowerCase().trim();
        const eggClass = eggs[key];

        if (eggClass) {
            console.log("🥚 Active Easter Egg:", eggClass);
            document.body.classList.add(eggClass);

            // 2. Logic for New Year Banner (Dynamic Year)
            if(eggClass === 'egg-newyear') {
                const now = new Date();
                // If Dec, show next year. If Jan, show current year.
                const targetYear = now.getMonth() === 11 ? now.getFullYear() + 1 : now.getFullYear();
                
                const banner = document.createElement('div');
                banner.id = 'egg-banner';
                banner.innerText = `🎆 🥂 ${targetYear} 🥂 🎆`;
                
                // Insert before the article body
                const container = document.getElementById('article-container');
                if(container) container.insertBefore(banner, container.firstChild);

                // Confetti Logic
                if(window.confetti) {
                    var duration = 3000;
                    var end = Date.now() + duration;
                    (function frame() {
                        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#FFD700', '#C0C0C0'] });
                        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#FFD700', '#C0C0C0'] });
                        if (Date.now() < end) requestAnimationFrame(frame);
                    }());
                }
            }

            // 3. Notification
            const storageKey = `egg_found_${key}`;
            if(!sessionStorage.getItem(storageKey)) {
                if(window.showToast) setTimeout(() => window.showToast("🎁 You found an Easter Egg!"), 1000);
                sessionStorage.setItem(storageKey, "true");
            }
        }
    };
})();