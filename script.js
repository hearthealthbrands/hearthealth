document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. Global Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 2. Guide Page Tools (Specific to 30-Day Guide) ---
    // We check if elements exist first so this code won't crash on other pages
    const printBtn = document.getElementById('printBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');
    const copyFeedback = document.getElementById('copy-feedback');
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
            // Small delay to allow the feedback message to appear before print dialog
            setTimeout(() => {
                window.print();
            }, 100);
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            copyLinkToClipboard(window.location.href, shareBtn);
            // Show the specific feedback message for the guide page
            if (copyFeedback) {
                copyFeedback.style.opacity = '1';
                setTimeout(() => {
                    copyFeedback.style.opacity = '0';
                }, 2000);
            }
        });
    }
});

// --- 3. Global Sharing Functions (Used by Share Bar & Content Hub) ---
// These must be outside the DOMContentLoaded block so inline onclick="" attributes can find them.

function shareToSocial(platform, url, title) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    let shareUrl = '';

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=HeartHealthHQ`;
            break;
        case 'email':
            window.location.href = `mailto:?subject=${encodedTitle}&body=Check out this guide: ${encodedUrl}`;
            return; // Email opens default client, no popup needed
    }

    // Open a centered popup window
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    if (shareUrl) {
        window.open(
            shareUrl, 
            'share-dialog', 
            `width=${width},height=${height},top=${top},left=${left}`
        );
    }
}

function copyLinkToClipboard(url, buttonElement) {
    // Use the modern Clipboard API
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showVisualFeedback(buttonElement);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for older browsers or non-secure contexts
            fallbackCopyTextToClipboard(url, buttonElement);
        });
    } else {
        fallbackCopyTextToClipboard(url, buttonElement);
    }
}

function fallbackCopyTextToClipboard(text, buttonElement) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Ensure textarea is not visible
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showVisualFeedback(buttonElement);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

function showVisualFeedback(buttonElement) {
    // If the button is an icon-only button (like in Content Hub)
    if (buttonElement) {
        const originalHTML = buttonElement.innerHTML;
        
        // Check if it's the large button with text or small icon button
        if (buttonElement.querySelector('span')) {
            // It's a large button (Share Bar) - Change text
            const span = buttonElement.querySelector('span');
            const originalText = span.innerText;
            span.innerText = 'Copied!';
            buttonElement.classList.add('bg-green-50', 'text-green-600');
            
            setTimeout(() => {
                span.innerText = originalText;
                buttonElement.classList.remove('bg-green-50', 'text-green-600');
            }, 2000);
        } else {
            // It's a small icon button (Content Hub) - Change icon
            buttonElement.innerHTML = `<svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
            
            setTimeout(() => {
                buttonElement.innerHTML = originalHTML;
            }, 2000);
        }
    }
}