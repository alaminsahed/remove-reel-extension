function hideReels() {

    // Hide Facebook Reels
    if (window.location.href === 'https://www.facebook.com/reel/') {
        window.location.href = 'https://www.facebook.com/';
        return;
    }

    if (window.location.href.startsWith('https://www.facebook.com/')) {
        const reelsSelectors = document.querySelectorAll('[aria-label="reel"]');
        reelsSelectors.forEach((reel) => {
            reel.style.display = 'none';
        });
    }

    // Hide YouTube Shorts
    if (window.location.href.startsWith('https://www.youtube.com/shorts/')) {
        console.log("Redirecting YouTube Shorts to homepage");
        setTimeout(() => {
            window.location.replace('https://www.youtube.com/');
        }, 500);
        return;
    }

    if (window.location.href.startsWith('https://www.youtube.com/')) {
        const shortsSelectors = document.querySelectorAll('.ytd-rich-section-renderer');
        shortsSelectors.forEach((short) => {
            short.style.display = 'none';
        });
        console.log('Shorts selectors hidden:', shortsSelectors);
    }
}


hideReels();

// Observe for new elements being added dynamically
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
            hideReels();
        }
    });
});

// Start observing the body for changes
observer.observe(document.body, { childList: true, subtree: true });

console.log('Observer started, waiting for Reels to appear.');
