// Check for saved theme preference or use preferred color scheme
const currentTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', currentTheme);

// Theme toggle functionality
const toggle = document.getElementById('toggle-theme');
toggle.checked = currentTheme === 'light';

toggle.addEventListener('change', function() {
    const newTheme = this.checked ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});