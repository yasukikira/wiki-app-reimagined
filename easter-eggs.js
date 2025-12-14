// easter-eggs.js

(function() {
    // Configuration: "Page Title" : "css-class-name"
    // We use lowercase for easier matching
    const eggs = {
        "santa claus": "egg-santa",
        "saint nicholas": "egg-santa",
        "father christmas": "egg-santa",
        "christmas": "egg-xmas",
        "christmas tree": "egg-xmas",
        "rudolph the red-nosed reindeer": "egg-rudolph"
    };

    window.checkForEasterEgg = function(title) {
        // 1. Clean up previous eggs
        document.body.classList.remove('egg-santa', 'egg-xmas', 'egg-rudolph');

        // 2. Check if current title matches
        const key = title.toLowerCase();
        
        // 3. Apply class if match found
        if (eggs[key]) {
            console.log("🥚 Easter Egg Found:", key);
            document.body.classList.add(eggs[key]);
        }
    };
})();