const siteComponents = {
    // The Header HTML
    header: `
        <nav>
            <a href="index" class="logo">Hyper Hustle</a>
            <ul class="nav-links">
                <li><a href="index">Home</a></li>
                <li><a href="Deploy-Applications">Deploy Application</a></li>
                <li><a href="tools">Tools</a></li>
            </ul>
        </nav>
    `,

    // The Footer HTML
    footer: `
        <div class="footer-content">
            <div class="footer-links">
                <a href="index">Home</a>
                <a href="about">About Us</a>
                <a href="contact">Contact</a>
                <a href="dmca">DMCA</a>
                <a href="terms-and-conditions">Terms and Conditions</a>
                <a href="disclaimer">Disclaimer</a>
            </div>
            <p class="copyright">&copy; 2026 HyperHustle. All rights reserved.</p>
        </div>
    `
};

function injectComponents() {
    // 1. Inject Header
    const headerTag = document.querySelector('header');
    if (headerTag) headerTag.innerHTML = siteComponents.header;

    // 2. Inject Footer
    const footerTag = document.querySelector('footer');
    if (footerTag) footerTag.innerHTML = siteComponents.footer;

    // 3. Update Title based on H1
    const articleHeading = document.querySelector('.article-title');
    if (articleHeading) {
        document.title = articleHeading.innerText + " – Hyper Hustle";
    }

    // 4. (Optional) Auto-highlight active link
    const currentPath = window.location.pathname.split("/").pop() || "index";
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Run immediately
injectComponents();

