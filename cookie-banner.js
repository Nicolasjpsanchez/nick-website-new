// cookie-banner.js

// Function to show the cookie banner
function showCookieBanner() {
    // Create the banner HTML
    const bannerHTML = `
        <div id="cookie-banner" style="position: fixed; bottom: 0; left: 0; width: 100%; background: #000; color: #fff; padding: 16px 24px; display: flex; justify-content: space-between; align-items: center; font-family: Arial, sans-serif; box-shadow: 0 -2px 10px rgba(0,0,0,0.2); z-index: 1000;">
            <div style="max-width: 70%;">
                <strong style="font-size: 16px;">We value your privacy</strong>
                <p style="font-size: 14px; margin-top: 4px;">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                    By clicking "Accept All," you consent to our use of cookies.
                </p>
            </div>
            <div style="display: flex; gap: 10px;">
                <button id="customize-cookies" style="background: transparent; color: white; border: 1px solid white; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
                    Customize
                </button>
                <button id="reject-cookies" style="background: transparent; color: white; border: 1px solid white; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
                    Reject All
                </button>
                <button id="accept-cookies" style="background: white; color: black; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer;">
                    Accept All
                </button>
            </div>
        </div>
    `;

    // Insert the banner into the body of the HTML
    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    // Block interactions with the rest of the page
    const pageContent = document.querySelector('body');
    pageContent.style.pointerEvents = 'none'; // Disable interactions

    // Get buttons and set up event listeners
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');
    const customizeButton = document.getElementById('customize-cookies');

    // Handle "Accept All" button click
    acceptButton.addEventListener('click', () => {
        document.getElementById('cookie-banner').style.display = 'none';
        pageContent.style.pointerEvents = 'auto'; // Re-enable interactions
        // Add logic to handle cookie consent (e.g., set cookies)
    });

    // Handle "Reject All" button click
    rejectButton.addEventListener('click', () => {
        document.getElementById('cookie-banner').style.display = 'none';
        pageContent.style.pointerEvents = 'auto'; // Re-enable interactions
        // Add logic to handle cookie rejection (e.g., delete cookies)
    });

    // Handle "Customize" button click
    customizeButton.addEventListener('click', () => {
        alert('Customize your cookie preferences');
        // Add logic to show cookie customization options (optional)
    });
}

// Show the cookie banner when the page loads
window.onload = showCookieBanner;
