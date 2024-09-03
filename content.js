function hideReels() {
    // Hide Facebook Reels
    const reelsButton = document.querySelector(
        'a[href="/reel/?s=bookmark"]'
    );
    if (reelsButton) {
        reelsButton.style.display = 'none';
    }

    if (window.location.href.startsWith('https://www.facebook.com/')) {
        const reelsSelectors = document.querySelectorAll('[aria-label="reel"]');
        reelsSelectors.forEach((reel) => {
            reel.style.display = 'none';
        });
    }

    // Hide YouTube Shorts
    const shortsButton = document.querySelector(
        'a[title="Shorts"]'
    );

    if (shortsButton) {
        shortsButton.style.display = 'none';
    }

    if (window.location.href.startsWith('https://www.youtube.com/')) {
        const shortsSelectors = document.querySelectorAll('.ytd-rich-section-renderer');
        shortsSelectors.forEach((short) => {
            short.style.display = 'none';
        });

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

