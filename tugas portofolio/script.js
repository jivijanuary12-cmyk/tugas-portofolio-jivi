document.addEventListener('DOMContentLoaded', function () {
    // IntersectionObserver for the on-scroll About reveal (keeps previous behaviour)
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });
        io.observe(aboutSection);
    }

    // Click-to-focus About behaviour from header
    const aboutNav = document.querySelector('#nav-about');
    const profileContainer = document.querySelector('.profile-image-container');
    const body = document.body;

    if (aboutNav && profileContainer) {
        aboutNav.addEventListener('click', function (e) {
            e.preventDefault();
            // Activate focused about layout
            body.classList.add('focus-about');
            // ensure the about overlay is visible (CSS handles sliding)
            // scroll to top so the fixed profile image is vertically centered
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Clicking profile image closes the focused view and returns to normal
        profileContainer.addEventListener('click', function () {
            if (body.classList.contains('focus-about')) {
                body.classList.remove('focus-about');
            }
        });

        // Back to Home button inside About overlay
        const backBtn = document.querySelector('#back-home');
        if (backBtn) {
            backBtn.addEventListener('click', function () {
                body.classList.remove('focus-about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
});
