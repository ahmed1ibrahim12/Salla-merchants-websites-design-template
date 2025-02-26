// Simulate content loading (replace this with your actual content load logic)
function simulateContentLoad() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Add your content loading logic here
            console.log('Content loaded!');
            resolve();
        }, 3000); // 3-second simulation
    });
}

// Hide loader function with fade-out animation
function hideLoader() {
    const loader = document.querySelector('.loader-container');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500); // Match this with CSS transition time
}

// Start loading process
window.addEventListener('load', async () => {
    // Show loading animation while loading content
    await simulateContentLoad();
    hideLoader();
});

// Optional: Instant hide if content already loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.readyState === 'complete') {
        hideLoader();
    }
});

window.addEventListener('load', () => {
    hideLoader();
});

async function hideLoader() {
    const loader = document.querySelector('.loader-container');
    const minDisplayTime = 1000; // 1 second minimum
    
    await new Promise(resolve => {
        setTimeout(resolve, Math.max(0, minDisplayTime - performance.now()));
    });

    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
}