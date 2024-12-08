document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.classList.add('dark-mode-toggle');
    darkModeToggle.innerText = '🌙'; // Moon icon for dark mode

    // Append button to the page (for example, to the body or a header)
    document.body.appendChild(darkModeToggle);

    // Check if the theme is already dark, and update button accordingly
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.innerText = '🌞'; // Sun icon for light mode
    }

    darkModeToggle.addEventListener('click', function() {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            darkModeToggle.innerText = '🌙'; // Switch back to moon icon
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            darkModeToggle.innerText = '🌞'; // Switch to sun icon
            localStorage.setItem('theme', 'dark');
        }
    });
});
