window.onload = function () {
    const html = document.documentElement;
    const toggle = document.getElementById('darkToggle');

    // Set the toggle based on stored theme
    if (localStorage.theme === 'dark') {
        html.classList.add('dark');
        toggle.checked = true;
    } else {
        html.classList.remove('dark');
        toggle.checked = false;
    }

    toggle.addEventListener('change', () => {
        const isNowDark = toggle.checked;
        html.classList.toggle('dark', isNowDark);
        localStorage.theme = isNowDark ? 'dark' : 'light';
    });
};
