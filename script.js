function showSidebar() {
    const sidebar = document.querySelector(".navbar__sidebar")
    sidebar.style.display = "flex"
}
function hideSidebar() {
    const sidebar = document.querySelector(".navbar__sidebar")
    sidebar.style.display = "none"
}

// Add this to your existing script
function toggleTheme() {
    // Get the theme toggle SVG element
    const themeIcon = document.querySelector('.theme-toggle svg');

    // Toggle between two rotation classes
    if (themeIcon.classList.contains('rotate-clockwise')) {
        themeIcon.classList.remove('rotate-clockwise');
        themeIcon.classList.add('rotate-counterclockwise');
    } else {
        themeIcon.classList.remove('rotate-counterclockwise');
        themeIcon.classList.add('rotate-clockwise');
    }

    // Check if the current theme is dark
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // Toggle the theme
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Check for saved theme preference or respect OS preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If no saved preference, use OS preference
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', initTheme);