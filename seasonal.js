(function() {
    const now = new Date();
    // Month is 0-indexed (0=Jan, 11=Dec)
    // Checks if current month is December
    if (now.getMonth() === 11) {
        
        // 1. Add class to body for JS targeting
        document.body.classList.add('seasonal-xmas');

        // 2. Load the CSS dynamically
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'seasonal.css';
        document.head.appendChild(link);

        // 3. Create Snow Layer (HTML)
        if(!document.getElementById('snow-layer')){
            const snow = document.createElement('div');
            snow.id = 'snow-layer';
            // Prepend so it sits behind absolute elements if needed, 
            // but CSS Z-Index handles visibility
            document.body.prepend(snow);
        }
    }
})();