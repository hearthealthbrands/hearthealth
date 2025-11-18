document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Global Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 2. Share Functionality (Social & Native) ---
    const shareButtons = document.querySelectorAll('[data-share-platform]');

    shareButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            // Prevent default if it's a link acting as a button
            e.preventDefault();

            const button = e.currentTarget;
            const platform = button.getAttribute('data-share-platform');
            // Fallback to current URL/Title if data attributes aren't set
            const url = button.getAttribute('data-share-url') || window.location.href;
            const title = button.getAttribute('data-share-title') || document.title;

            // A. Native Web Share API (Mobile/Modern Browsers)
            // We use this if the platform is set to 'native' OR if we want to override
            if (platform === 'native' && navigator.share) {
                try {
                    await navigator.share({
                        title: title,
                        text: 'Check out this guide from HeartHealth Brands:',
                        url: url
                    });
                    console.log('Content shared successfully');
                } catch (err) {
                    console.log('Error sharing:', err);
                }
                return; 
            }

            // B. Desktop/Specific Fallbacks
            let shareUrl = '';
            const encodedUrl = encodeURIComponent(url);
            const encodedTitle = encodeURIComponent(title);

            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=HeartHealthHQ`;
                    break;
                case 'email':
                    window.location.href = `mailto:?subject=${encodedTitle}&body=Check out this guide: ${encodedUrl}`;
                    return; 
            }

            if (shareUrl) {
                const width = 600;
                const height = 400;
                const left = (window.innerWidth - width) / 2;
                const top = (window.innerHeight - height) / 2;
                window.open(shareUrl, 'share-dialog', `width=${width},height=${height},top=${top},left=${left}`);
            }
        });
    });

    // --- 3. Copy to Clipboard ---
    const copyButtons = document.querySelectorAll('[data-action="copy"]');

    copyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const url = button.getAttribute('data-url') || window.location.href;
            copyLinkToClipboard(url, button);
        });
    });

    // --- 4. Print & Download Handlers ---
    const printBtn = document.getElementById('printBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const pdfFeedback = document.getElementById('pdf-feedback');

    if (printBtn) {
        printBtn.addEventListener('click', () => {
            if (pdfFeedback) pdfFeedback.classList.add('hidden');
            window.print();
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (pdfFeedback) pdfFeedback.classList.remove('hidden');
            setTimeout(() => window.print(), 100);
        });
    }
});

// --- Helper Functions ---

function copyLinkToClipboard(url, buttonElement) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showVisualFeedback(buttonElement);
        }).catch(console.error);
    } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            showVisualFeedback(buttonElement);
        } catch (err) {
            console.error('Fallback copy failed', err);
        }
        document.body.removeChild(textArea);
    }
}

function showVisualFeedback(buttonElement) {
    if (!buttonElement) return;

    // Check if it's the text button (Guide Tools) or Icon button (Share Bar)
    const span = buttonElement.querySelector('span');
    const originalContent = buttonElement.innerHTML;
    
    // If it has a span with text (e.g., "Copy Link")
    if (span && span.innerText) {
        const originalText = span.innerText;
        span.innerText = 'Copied!';
        buttonElement.classList.add('bg-green-50', 'text-green-600');
        
        // Check for the specific feedback div in the guide
        const guideFeedback = document.getElementById('copy-feedback');
        if(guideFeedback) {
            guideFeedback.style.opacity = '1';
            setTimeout(() => guideFeedback.style.opacity = '0', 2000);
        }

        setTimeout(() => {
            span.innerText = originalText;
            buttonElement.classList.remove('bg-green-50', 'text-green-600');
        }, 2000);
    } else {
        // Icon-only button
        buttonElement.innerHTML = `<svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
        setTimeout(() => {
            buttonElement.innerHTML = originalContent;
        }, 2000);
    }
}