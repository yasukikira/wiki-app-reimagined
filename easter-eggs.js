(function() {
    // Configuration
    const eggs = {
        // Santa Variations
        "santa claus": "egg-santa",
        "santa": "egg-santa",
        "saint nicholas": "egg-santa",
        "father christmas": "egg-santa",
        "kris kringle": "egg-santa",
        
        // Christmas Variations
        "christmas": "egg-xmas",
        "christmas day": "egg-xmas",
        "xmas": "egg-xmas",
        "christmas tree": "egg-xmas",
        
        // Rudolph
        "rudolph the red-nosed reindeer": "egg-rudolph",
        "rudolph (reindeer)": "egg-rudolph"
    };

    window.checkForEasterEgg = function(title) {
        // 1. Reset
        document.body.classList.remove('egg-santa', 'egg-xmas', 'egg-rudolph');

        // 2. Normalize title
        if(!title) return;
        const key = title.toLowerCase().trim();
        
        // 3. Check for match
        if (eggs[key]) {
            console.log("🥚 Active Easter Egg:", eggs[key]);
            document.body.classList.add(eggs[key]);
        }
    };
})();