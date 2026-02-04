/**
 * HYPER HUSTLE - Centralized Loader & Ad Manager
 * This file handles Header, Footer, and all Adsterra Units across all blogs.
 */

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

    // 4. Auto-highlight active link
    const currentPath = window.location.pathname.split("/").pop() || "index";
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Run Component Injection
injectComponents();

/**
 * ADSTERRA AD MANAGEMENT SECTION
 * Focus: Maximum CPM with Adult Content Enabled
 */
(function() {
    // 1. Inject Popunder into <head> (Highest CPM)
    const popunder = document.createElement('script');
    popunder.src = "https://pl28645082.effectivegatecpm.com/ba/e3/66/bae3667b0d7b23fe8b699c4a140ed4d5.js";
    document.head.appendChild(popunder);

    // 2. Inject Social Bar at bottom of <body> (High CTR for Telegram users)
    const socialBar = document.createElement('script');
    socialBar.src = "https://pl28645091.effectivegatecpm.com/8f/0b/a0/8f0ba070faa23d6c5279c4a067d5b286.js";
    document.body.appendChild(socialBar);

    // 3. Inject On-Page Ads when DOM is ready
    window.addEventListener('DOMContentLoaded', () => {
        
        // --- NATIVE BANNER (Top of Blog List) ---
        const blogMain = document.getElementById('blog-list');
        if (blogMain) {
            const nativeContainer = document.createElement('div');
            nativeContainer.id = "container-fe6517c204c8d05f79af5efc08e601cf";
            
            const nativeScript = document.createElement('script');
            nativeScript.async = true;
            nativeScript.setAttribute('data-cfasync', 'false');
            nativeScript.src = "https://pl28645115.effectivegatecpm.com/fe6517c204c8d05f79af5efc08e601cf/invoke.js";
            
            blogMain.prepend(nativeContainer);
            blogMain.prepend(nativeScript);
        }

        // --- SIDEBAR SKYSCRAPERS (Fixed createElement Logic) ---
        const sidebar = document.querySelector('aside');
        if (sidebar) {
            // A. Left/Top Skyscraper (160x600)
            const sideTop = document.createElement('div');
            sideTop.className = 'sidebar-section';
            sideTop.style.textAlign = 'center';

            const scriptOptions1 = document.createElement('script');
            scriptOptions1.text = "atOptions = { 'key' : '7d6272a9497994b58ae2c3620c2390de', 'format' : 'iframe', 'height' : 600, 'width' : 160, 'params' : {} };";
            
            const scriptInvoke1 = document.createElement('script');
            scriptInvoke1.src = "https://www.highperformanceformat.com/7d6272a9497994b58ae2c3620c2390de/invoke.js";

            sideTop.appendChild(scriptOptions1);
            sideTop.appendChild(scriptInvoke1);
            sidebar.prepend(sideTop);

            // B. Right/Bottom Skyscraper (160x300)
            const sideBottom = document.createElement('div');
            sideBottom.className = 'sidebar-section';
            sideBottom.style.textAlign = 'center';
            sideBottom.style.marginTop = '20px';

            const scriptOptions2 = document.createElement('script');
            scriptOptions2.text = "atOptions = { 'key' : '6ebd8fa0cb1a3fd5499d552ea55dce3f', 'format' : 'iframe', 'height' : 300, 'width' : 160, 'params' : {} };";
            
            const scriptInvoke2 = document.createElement('script');
            scriptInvoke2.src = "https://www.highperformanceformat.com/6ebd8fa0cb1a3fd5499d552ea55dce3f/invoke.js";

            sideBottom.appendChild(scriptOptions2);
            sideBottom.appendChild(scriptInvoke2);
            sidebar.appendChild(sideBottom);
        }
    });
})();