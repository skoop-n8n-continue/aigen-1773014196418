// Digital Signage Script
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World App Initialized');

    // Add a simple subtle pulse effect to the title
    const title = document.querySelector('h1');
    if (title) {
        setInterval(() => {
            title.style.transition = 'transform 3s ease-in-out';
            title.style.transform = 'scale(1.05)';
            setTimeout(() => {
                title.style.transform = 'scale(1)';
            }, 3000);
        }, 6000);
    }
});
